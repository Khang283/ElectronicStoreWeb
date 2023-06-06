package backend.dao;

import backend.models.Comments;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface IComment extends JpaRepository<Comments, Long> {
    @Query (value = "SELECT comment_id, user_id, comment_description, product_id, created_at, modified_at, deleted, likes, reply_to\n" +
            "FROM comments\n" +
            "WHERE product_id= :productId",nativeQuery = true)
    List<Comments> getListCommentByProductId(int productId);
}
