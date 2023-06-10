package backend.service;

import backend.dao.FavoriteDAO;
import backend.dao.ProductDAO;
import backend.dto.ProductListDTO;
import backend.models.Favorite;
import backend.models.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class FavoriteService {
    @Autowired
    private FavoriteDAO favoriteDAO;
    @Autowired
    private ProductDAO productDAO;
    public boolean addToFavorite(long userId,long productId){
        if(favoriteDAO.checkFavoriteExist(userId,productId)) return false;
        try{
            favoriteDAO.addToFavorite(productId,userId);
        }catch (Exception e){
            System.out.println("Error: "+e.getMessage());
            return false;
        }
        return true;
    }

    public List<Favorite> findFavoriteByUserId(long userId){
        return favoriteDAO.findFavoriteByUserId(userId);
    }

    public List<ProductListDTO>getFavoriteProductList(List<Favorite>favorites){
        List<ProductListDTO> productListDTOS = new ArrayList<>();
        for(Favorite favorite : favorites){
            Optional<Product> product = productDAO.findProductByProductId(favorite.getFavoriteId().getProductId());
            if(product.isPresent()){
                ProductListDTO productListDTO = productDAO.productToProductListDTO(product.orElseThrow());
                productListDTOS.add(productListDTO);
            }
        }
        return productListDTOS;
    }

    public boolean removeFromFavorite(long userId,long productId){
        return favoriteDAO.removeFromFavorite(userId,productId);
    }
}
