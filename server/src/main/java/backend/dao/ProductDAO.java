package backend.dao;

import backend.dto.InsertAssetDTO;
import backend.dto.InsertSpecDTO;
import backend.dto.ProductListDTO;
import backend.dto.InsertProductDTO;
import backend.models.Assets;
import backend.models.Category;
import backend.models.Company;
import backend.models.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public class ProductDAO {
    @Autowired
    private IProduct _product;
    @Autowired
    private IAsset _asset;
    @Autowired
    private ICategory _category;
    @Autowired
    private ICompany _company;
    @Autowired
    private IProductAsset _productAsset;
    @Autowired
    private ISpec _spec;
    @Autowired
    private IProductDetail _productDetail;
    public List<ProductListDTO>getProductList(int limit, int offset){
        List<Product>products=_product.findAll().stream().skip(offset).limit(limit).toList();
        List<ProductListDTO>productListDTOS = new ArrayList<>();

        for(Product product : products){
            ProductListDTO productDTo = productToProductListDTO(product);
            productListDTOS.add(productDTo);
        }

        return productListDTOS;
    }
    public ProductListDTO productToProductListDTO(Product product){
        ProductListDTO productDTo = new ProductListDTO();
        productDTo.setProductName(product.getProductName());
        productDTo.setProductPrice(product.getProductPrice());
        productDTo.setProductRating(product.getProductRating());
        productDTo.setProductSold(product.getProductSold());
        productDTo.setProductStatus(product.getProductStatus());
        productDTo.setProductVersion(product.getProductVersion());
        productDTo.setCategory(findProductCategory(product));
        productDTo.setCompany(findProductCompany(product));
        Assets asset = _asset.findAssetIconByProductId(product.getProductId());
        if(asset!=null){
            productDTo.setProductIcon(asset.getAssetPath());
        }
        return productDTo;
    }
    public String findProductCompany(Product product){
        List<Company>companies = _company.findAllCompany();
        for(Company company : companies){
            if(product.getCompanyId() == company.getCompanyId()){
                return company.getCompanyName();
            }
        }
        return null;
    }
    public String findProductCategory(Product product){
        List<Category>categories = _category.findAllCategory();
        for(Category category : categories){
            if(product.getCompanyId() == category.getCategoryId()){
                return category.getCategoryName();
            }
        }
        return null;
    }

    public boolean deleteProductById(long productId){
        try{
            _product.setDelete(productId,true);
        }
        catch(Exception e){
            System.out.println("Error: "+e);
        }
        return true;
    }
    public boolean restoreProductById(long productId){
        try{
            _product.setDelete(productId,false);
        }
        catch(Exception e){
            System.out.println("Error: "+e);
        }
        return true;
    }

    public boolean insertProduct (InsertProductDTO product) {
        try {
            _product.insertProduct(product.getProductName(), product.getCategoryId(),
                                    product.getCompanyId(), product.getProductVersion(),
                                    product.getProductStock(),product.getProductPrice());

            int productId= _product.findProductId(product.getProductName(), product.getCategoryId(), product.getCompanyId(), product.getProductVersion());

            for (InsertAssetDTO lst: product.getAssets()) {
                _asset.insertAsset(lst.getAssetName(), lst.getAssetPath(), lst.getAssetType());
                int assetId = _asset.getIdAsset(lst.getAssetName(), lst.getAssetPath(), lst.getAssetType());
                _productAsset.insertProductAsset(productId, assetId, lst.getAssetRole());
            }
            for (InsertSpecDTO lst: product.getSpecs()) {
                _spec.insertSpec(lst.getSpecName(), lst.getGroupId(), lst.getSpecDetail(), lst.getSpecValue());
                int specId = _spec.getIdSpec(lst.getSpecName(), lst.getGroupId(), lst.getSpecDetail(), lst.getSpecValue());
                _productDetail.insertProductDetail(productId, specId);
            }
        }
        catch(Exception e){
            System.out.println("Error: "+e);
        }
        return true;
    }

}
