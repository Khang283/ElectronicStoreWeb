package backend.dao;

import backend.models.ProductDetail;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;


public interface IProductDetail extends JpaRepository<ProductDetail, ProductDetail.ProductDetailId> {

    @Modifying
    @Transactional
    @Query(value = "INSERT INTO product_detail (product_id, spec_id)\n" +
            "VALUES (:productId, :specId)", nativeQuery = true)
    void insertProductDetail(@Param("productId") int productId, @Param("specId") int specId);
}
