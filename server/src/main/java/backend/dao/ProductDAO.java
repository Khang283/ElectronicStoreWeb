package backend.dao;

import backend.models.Company;
import backend.models.Product;
import backend.dto.ProductDetailDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

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
}
}