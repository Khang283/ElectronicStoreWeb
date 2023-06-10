package backend.dao;

import backend.models.Favorite;
import org.hibernate.tool.schema.spi.SqlScriptException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Repository
public class FavoriteDAO {
    @Autowired
    private IFavorite _favorite;

    public Favorite addToFavorite(long productId,long userId){
        Favorite favorite = Favorite.builder()
                .favoriteId(new Favorite.FavoriteId(userId,productId))
                .createdAt(new Date())
                .build();
        return _favorite.save(favorite);
    }

    public List<Favorite>findFavoriteByUserId(long userId){
        return _favorite.findFavoriteByUserId(userId);
    }

    public boolean checkFavoriteExist(long userId,long productId){
        Optional<Favorite> favorite = _favorite.findById(new Favorite.FavoriteId(userId,productId));
        if(favorite.isPresent()) return true;
        return false;
    }

    public boolean removeFromFavorite(long userId,long productId){
        try{
            _favorite.deleteFavorite(userId,productId);
        }catch (SqlScriptException e){
            System.out.println("Error: "+e.getMessage());
            return false;
        }
        return true;
    }
}
