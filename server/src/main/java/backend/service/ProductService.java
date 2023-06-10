package backend.service;

import backend.dao.*;
import backend.dto.ProductListDTO;
import backend.models.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import backend.dto.*;
import backend.dto.InsertProductDTO;
import backend.dto.ProductListDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import backend.dto.ModifyProductDTO;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class ProductService {
    @Autowired
    private IProduct _product;
    @Autowired
    private IAsset _asset;
    @Autowired
    private ICategory _category;
    @Autowired
    private ICompany _company;
    @Autowired
    private ProductDAO productDAO;
    @Autowired
    private ISpec _spec;
    public List<ProductListDTO> getProductList(int page,String type,int limit){
        if(page<1) return null;
        int offset = page*limit - limit;
        List<ProductListDTO>productListDTOS = productDAO.getProductList(limit,offset,type);
        return productListDTOS;
    }

    public GetProductByIdDTO getProductById(long productId) {
        GetProductByIdDTO product = new GetProductByIdDTO();
        product = productDAO.getProductById(productId);

        if (product == null) return null;
        return product;
    }

    public int countProduct(String type) {
        return productDAO.countProduct(type);
    }

    public boolean deleteProductById(long productId){
        return productDAO.deleteProductById(productId);
    }
    public boolean deleteSpecById(long specId) {return  productDAO.deleteSpecById(specId);}
    public boolean deleteAssetById(long assetId) {return  productDAO.deleteAssetById(assetId);}
    public boolean restoreProductById(long productId){
        return productDAO.restoreProductById(productId);
    }
    // public boolean modifyProductByID(ModifyProductDTO modProd){
    //     return productDAO.modifyProductById(modProd);
    // }
    public List<ProductDetail>getAllProductDetail(){
        return productDAO.getAllProductDetail();
    }

    public List<ProductListDTO>findProductByKeyWord(String keyword,int page,int limit){
        if(page<1) return null;
        int offset = page*limit - limit;
        return productDAO.findProductByKeyWord(keyword,limit,offset);
    }
    public boolean insertProduct(InsertProductDTO insertProductDTO) {
        return productDAO.insertProduct(insertProductDTO);
    }
    public boolean modifyProductByID(ModifyProductDTO modProd){
        return productDAO.modifyProductById(modProd);
    }

    public List<ProductListDTO>getAdminProduct(){
        return productDAO.getAdminProduct();
    }

    public List<Category> getListCategory() {
        return productDAO.getListCategory();
    }

    public List<Company> getListCompany() {
        return productDAO.getListCompany();
    }
    public List<SpecGroup> getListSpecGroup() {
        return productDAO.getListSpecGroup();
    }
    public boolean modifySpec(SpecModifyDTO spec) {return productDAO.modifySpecById(spec);}
    public boolean modifyAsset(AssetModifyDTO asset) {return  productDAO.modifyAssetById(asset);}
    public boolean modifyProduct(ProductModifyDTO prod) {return productDAO.modifyProduct(prod);};
    public Optional<Product>findProductByProductId(long productId){
        return productDAO.findProductByProductId(productId);
    }
}
