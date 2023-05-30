package backend.service;

import backend.dao.*;
import backend.dto.ProductListDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import backend.dto.*;
import backend.dto.InsertProductDTO;
import backend.dto.ProductListDTO;
import backend.models.ProductDetail;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
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
    public List<ProductListDTO> getProductList(int page,String type){
        if(page<1) return null;
        int limit = 10;
        int offset = page*limit - limit;
        List<ProductListDTO>productListDTOS = productDAO.getProductList(limit,offset,type);
        if(productListDTOS == null || productListDTOS.isEmpty()){
            return null;
        }
        return productListDTOS;
    }

    public boolean deleteProductById(long productId){
        return productDAO.deleteProductById(productId);
    }

    public boolean restoreProductById(long productId){
        return productDAO.restoreProductById(productId);
    }
    // public boolean modifyProductByID(ModifyProductDTO modProd){
    //     return productDAO.modifyProductById(modProd);
    // }
    public List<ProductDetail>getAllProductDetail(){
        return productDAO.getAllProductDetail();
    }

    public List<ProductListDTO>findProductByKeyWord(String keyword,int page){
        if(page<1) return null;
        int limit = 10;
        int offset = page*limit - limit;
        return productDAO.findProductByKeyWord(keyword,limit,offset);
    }
    public boolean insertProduct(InsertProductDTO insertProductDTO) {
        return productDAO.insertProduct(insertProductDTO);
    }

}
