package backend.service;

import backend.dao.*;
import backend.dto.ProductListDTO;
import backend.models.ProductDetail;
import backend.models.Product;
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
    public String getSpecnameProductByID(Product product){
        return productDAO.getProductSpecName(product);
    }
    public String getSpecDetailProductByID(Product product){
        return productDAO.getProductSpecDetail(product);
    }
    public List<ProductListDTO> getProductByID(long productID){
        return productDAO.getProduct(productID);
    }
}