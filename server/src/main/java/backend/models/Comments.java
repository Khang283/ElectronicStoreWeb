/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package backend.models;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

import java.util.Date;
/**
 *
 * @author DELL
 */
@Entity
@Table(name = "comments")
@Data
@AllArgsConstructor
@NoArgsConstructor
@SuperBuilder(toBuilder = true)
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
    private String replyTo;
    
}
