package backend.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

import java.util.Date;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "favorite")
public class Favorite {
    @EmbeddedId
    private FavoriteId favoriteId;
    @Column(name = "created_at")
    private Date createdAt;
    @Column(name = "modified_at")
    private Date modified_at;
    @Column(name = "deleted")
    private boolean deleted;

    @Data
    @AllArgsConstructor
    @NoArgsConstructor
    @SuperBuilder(toBuilder = true)
    @Embeddable
    public static class FavoriteId{
        @Column(name = "user_id")
        private Long userId;
        @Column(name = "product_id")
        private Long productId;
    }
}
