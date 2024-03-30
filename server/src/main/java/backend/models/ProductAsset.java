package backend.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

import java.awt.*;
import java.util.Date;

@Entity
@Table(name = "product_asset")
@Data
@NoArgsConstructor
@AllArgsConstructor
@SuperBuilder(toBuilder = true)
public class ProductAsset {
    @Id
    @Column(name = "product_asset_id")
    private Long productAssetId;
    @Column(name = "product_id")
    private Long productId;
    @Column(name = "asset_id")
    private Long assetId;
    @Column(name = "asset_role")
    private String assetRole;
    @Column(name = "created_at")
    private Date createdAt;
    @Column(name = "modified_at")
    private Date modifiedAt;
    @Column(name = "deleted")
    private boolean deleted;
}
