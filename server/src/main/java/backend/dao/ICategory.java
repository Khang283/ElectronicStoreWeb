package backend.dao;

import backend.models.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import java.lang.Long;
import java.util.List;

public interface ICategory extends JpaRepository<Category,Long> {
    @Query(value = "SELECT * FROM category",nativeQuery = true)
    List<Category>findAllCategory();
}
