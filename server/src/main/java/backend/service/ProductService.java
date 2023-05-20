package backend.service;

import backend.dao.*;
import backend.dto.ProductDetailDTO;
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
    public List<ProductDetailDTO> getProductDetail(int page,long type){
        if(page<1) return null;
        int limit = 10;
        int offset = page*limit - limit;
        List<ProductDetailDTO>detailDTOs = productDAO.getProductDetail(limit,offset,type);
        if(detailDTOs == null || detailDTOs.isEmpty()){
            return null;
        }
        return detailDTOs;
    }
}