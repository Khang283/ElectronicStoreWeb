package backend.service;

import backend.dao.*;
<<<<<<< HEAD
import backend.dto.ProductDetailDTO;
=======
import backend.dto.ProductListDTO;
import backend.models.ProductDetail;
import backend.models.Product;
>>>>>>> 4a1f7dc8f36597c9808936e8c20069c06465542f
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
<<<<<<< HEAD
    public List<ProductDetailDTO> getProductDetail(int page,long type){
        if(page<1) return null;
        int limit = 10;
        int offset = page*limit - limit;
        List<ProductDetailDTO>detailDTOs = productDAO.getProductDetail(limit,offset,type);
        if(detailDTOs == null || detailDTOs.isEmpty()){
            return null;
        }
        return detailDTOs;
=======
    public String getSpecnameProductByID(Product product){
        return productDAO.getProductSpecName(product);
    }
    public String getSpecDetailProductByID(Product product){
        return productDAO.getProductSpecDetail(product);
    }
    public List<ProductListDTO> getProductByID(long productID){
        return productDAO.getProduct(productID);
>>>>>>> 4a1f7dc8f36597c9808936e8c20069c06465542f
    }
}