package backend.dao;

import backend.models.Favorite;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
public interface IFavorite extends JpaRepository<Favorite, Favorite.FavoriteId> {
    @Query(value =  "SELECT * \n" +
                    "FROM favorite\n" +
                    "WHERE user_id = :id",nativeQuery = true)
    List<Favorite>findFavoriteByUserId(@Param("id")long id);

    @Modifying
    @Transactional
    @Query(value =  "DELETE FROM favorite\n" +
                    "WHERE user_id = :userId AND product_id = :productId",nativeQuery = true)
    void deleteFavorite(@Param("userId")long userId,@Param("productId")long productId);
}
