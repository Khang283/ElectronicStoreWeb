package backend.dao;
import org.apache.commons.lang3.ObjectUtils;
import backend.dto.ProductListDTO;
import backend.models.Assets;
import backend.models.Category;
import backend.models.Company;
import backend.models.Product;
import java.math.BigDecimal;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import backend.dto.ModifyProductDTO;
import java.util.ArrayList;
import java.util.List;
import backend.dto.ModifyAssetDTO;
import backend.dto.ModifySpecDTO;
import java.lang.Long;
import backend.dto.ModifyProductAssetDTO;
import backend.dto.ModifyProductDetailDTO;

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
    public boolean modifyProductById(ModifyProductDTO modProd){
        try{
            _product.setModify(modProd.getProductId(),modProd.getProductName(),modProd.getProductVersion() ,modProd.getCompanyId() , modProd.getProductStock(),modProd.getProductPrice(), modProd.getProductRating(), modProd.getCategoryId());
            Long productId = _product.getProductId(modProd.getProductName(), modProd.getCategoryId(), modProd.getCompanyId(), modProd.getProductVersion());
            for(ModifyAssetDTO lst : modProd.getProductAsset()){
               if(lst.isDeleted() == false){
                   if(lst.isInsert()){
                Long checkAssetId = _asset.getAssetId(lst.getAssetName(), lst.getAssetPath(), lst.getAssetType());
                if (checkAssetId == null || ObjectUtils.isEmpty(checkAssetId)){
                _asset.insertAsset(lst.getAssetName(), lst.getAssetPath(), lst.getAssetType());
                Long assetId = _asset.getAssetId(lst.getAssetName(), lst.getAssetPath(), lst.getAssetType());
                for(ModifyProductAssetDTO lstt : lst.getProductAsst() ){
                _productAsset.insertProductAsset(modProd.getProductId(), assetId, lst.getAssetRole());
                }
                }
                }else{
                _asset.modifyAsset(lst.getAssetId(), lst.getAssetName(), lst.getAssetPath(), lst.getAssetType());
                //Long assetId = _asset.getAssetId(lst.getAssetName(), lst.getAssetPath(), lst.getAssetType());
                for(ModifyProductAssetDTO lstt: lst.getProductAsst()){
                _productAsset.modifyProductAsset(lstt.getProductAssetId(),modProd.getProductId(),lst.getAssetId(),lst.getAssetRole());}}
               }
                else if(lst.isDeleted() == true){
                    _productAsset.setDeleteAsset(modProd.getProductId(), lst.getAssetId(),lst.getAssetRole(), true);
                }
            }
            for(ModifySpecDTO lst : modProd.getProductDetail()){
                if(lst.isDeleted() == false){
                    if(lst.isInsert()){
                 Long checkSpecId = _spec.getSpecId(lst.getSpecName(), lst.getGroupId(), lst.getSpecDetail(), lst.getSpecValue());
                 if(checkSpecId == null || ObjectUtils.isEmpty(checkSpecId)){
                     _spec.insertSpec(lst.getSpecName(), lst.getGroupId(), lst.getSpecDetail(), lst.getSpecValue());
                     Long specId = _spec.getSpecId(lst.getSpecName(), lst.getGroupId(), lst.getSpecDetail(), lst.getSpecValue());
                     for(ModifyProductDetailDTO lstt : lst.getProductDtl())
                     {
                     _productDetail.insertProductDetail(modProd.getProductId(), specId);}
                 }
                 }else{
                _spec.modifySpec(lst.getSpecId(),lst.getSpecName(), lst.getGroupId(), lst.getSpecDetail(), lst.getSpecValue());
                //Long specId = _spec.getSpecId(lst.getSpecName(), lst.getGroupId(), lst.getSpecDetail(), lst.getSpecValue());
                for(ModifyProductDetailDTO lstt : lst.getProductDtl()){
                _productDetail.modifyProductDetail(modProd.getProductId(), lst.getSpecId());}
                    }
                }
                else if(lst.isDeleted() == true){
                    _productDetail.setDeleteDetail(modProd.getProductId(), lst.getSpecId(), true);
                }
            }
        }
        catch(Exception e){
            System.out.println("Error: " + e);
        }
        return true;
    }
    /*public boolean modifyProduct(ModifyProductDTO modProd){
        try{
            _product.setModify(modProd.getProductId(),modProd.getProductName(),modProd.getProductVersion() ,modProd.getCompanyId() , modProd.getProductStock(),modProd.getProductPrice(), modProd.getProductRating(), modProd.getCategoryId());
            Long productId = _product.getProductId(modProd.getProductName(), modProd.getCategoryId(), modProd.getCompanyId(), modProd.getProductVersion());
            for(ModifyAssetDTO lst : modProd.getProductAsset()){
                if(lst.isDeleted() == false){
                Long checkAssetId = _asset.getAssetId(lst.getAssetName(), lst.getAssetPath(), lst.getAssetType());
                if (checkAssetId == null || ObjectUtils.isEmpty(checkAssetId)){
                    _asset.insertAsset(lst.getAssetName(), lst.getAssetPath(), lst.getAssetType());
                    Long assetId = _asset.getAssetId(lst.getAssetName(), lst.getAssetPath(), lst.getAssetType());
                    _productAsset.insertProductAsset(productId, assetId, lst.getAssetRole());
                }else{
                _asset.modifyAsset(lst.getAssetId(), lst.getAssetName(), lst.getAssetPath(), lst.getAssetType());
                Long assetId = _asset.getAssetId(lst.getAssetName(), lst.getAssetPath(), lst.getAssetType());
                _productAsset.modifyProductAsset(productId,assetId,lst.getAssetRole());}}
                else if(lst.isDeleted() == true){
                    _productAsset.setDeleteAsset(productId, lst.getAssetId(),lst.getAssetRole(), true);
                }
            }
            for(ModifySpecDTO lst : modProd.getProductDetail()){
                if(lst.isDeleted() == false){
                 Long checkSpecId = _spec.getSpecId(lst.getSpecName(), lst.getGroupId(), lst.getSpecDetail(), lst.getSpecValue());
                 if(checkSpecId == null){
                     _spec.insertSpec(lst.getSpecName(), lst.getGroupId(), lst.getSpecDetail(), lst.getSpecValue());
                     Long specId = _spec.getSpecId(lst.getSpecName(), lst.getGroupId(), lst.getSpecDetail(), lst.getSpecValue());
                     _productDetail.modifyProductDetail(productId, specId);
                 }else{
                _spec.modifySpec(lst.getSpecId(),lst.getSpecName(), lst.getGroupId(), lst.getSpecDetail(), lst.getSpecValue());
                Long specId = _spec.getSpecId(lst.getSpecName(), lst.getGroupId(), lst.getSpecDetail(), lst.getSpecValue());
                _productDetail.modifyProductDetail(productId, specId);}
                }
                else if(lst.isDeleted() == true){
                    _productDetail.setDeleteDetail(productId, lst.getSpecId(), true);
                }
            }
        }
        catch(Exception e){
            System.out.println("Error: " + e);
        }
        return true;
    }*/
}
