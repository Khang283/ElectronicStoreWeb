package backend.dao;

import backend.models.Company;
import backend.models.Product;
import backend.dto.ProductDetailDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public class ProductDAO {
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
    public String findProductCompany(Product product){
        List<Company>companies = _company.findAllCompany();
        for(Company company : companies){
            if(product.getCompanyId() == company.getCompanyId()){
                return company.getCompanyName();
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
   

}