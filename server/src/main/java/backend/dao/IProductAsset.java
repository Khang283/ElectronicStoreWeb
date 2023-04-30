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
            "INNER JOIN product\n" +
            "WHERE product.product_id = product_asset.product_id" +
            "SET product_asset.product_id = :productId, product_asset.asset_id = :assetId , product_asset.asset_role = :assetRole", nativeQuery = true)
    void modifyProductAsset(@Param("productId") Long productId , @Param("assetId") Long assetId, @Param("assetRole") String assetRole);
}
