package backend.dao;
<<<<<<< HEAD

=======
>>>>>>> 4a1f7dc8f36597c9808936e8c20069c06465542f
import backend.models.Spec;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;
<<<<<<< HEAD
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
=======
import java.lang.Long;
import java.util.List;
/**
 *
 * @author DELL
 */
public interface ISpec extends JpaRepository<Spec,Long> {
    @Modifying
    @Transactional
    @Query(value = "UPDATE spec\n"
            + "SET spec_name = :specName, spec_detail = :specDetail , spec_value = :specValue, group_id = :groupId\n" +
            "WHERE spec_id = :specId", nativeQuery = true)
    void modifySpec(@Param("specId") Long specId, @Param("specName") String specName, @Param("groupId") Long groupId, @Param("specDetail") String specDetail, @Param("specValue") String specValue);
    @Query(value = "SELECT spec_id\n" +
                "FROM spec\n" +
                "WHERE spec_name= :specName\n" +
                "AND group_id= :groupId\n" +
                "AND spec_detail= :specDetail\n" +
                "AND spec_value= :specValue", nativeQuery = true)
    Long getSpecId(@Param("specName") String specName, @Param("groupId") Long groupId,
                  @Param("specDetail") String specDetail, @Param("specValue") String specValue);4
    @Query(value = "SELECT * FROM Spec",nativeQuery = true)
    List<Spec>findAll();
>>>>>>> 4a1f7dc8f36597c9808936e8c20069c06465542f
}