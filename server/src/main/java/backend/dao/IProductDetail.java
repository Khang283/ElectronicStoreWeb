package backend.dao;

import backend.dto.ProductDetailDTO;
import backend.models.Product;
import backend.models.ProductDetail;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.security.core.parameters.P;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;
import java.lang.Long;
import java.util.Objects;

public interface IProductDetail extends JpaRepository<ProductDetail, ProductDetail.ProductDetailId> {
    @Modifying
    @Transactional
    @Query(value =  "UPDATE product_detail \n" +
                    "SET product_detail.info = :info \n" +
                    "WHERE product_id = :productId AND spec_id = :specId" , nativeQuery = true)
    void modifyProductDetail(@Param("productId") Long productId , @Param("specId") Long specId, @Param("info") String info);
    @Modifying
    @Transactional
    @Query(value =  "UPDATE product_detail\n" +
                    "SET deleted = :deleted \n" +
                    "WHERE product_id = :productId AND spec_id = :specId", nativeQuery = true)
    void setDeleteDetail(@Param("productId")long productId,@Param("specId") Long assetId, @Param("deleted")boolean deleted);
    @Modifying
    @Transactional
    @Query(value = "INSERT INTO product_detail (product_id, spec_id, info)\n" +
            "VALUES (:productId, :specId, :info)", nativeQuery = true)
    void insertProductDetail(@Param("productId") Long productId, @Param("specId") Long specId, @Param("info") String info);

    @Query(value = "SELECT * FROM product_detail WHERE product_id = :id", nativeQuery = true)
    List<ProductDetail> findProductDetailByProductId(@Param("id")Long productId);
    @Query(value = """
            SELECT p.spec_id, s.spec_name,g.group_name, s.spec_detail, p.info
            FROM product_detail p, spec s, spec_group g
            WHERE p.spec_id = s.spec_id AND s.group_id = g.group_id AND p.product_id = :id
            """, nativeQuery = true)
    List<Object[]> findProductDetailDTO(@Param("id")Long id);
}
