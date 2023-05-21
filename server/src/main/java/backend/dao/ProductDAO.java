package backend.dao;

<<<<<<< HEAD
import backend.models.Company;
import backend.models.Product;
import backend.dto.ProductDetailDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

=======
import backend.dto.ProductListDTO;
import backend.models.Assets;
import backend.models.Category;
import backend.models.Company;
import backend.models.Product;
import backend.models.ProductDetail;
import backend.models.Spec;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.sql.DataSource;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.support.JdbcDaoSupport;
import org.springframework.transaction.annotation.Transactional;
>>>>>>> 4a1f7dc8f36597c9808936e8c20069c06465542f
import java.util.ArrayList;
import java.util.List;

@Repository
<<<<<<< HEAD
public class ProductDAO {
=======
public class ProductDAO extends JdbcDaoSupport{
>>>>>>> 4a1f7dc8f36597c9808936e8c20069c06465542f
    @Autowired
    private IProduct _product;
    @Autowired
    private IAsset _asset;
    @Autowired
<<<<<<< HEAD
    private ICompany _company;
    @Autowired IProductDetail _productDetail;
    @Autowired
    private ISpec _spec;
    public List<ProductDetailDTO>getProductDetail(int limit, int offset,long type){
        List<Product>products=_product.findAll().stream().skip(offset).limit(limit).toList();
        List<ProductDetailDTO>DetailDTOs = new ArrayList<>();

        for(Product product : products){
            ProductDetailDTO DetailDTO = productToProductDetailDTO(product);
            if(DetailDTO.getProductId().equals(type)){
                DetailDTOs.add(DetailDTO);
            }
        }

        return DetailDTOs;
    }
    public ProductDetailDTO productToProductDetailDTO(Product product){
        ProductDetailDTO DetailDTO = new ProductDetailDTO();
        List<String>Image = _asset.findAssetPathByProductID(product.getProductId());
        List<String>Spec = _spec.findSpecInfoByProductID(product.getProductId());
        DetailDTO.setProductId(product.getProductId());
        DetailDTO.setProductName(product.getProductName());
        DetailDTO.setProductPrice(product.getProductPrice());
        DetailDTO.setProductRating(product.getProductRating());
        DetailDTO.setProductSold(product.getProductSold());
        DetailDTO.setProductStatus(product.getProductStatus());
        DetailDTO.setProductVersion(product.getProductVersion());
        DetailDTO.setCompany(findProductCompany(product));
        DetailDTO.setSpecInfo(Spec);
        DetailDTO.setImagePath(Image);
        return DetailDTO;
=======
    private ICategory _category;
    @Autowired
    private ICompany _company;
    @Autowired IProductDetail _productDetail;
    @Autowired
    private IProductAsset _productAsset;
    @Autowired
    private ISpec _spec;
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
>>>>>>> 4a1f7dc8f36597c9808936e8c20069c06465542f
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
<<<<<<< HEAD
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
   
=======
    public String findProductCategory(Product product){
        List<Category>categories = _category.findAllCategory();
        for(Category category : categories){
            if(product.getCategoryId() == category.getCategoryId()){
                return category.getCategoryName();
            }
        }
        return null;
    }

    public long getProductSpecID(Product product){
        List<ProductDetail>Details = _productDetail.findAll();
        for(ProductDetail productDetail : Details){
            if(product.getProductId() == productDetail.getProductId()){
                return productDetail.getSpecId();
            }
        }
        return 0;
    }
    public String getProductSpecName(Product product){
        long tam = getProductSpecID(product);
        List<Spec>Specs = _spec.findAll();
        for(Spec spec : Specs){
            if(tam == spec.getSpecId()){
                return spec.getSpecName();
            }
        }
        return null;
    }
    public String getProductSpecDetail(Product product){
        long tam = getProductSpecID(product);
        List<Spec>Specs = _spec.findAll();
        for(Spec spec : Specs){
            if(tam == spec.getSpecId()){
                return spec.getSpecDetail();
            }
        }
        return null;
    }
    

    public List<ProductListDTO> getProduct(long productID){
        List<Product>products = _product.getProductByID(productID);
        List<ProductListDTO> productListDTOs = new ArrayList<>();
        for(Product product : products){
        ProductListDTO productDTo = productToProductListDTO(product);
        productListDTOs.add(productDTo);
        }
        return productListDTOs;
    }
>>>>>>> 4a1f7dc8f36597c9808936e8c20069c06465542f

}