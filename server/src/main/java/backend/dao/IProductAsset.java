package backend.dao;

import backend.dto.GetAssetDTO;
import backend.models.ProductAsset;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.lang.Long;
public interface IProductAsset extends JpaRepository<ProductAsset, Long> {
    @Modifying
    @Transactional
    @Query(value =  "UPDATE product_asset\n" +
                    "SET product_asset.deleted = 1\n" +
                    "WHERE product_id = :productId AND asset_id = :assetId AND asset_role = :assetRole", nativeQuery = true)
    void setDeleteAsset(@Param("productId")long productId,@Param("assetId") Long assetId, @Param("assetRole") String assetRole);
    @Query(value = "SELECT product_asset_id\n" +
            "FROM product_asset\n" +
            "WHERE product_id = :productId\n" +
            "AND asset_role = :assetRole\n" +
            "AND asset_id = :assetId", nativeQuery = true)
    Long getProductAssetId(@Param("productId") Long productId, @Param("assetId") Long assetId, @Param("assetRole") String assetRole);
    @Modifying
    @Transactional
    @Query(value = "INSERT INTO product_asset (product_id, asset_id, asset_role)\n" +
            "VALUES (:productId, :assetId, :assetRole)", nativeQuery = true)
    void insertProductAsset(@Param("productId") Long productId, @Param("assetId") Long assetId,
                    @Param("assetRole") String assetRole);

    @Query(value = "SELECT product_asset_id, product.product_id, assets.asset_id, asset_role,product_asset.created_at,product_asset.modified_at,product_asset.deleted\n" +
            "FROM assets,product,product_asset\n" +
            "WHERE assets.asset_id=product_asset.asset_id\n" +
            "AND product.product_id= product_asset.product_id\n" +
            "AND product_asset.product_id = :productId\n",nativeQuery = true)
    List<ProductAsset> getListAssetByProductId(@Param("productId") int productId);

}
