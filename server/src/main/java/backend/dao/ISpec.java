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
    @Query(value = "UPDATE spec\n"
            + "SET spec_name = :specName, spec_detail = :specDetail , spec_value = :specValue\n" +
            "WHERE spec_id = :specId", nativeQuery = true)
    void modifySpec(@Param("specId") Long specId, @Param("specName") String specName,  @Param("specDetail") String specDetail, @Param("specValue") String specValue);
    @Query(value = "SELECT spec_id\n" +
                "FROM spec\n" +
                "WHERE spec_name= :specName\n" +
                "AND group_id= :groupId\n" +
                "AND spec_detail= :specDetail\n" +
                "AND spec_value= :specValue", nativeQuery = true)
    Long getSpecId(@Param("specName") String specName, @Param("groupId") Long groupId,
                  @Param("specDetail") String specDetail, @Param("specValue") String specValue);
    @Modifying
    @Transactional
    @Query(value = "INSERT INTO spec (spec_name, group_id, spec_detail, spec_value)\n" +
            "VALUES (:specName, :groupId, :specDetail, :specValue)", nativeQuery = true)
    void insertSpec(@Param("specName") String specName, @Param("groupId") Long groupId,
                       @Param("specDetail") String specDetail, @Param("specValue") String specValue);
    @Modifying
    @Transactional
    @Query(value = "INSERT INTO spec (spec_name, group_id, spec_detail, spec_value)\n" +
            "VALUES (:specName, :groupId, :specDetail, :specValue)", nativeQuery = true)
    void insertSpec(@Param("specName") String specName, @Param("groupId") int groupId,
                       @Param("specDetail") String specDetail, @Param("specValue") String specValue);
    @Modifying
    @Transactional
    @Query(value = "UPDATE spec\n" +
    "SET deleted = 1\n" +
    "WHERE spec_id= :specId", nativeQuery = true)
    void deleteSpec(@Param("specId") long specId);
    @Query(value = "SELECT spec_id\n" +
                "FROM spec\n" +
                "WHERE spec_name= :specName\n" +
                "AND group_id= :groupId\n" +
                "AND spec_detail= :specDetail\n" +
                "AND spec_value= :specValue", nativeQuery = true)
    int getIdSpec(@Param("specName") String specName, @Param("groupId") int groupId,
                  @Param("specDetail") String specDetail, @Param("specValue") String specValue);

    @Query(value = "SELECT spec.spec_id, spec_name, group_id, spec_detail, spec_value, spec.created_at, spec.modified_at, spec.deleted\n" +
            "FROM spec, product_detail\n" +
            "WHERE spec.spec_id = product_detail.spec_id\n" +
            "AND product_id = :productId\n" +
            "AND spec.deleted = 0", nativeQuery = true)
    List<Spec> getListSpec(@Param("productId") int productId);

}
