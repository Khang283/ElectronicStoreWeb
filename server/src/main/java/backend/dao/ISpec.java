package backend.dao;
import backend.models.Spec;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;

public interface ISpec extends JpaRepository<Spec, Long> {
    @Modifying
    @Transactional
    @Query(value = "INSERT INTO spec (spec_name, group_id, spec_detail, spec_value)\n" +
            "VALUES (:specName, :groupId, :specDetail, :specValue)", nativeQuery = true)
    void insertSpec(@Param("specName") String specName, @Param("groupId") int groupId,
                       @Param("specDetail") String specDetail, @Param("specValue") String specValue);

    @Query(value = "SELECT spec.spec_name,spec.spec_value,spec.spec_detail,spec.created_at,spec.modified_at,assets.deleted\n" +
                    "FROM spec,product,product_detail\n" +
                    "WHERE spec.spec_id=product_detail.spec_id AND product.product_id= product_detail.product_id AND product.product_id= :productId"
            ,nativeQuery = true)
    List<String> findSpecInfoByProductID(@Param("productId")Long productId);
}