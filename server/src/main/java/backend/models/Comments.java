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
    private Long comment_id;
    @Column(name="user_id")
    private Long user_id;
    @Column(name = "comment_description")
    private String comment_description;
    @Column(name="product_id")
    private Long product_id;
    @Column(name = "created_at")
    private Date created_at;
    @Column (name = "modified_at")
    private Date modified_at;
    @Column (name = "deleted")
    private boolean deleted;
    @Column(name = "likes")
    private Long likes;
    @Column(name = "reply_to")
    private String reply_to;

    public Comments(Long comment_id, Long user_id, String comment_description, Long product_id, Date created_at, Date modified_at, boolean deleted, Long likes, String reply_to) {
        this.comment_id = comment_id;
        this.user_id = user_id;
        this.comment_description = comment_description;
        this.product_id = product_id;
        this.created_at = created_at;
        this.modified_at = modified_at;
        this.deleted = deleted;
        this.likes = likes;
        this.reply_to = reply_to;
    }

    public Comments() {
    }

    public Long getComment_id() {
        return comment_id;
    }

    public Long getUser_id() {
        return user_id;
    }

    public String getComment_description() {
        return comment_description;
    }

    public Long getProduct_id() {
        return product_id;
    }

    public Date getCreated_at() {
        return created_at;
    }

    public Date getModified_at() {
        return modified_at;
    }

    public boolean isDeleted() {
        return deleted;
    }

    public Long getLikes() {
        return likes;
    }

    public String getReply_to() {
        return reply_to;
    }

    public void setComment_id(Long comment_id) {
        this.comment_id = comment_id;
    }

    public void setUser_id(Long user_id) {
        this.user_id = user_id;
    }

    public void setComment_description(String comment_description) {
        this.comment_description = comment_description;
    }

    public void setProduct_id(Long product_id) {
        this.product_id = product_id;
    }

    public void setCreated_at(Date created_at) {
        this.created_at = created_at;
    }

    public void setModified_at(Date modified_at) {
        this.modified_at = modified_at;
    }

    public void setDeleted(boolean deleted) {
        this.deleted = deleted;
    }

    public void setLikes(Long likes) {
        this.likes = likes;
    }

    public void setReply_to(String reply_to) {
        this.reply_to = reply_to;
    }
    
}
