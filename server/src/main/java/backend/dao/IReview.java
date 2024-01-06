package backend.dao;

import backend.models.Company;
import backend.models.Review;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface IReview extends JpaRepository<Review,Long> {
    @Query (value = "SELECT *\n" +
            "From reviews\n" +
            "WHERE product_id = :productId", nativeQuery = true)
    List<Review> getReviewByProductId(@Param("productId")int productId);

    @Modifying
    @Transactional
    @Query(value = "INSERT INTO reviews (review_content, review_rating, user_id, product_id)\n" +
                    "VALUES (:reviewContent, :reviewRating, :userId, :productId)", nativeQuery = true)
    void insertReview(@Param("reviewContent") String reviewContent, @Param("reviewRating") Long reviewRating,
                            @Param("userId") Long userId, @Param("productId") Long productId);

    @Modifying
    @Transactional
    @Query(value = "UPDATE reviews\n" +
            "SET review_content=:reviewContent, review_rating=:reviewRating\n" +
            "WHERE review_id=:reviewId", nativeQuery = true)
    void updateReview(@Param("reviewContent") String reviewContent, @Param("reviewRating") Long reviewRating,
                      @Param("reviewId") Long reviewId);

    @Modifying
    @Transactional
    @Query(value = "DELETE FROM reviews\n" +
            "WHERE review_id=:reviewId", nativeQuery = true)
    void deleteReview(@Param("reviewId") Long reviewId);
}
