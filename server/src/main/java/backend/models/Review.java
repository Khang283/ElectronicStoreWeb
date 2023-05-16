package backend.models;

import jakarta.persistence.*;

import java.util.Date;

@Entity(name = "reviews")
public class Review {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "review_id")
    private Long reviewId;
    @Column(name = "review_content")
    private String reviewContent;
    @Column(name = "review_rating")
    private Long reviewRating;
    @Column(name = "user_id")
    private Long userId;
    @Column(name = "product_id")
    private Long productId;
    @Column(name = "created_at")
    private Date createdAt;
    @Column(name = "modified_at")
    private Date modifiedAt;
    @Column(name = "deleted")
    private boolean deleted;

    public Review() {
    }

    public Review(Long reviewId, String reviewContent, Long reviewRating, Long userId, Long productId, Date createdAt, Date modifiedAt, boolean deleted) {
        this.reviewId = reviewId;
        this.reviewContent = reviewContent;
        this.reviewRating = reviewRating;
        this.userId = userId;
        this.productId = productId;
        this.createdAt = createdAt;
        this.modifiedAt = modifiedAt;
        this.deleted = deleted;
    }

    public Long getReviewId() {
        return reviewId;
    }

    public void setReviewId(Long reviewId) {
        this.reviewId = reviewId;
    }

    public String getReviewContent() {
        return reviewContent;
    }

    public void setReviewContent(String reviewContent) {
        this.reviewContent = reviewContent;
    }

    public Long getReviewRating() {
        return reviewRating;
    }

    public void setReviewRating(Long reviewRating) {
        this.reviewRating = reviewRating;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public Long getProductId() {
        return productId;
    }

    public void setProductId(Long productId) {
        this.productId = productId;
    }

    public Date getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
    }

    public Date getModifiedAt() {
        return modifiedAt;
    }

    public void setModifiedAt(Date modifiedAt) {
        this.modifiedAt = modifiedAt;
    }

    public boolean isDeleted() {
        return deleted;
    }

    public void setDeleted(boolean deleted) {
        this.deleted = deleted;
    }
}
