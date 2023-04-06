/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package backend.models;
import jakarta.persistence.*;
import org.hibernate.annotations.Columns;

import java.util.Date;
/**
 *
 * @author DELL
 */
@Entity
public class Comments {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="comment_id")
    private Long commentId;
    @Column(name="user_id")
    private Long userId;
    @Column(name = "comment_description")
    private String commentDescription;
    @Column(name="product_id")
    private Long productId;
    @Column(name = "created_at")
    private Date createdAt;
    @Column (name = "modified_at")
    private Date modifiedAt;
    @Column (name = "deleted")
    private boolean deleted;
    @Column(name = "likes")
    private Long likes;
    @Column(name = "reply_to")
    private String replyYo;

    public Comments() {
    }

    public Comments(Long commentId, Long userId, String commentDescription, Long productId, Date createdAt, Date modifiedAt, boolean deleted, Long likes, String replyYo) {
        this.commentId = commentId;
        this.userId = userId;
        this.commentDescription = commentDescription;
        this.productId = productId;
        this.createdAt = createdAt;
        this.modifiedAt = modifiedAt;
        this.deleted = deleted;
        this.likes = likes;
        this.replyYo = replyYo;
    }

    public Long getCommentId() {
        return commentId;
    }

    public void setCommentId(Long commentId) {
        this.commentId = commentId;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public String getCommentDescription() {
        return commentDescription;
    }

    public void setCommentDescription(String commentDescription) {
        this.commentDescription = commentDescription;
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

    public Long getLikes() {
        return likes;
    }

    public void setLikes(Long likes) {
        this.likes = likes;
    }

    public String getReplyYo() {
        return replyYo;
    }

    public void setReplyYo(String replyYo) {
        this.replyYo = replyYo;
    }

   
    
}
