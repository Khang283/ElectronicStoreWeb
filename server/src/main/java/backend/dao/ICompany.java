package backend.dao;

import backend.models.Company;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import java.lang.Long;
import java.util.List;

public interface ICompany extends JpaRepository<Company,Long> {
    @Query(value = "SELECT * FROM company",nativeQuery = true)
    List<Company> findAllCompany();
}
