package backend.dao;

import backend.models.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
<<<<<<< HEAD

=======
import java.lang.Long;
>>>>>>> 4a1f7dc8f36597c9808936e8c20069c06465542f
import java.util.List;

public interface ICategory extends JpaRepository<Category,Long> {
    @Query(value = "SELECT * FROM category",nativeQuery = true)
    List<Category>findAllCategory();
}