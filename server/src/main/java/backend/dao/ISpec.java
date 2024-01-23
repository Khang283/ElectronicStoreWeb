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
    @Query(value =   "UPDATE spec\n"+
                     "SET spec_name = :specName, spec_detail = :specDetail \n" +
                     "WHERE spec_id = :specId", nativeQuery = true)
    void modifySpec(@Param("specId") Long specId, @Param("specName") String specName,  @Param("specDetail") String specDetail);

    @Transactional
    @Query(value =  "UPDATE spec" +
                    "SET deleted = :deleted" +
                    "WHERE spec_id = :id", nativeQuery = true)
    void deleteSpec(@Param("id") Long specId, @Param("deleted") boolean deleted);

}
