package backend.models;

import jakarta.persistence.Column;
import jakarta.persistence.EmbeddedId;
import jakarta.persistence.Entity;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity(name = "favorite")
public class Favorite {
    @EmbeddedId
    private FavoriteId favoriteId;
    @Column(name = "created_at")
    private Date createdAt;
    @Column(name = "modified_at")
    private Date modified_at;
    @Column(name = "deleted")
    private boolean deleted;
    public static class FavoriteId{
        @Column(name = "user_id")
        private Long userId;
        @Column(name = "product_id")
        private Long productId;
        public FavoriteId(){}
        public FavoriteId(Long userId,Long productId){
            this.userId = userId;
            this.productId = productId;
        }
        public Long getProductId(){
            return this.productId;
        }
        public void setProductId(Long productId){
            this.productId = productId;
        }
        public Long getUserId(){
            return this.userId;
        }
        public void setUserId(Long userId){
            this.userId = userId;
        }
    }
}
