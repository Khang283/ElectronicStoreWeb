package backend.dao;

import backend.models.Spec;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

public interface ISpec extends JpaRepository<Spec, Long> {
    @Modifying
    @Transactional
    @Query(value = "INSERT INTO spec (spec_name, group_id, spec_detail, spec_value)\n" +
            "VALUES (:specName, :groupId, :specDetail, :specValue)", nativeQuery = true)
    void insertSpec(@Param("specName") String specName, @Param("groupId") int groupId,
                       @Param("specDetail") String specDetail, @Param("specValue") String specValue);

    @Query(value = "SELECT spec_id\n" +
                "FROM spec\n" +
                "WHERE spec_name= :specName\n" +
                "AND group_id= :groupId\n" +
                "AND spec_detail= :specDetail\n" +
                "AND spec_value= :specValue", nativeQuery = true)
    int getIdSpec(@Param("specName") String specName, @Param("groupId") int groupId,
                  @Param("specDetail") String specDetail, @Param("specValue") String specValue);

}
