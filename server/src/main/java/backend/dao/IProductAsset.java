/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package backend.dao;
import backend.models.ProductAsset;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;
import java.lang.Long;
/**
 *
 * @author DELL
 */
public interface IProductAsset extends JpaRepository<ProductAsset,Long> {
    @Modifying
    @Transactional
    @Query(value = "UPDATE product_asset \n" + 
            "SET asset_role = :assetRole\n" +
            "WHERE product_id = :productId AND asset_id = :assetId AND product_asset_id = :productAssetId", nativeQuery = true)
    void modifyProductAsset(@Param("productAssetId") Long productAssetId,@Param("productId") Long productId , @Param("assetId") Long assetId, @Param("assetRole") String assetRole);
    @Modifying
    @Transactional
    @Query(value =  "UPDATE product_asset\n" +
                    "SET product_asset.deleted = :deleted \n" +
                    "WHERE product_id = :productId AND asset_id = :assetId AND asset_role = :assetRole", nativeQuery = true)
    void setDeleteAsset(@Param("productId")long productId,@Param("assetId") Long assetId, @Param("assetRole") String assetRole, @Param("deleted")boolean deleted);
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
}
