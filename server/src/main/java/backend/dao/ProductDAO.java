package backend.dao;

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
import java.util.ArrayList;
import java.util.List;

@Repository
public class ProductDAO extends JdbcDaoSupport{
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

}