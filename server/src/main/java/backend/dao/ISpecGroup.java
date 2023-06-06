package backend.dao;

import backend.models.SpecGroup;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface ISpecGroup extends JpaRepository<SpecGroup, Long> {
    @Query(value = "SELECT group_name\n" +
            "FROM spec_group\n" +
            "WHERE group_id = :groupId", nativeQuery = true)
    String getGroupName(@Param("groupId") int groupId);
}
