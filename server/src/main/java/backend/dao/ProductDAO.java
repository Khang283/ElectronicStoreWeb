package backend.dao;
import org.apache.commons.lang3.ObjectUtils;
import backend.dto.InsertAssetDTO;
import backend.dto.InsertSpecDTO;
import backend.dto.ProductListDTO;

import backend.dto.*;
import backend.models.*;
import backend.models.Assets;
import backend.models.Category;
import backend.models.Company;
import backend.models.Product;
import org.hibernate.boot.model.source.spi.AssociationSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import backend.dto.ModifyProductDTO;
import backend.dto.ModifyAssetDTO;
import backend.dto.ModifySpecDTO;
import java.lang.Long;
import backend.dto.ModifyProductAssetDTO;
import backend.dto.ModifyProductDetailDTO;

import javax.swing.text.html.Option;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

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
    @Autowired IProductDetail _productDetail;
    @Autowired
    private IProductAsset _productAsset;
    @Autowired
    private ISpec _spec;
    @Autowired
    private ISpecGroup _specGroup;
    public List<ProductListDTO>getProductList(int limit, int offset,String type){
        List<Product> products=_product.findAll();
        List<ProductListDTO>productListDTOS = new ArrayList<>();
        for(Product product : products){
            ProductListDTO productDTO = productToProductListDTO(product);
            if(productDTO.getCategory().equals(type)){
                productListDTOS.add(productDTO);
            }
        }

        return productListDTOS.stream().skip(offset).limit(limit).collect(Collectors.toList());
    }

    public int countProduct(String type){
        List<Product> products=_product.findAll().stream().collect(Collectors.toList());
        int count = 0;

        for(Product product : products){
            if(findProductCategory(product).equals(type)){
                count++;
            }
        }

        return count;
    }

    public List<ProductListDTO>getAdminProduct(){
        List<Product> products = _product.findAll();
        List<ProductListDTO> productListDTOS = new ArrayList<>();
        for(Product product: products){
            ProductListDTO productListDTO = productToProductListDTO(product);
            productListDTOS.add(productListDTO);
        }
        return productListDTOS;
    }
    public ProductListDTO productToProductListDTO(Product product){

        ProductListDTO productDTo = new ProductListDTO();
        productDTo.setProductId(product.getProductId());
        productDTo.setProductName(product.getProductName());
        productDTo.setProductPrice(product.getProductPrice());
        productDTo.setProductRating(product.getProductRating());
        productDTo.setProductSold(product.getProductSold());
        productDTo.setProductStatus(product.getProductStatus());
        productDTo.setProductStock(product.getProductStock());
        productDTo.setProductVersion(product.getProductVersion());
        productDTo.setCategory(findProductCategory(product));
        productDTo.setCompany(findProductCompany(product));
        Assets asset = _asset.findAssetIconByProductId(product.getProductId());
        if(asset!=null){
            productDTo.setProductIcon(asset.getAssetPath());
        }
        return productDTo;
    }

    public GetProductByIdDTO getProductById(long productId) {
        List<Product> products=_product.findAll().stream().collect(Collectors.toList());
        GetProductByIdDTO productDTo = new GetProductByIdDTO();

        for(Product product : products){

            if(product.getProductId() == productId){
                productDTo.setProductStock(product.getProductStock());
                productDTo.setProductName(product.getProductName());
                productDTo.setProductPrice(product.getProductPrice());
                productDTo.setProductRating(product.getProductRating());
                productDTo.setProductSold(product.getProductSold());
                productDTo.setProductStatus(product.getProductStatus());
                productDTo.setCategoryId(product.getCategoryId());
                productDTo.setCompanyId(product.getCompanyId());
                productDTo.setProductVersion(product.getProductVersion());
                productDTo.setCategory(findProductCategory(product));
                productDTo.setCompany(findProductCompany(product));
                Assets assetIcon = _asset.findAssetIconByProductId(product.getProductId());
                if(assetIcon!=null){
                    productDTo.setProductIcon(assetIcon.getAssetPath());
                }

                productDTo.setAssets(getListAsset(Math.toIntExact(product.getProductId())));
                productDTo.setSpecs(getListSpec(Math.toIntExact(product.getProductId())));
            }
        }

        return productDTo;
    }

    public List<GetAssetDTO> getListAsset(int productId) {
        List<GetAssetDTO> listAsset = new ArrayList<>();
        List<ProductAsset> listProductAsset = _productAsset.getListAssetByProductId(productId);
        GetAssetDTO assetDTO;

        for (ProductAsset lst: listProductAsset) {
            assetDTO = new GetAssetDTO();
            assetDTO.setAssetId(lst.getAssetId());
            assetDTO.setAssetRole(lst.getAssetRole());

            Assets asset = _asset.getAssetByAssetId(Math.toIntExact(lst.getAssetId()));
            assetDTO.setAssetName(asset.getAssetName());
            assetDTO.setAssetPath(asset.getAssetPath());
            assetDTO.setAssetType(asset.getAssetType());

            listAsset.add(assetDTO);
        }
        return  listAsset;
    }

    public List<GetSpecDTO> getListSpec(int productId) {
        List<GetSpecDTO> listSpecDTO = new ArrayList<>();
        List<Spec> listSpec =_spec.getListSpec(productId);
        GetSpecDTO specDTO;

        for (Spec lst: listSpec) {
            specDTO= new GetSpecDTO();
            specDTO.setSpecId(lst.getSpecId());
            specDTO.setSpecName(lst.getSpecName());
            specDTO.setSpecDetail(lst.getSpecDetail());
            specDTO.setSpecValue(lst.getSpecValue());
            specDTO.setGroupName(_specGroup.getGroupName(Math.toIntExact(lst.getGroupId())));

            listSpecDTO.add(specDTO);
        }

        return listSpecDTO;
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
            if(product.getCategoryId() == category.getCategoryId()){
                return category.getCategoryName();
            }
        }
        return null;
    }
public boolean deleteSpecById(long specId){
        try{
            _spec.deleteSpec(specId);
        }catch(Exception e){
            System.out.println("Error: "+e);
        }
    return true;
}
    public boolean deleteAssetById(long assetId){
        try{
            _asset.deleteAsset(assetId);
        }catch(Exception e){
            System.out.println("Error: "+e);
        }
        return true;
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
    public List<ProductDetail> getAllProductDetail(){
        return _productDetail.findAll();
    }

    public List<ProductListDTO>findProductByKeyWord(String keyword,int limit, int offset){
        List<ProductListDTO> productListDTOS  = new ArrayList<>();
        if(keyword != null){
            keyword = "%"+keyword+"%" ;
            List<Product>products = _product.findProductByKeyWord(keyword).stream().limit(limit).skip(offset).toList();
            if(!products.isEmpty() && products != null){
                for(Product product : products){
                    ProductListDTO productDTo = productToProductListDTO(product);
                    productListDTOS.add(productDTo);
                }
            }
        }
        return productListDTOS;
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
    public boolean modifyAssetById(AssetModifyDTO asset){
        try{
            _asset.modifyAsset(asset.getAssetId(), asset.getAssetName(), asset.getAssetPath(),asset.getAssetType());
        }
        catch(Exception e){
            System.out.println("Error: " + e);
        }
        return true;
    }
    public boolean modifySpecById(SpecModifyDTO spec){
        try{
            _spec.modifySpec(spec.getSpecId(), spec.getSpecName(), spec.getSpecDetail(), spec.getSpecValue());
        }
        catch(Exception e){
            System.out.println("Error: " + e);
        }
        return true;
    }
    public boolean modifyProduct(ProductModifyDTO prod){
        try{
            _product.Modify(prod.getProductId(),prod.getProductStatus(),prod.getProductName(), prod.getProductVersion(),prod.getCompanyId(),prod.getProductStock(), prod.getProductPrice(),prod.getCategoryId());
        }
        catch(Exception e){
            System.out.println("Error: " + e);
        }
        return true;
    }
    public boolean modifyProduct(){
        return false;
    }

    public Optional<Product>findProductById(long productId){
        return _product.findById(productId);
    }


    public String findProductIcon(long productId){
        Assets assets = _asset.findAssetIconByProductId(productId);
        if(assets == null || assets.isDeleted()){
            return null;
        }
        return assets.getAssetPath();
    }


    public List<Category> getListCategory() {
        return _category.findAllCategory();
    }

    public List<Company> getListCompany() {
        return _company.findAllCompany();
    }
    public List<SpecGroup> getListSpecGroup() {
        return _specGroup.findAllSpecGroup();
    }

    public Optional<Product> findProductByProductId (long productId){
        return _product.findById(productId);
    }

}
