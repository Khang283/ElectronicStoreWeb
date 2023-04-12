package backend.dao;

import backend.models.Assets;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface IAsset extends JpaRepository<Assets,Long> {
    @Query(value="SELECT * FROM assets",nativeQuery = true)
    List<Assets>findAllAsset();
    @Query(value = "SELECT assets.asset_id,asset_name,asset_path,asset_type,assets.created_at,assets.modified_at,assets.deleted\n" +
                    "FROM assets,product,product_asset\n" +
                    "WHERE assets.asset_id=product_asset.asset_id AND product.product_id= product_asset.product_id AND product.product_id= :productId AND product_asset.asset_role='icon'"
            ,nativeQuery = true)
    Assets findAssetByProductId(@Param("productId")Long productId);
}
