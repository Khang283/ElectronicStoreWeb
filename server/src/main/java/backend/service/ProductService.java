package backend.service;

import backend.dao.*;
import backend.dto.ProductListDTO;
import backend.models.*;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.data.redis.cache.RedisCacheManager;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import backend.dto.*;
import backend.dto.InsertProductDTO;
import org.springframework.web.client.RestClientException;
import org.springframework.web.client.RestTemplate;

import java.util.*;

@Service
@EnableCaching
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
    @Autowired
    private RedisCacheManager cacheManager;
    @Value("${RECOMMENDATION_SERVICE_URL}")
    private String RECOMMENDATION_SERVICE_URL;
    
    @Cacheable(value = "products", sync = true)
    public List<ProductListDTO> getProductList(int page,String type,int limit){
        if(page<1) return null;
        int offset = page*limit - limit;
        List<ProductListDTO>productListDTOS = productDAO.getProductList(limit,offset,type);
        return productListDTOS;
    }

    @Cacheable(value = "product", key = "#productId", sync = true)
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
    @Cacheable(value = "searchList", key = "#name", sync = true)
    public List<ProductSearchDTO> getSearchList(String name){
        if(name.equals("")){
            return null;
        }
        List<Product> searchList = productDAO.searchProducts(name);
        List<ProductSearchDTO> searchDTOS = new ArrayList<>();
        for(Product product:searchList){
            searchDTOS.add(ProductSearchDTO.builder()
                            .name(product.getProductName())
                            .id(product.getProductId())
                    .build());
        }
        return searchDTOS;
    }
    public boolean modifyProductDetail(ProductDetailDTO productDetailDTO){
        if(productDAO.modifyProductDetail(productDetailDTO)) return true;
        return false;
    }
    public boolean deleteProductDetail(ProductDetailDTO productDetailDTO){
        if (productDAO.deleteProductDetail(productDetailDTO)) return true;
        return false;
    }

    public List<RecommendProductDTO> getRecommendation(Long productId) throws RestClientException {
        String url = RECOMMENDATION_SERVICE_URL+"search?q="+productId;
//        Map<String,Long>params = new HashMap<>();
//        params.put("q",productId);
        RestTemplate template = new RestTemplate();
        ResponseEntity<Object[]> response = template.getForEntity(url, Object[].class);
        ModelMapper mapper = new ModelMapper();
        List<RecommendProductDTO>list = Arrays.stream(response.getBody()).map(item->mapper.map(item,RecommendProductDTO.class)).toList();

        return list;
    }

}
