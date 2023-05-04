package backend.dao;

import backend.models.Assets;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface IAsset extends JpaRepository<Assets,Long> {
    @Query(value="SELECT * FROM assets",nativeQuery = true)
    List<Assets>findAllAsset();
    @Query(value = "SELECT assets.asset_id,asset_name,asset_path,asset_type,assets.created_at,assets.modified_at,assets.deleted\n" +
                    "FROM assets,product,product_asset\n" +
                    "WHERE assets.asset_id=product_asset.asset_id AND product.product_id= product_asset.product_id AND product.product_id= :productId AND product_asset.asset_role='icon'"
            ,nativeQuery = true)
    Assets findAssetIconByProductId(@Param("productId")Long productId);
    @Modifying
    @Transactional
    @Query(value="UPDATE assets\n " +
            "SET asset_name = :assetName, asset_path = :assetPath, asset_type = :assetType\n" +
            "WHERE asset_id = :assetId\n", nativeQuery = true)
           void modifyAsset(@Param("assetId") Long assetId, @Param("assetName") String assetName, @Param ("assetPath") String assetPath, @Param("assetType") String assetType);
    @Query(value = "SELECT asset_id\n" +
            "FROM assets\n" +
            "WHERE asset_name = :assetName AND asset_path = :assetPath AND asset_type = :assetType", nativeQuery = true)
    Long getAssetId(@Param("assetName") String assetName, @Param("assetPath") String assetPath, @Param("assetType") String assetType);
    @Modifying
    @Transactional
    @Query(value = "INSERT INTO assets (asset_name, asset_path, asset_type)\n" +
            "VALUES (:assetName, :assetPath, :assetType)", nativeQuery = true)
    void insertAsset(@Param("assetName") String assetName, @Param("assetPath") String assetPath, @Param("assetType") String assetType);
}
