package backend.dao;

import backend.models.ProductAsset;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

public interface IProductAsset extends JpaRepository<ProductAsset, Long> {
    @Modifying
    @Transactional
    @Query(value = "INSERT INTO product_asset (product_id, asset_id, asset_role)\n" +
            "VALUES (:productId, :assetId, :assetRole)", nativeQuery = true)
    void insertProductAsset(@Param("productId") int productId, @Param("assetId") int assetId,
                    @Param("assetRole") String assetRole);
}
