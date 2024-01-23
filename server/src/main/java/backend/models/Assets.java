package backend.models;

import jakarta.annotation.Nullable;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity(name = "assets")
public class Assets {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "asset_id")
    private Long assetId;
    @Column(name = "asset_name")
    private String assetName;
    @Column(name = "asset_path")
    private String assetPath;
    @Column(name = "asset_type")
    private String assetType;
    @Nullable
    @Column(name = "created_at")
    private Date createdAt;
    @Nullable
    @Column(name = "modified_at")
    private Date modifiedAt;
    @Nullable
    @Column(name = "deleted")
    private boolean deleted;

}
