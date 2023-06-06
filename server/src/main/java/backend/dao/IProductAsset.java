package backend.dao;

import backend.dto.GetAssetDTO;
import backend.models.ProductAsset;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface IProductAsset extends JpaRepository<ProductAsset, Long> {
    @Modifying
    @Transactional
    @Query(value = "INSERT INTO product_asset (product_id, asset_id, asset_role)\n" +
            "VALUES (:productId, :assetId, :assetRole)", nativeQuery = true)
    void insertProductAsset(@Param("productId") int productId, @Param("assetId") int assetId,
                    @Param("assetRole") String assetRole);

    @Query(value = "SELECT product_asset_id, product.product_id, assets.asset_id, asset_role,product_asset.created_at,product_asset.modified_at,product_asset.deleted\n" +
            "FROM assets,product,product_asset\n" +
            "WHERE assets.asset_id=product_asset.asset_id\n" +
            "AND product.product_id= product_asset.product_id\n" +
            "AND product_asset.product_id =:productId",nativeQuery = true)
    List<ProductAsset> getListAssetByProductId(@Param("productId") int productId);
}
