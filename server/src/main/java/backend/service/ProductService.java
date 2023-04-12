package backend.service;

import backend.dao.*;
import backend.dto.ProductListDTO;
import backend.models.*;
import org.hibernate.annotations.NaturalId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Comparator;
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
    public List<ProductListDTO> getProductList(){
        List<ProductListDTO>productListDTOS = productDAO.getProductList();
        if(productListDTOS == null){
            return null;
        }
        return productListDTOS;
    }
    public List<Product>getAllProduct(){
        List<Product>products = _product.findAllProduct();
        return products;
    }
}
