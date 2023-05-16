package backend.dto;

public class InsertAssetDTO {
    private String assetName;
    private String assetPath;
    private String assetType;
    private String assetRole;

    public InsertAssetDTO() {
    }

    public InsertAssetDTO(String assetName, String assetPath, String assetType, String assetRole) {
        this.assetName = assetName;
        this.assetPath = assetPath;
        this.assetType = assetType;
        this.assetRole = assetRole;
    }

    public String getAssetName() {
        return assetName;
    }

    public void setAssetName(String assetName) {
        this.assetName = assetName;
    }

    public String getAssetPath() {
        return assetPath;
    }

    public void setAssetPath(String assetPath) {
        this.assetPath = assetPath;
    }

    public String getAssetType() {
        return assetType;
    }

    public void setAssetType(String assetType) {
        this.assetType = assetType;
    }

    public String getAssetRole() {
        return assetRole;
    }

    public void setAssetRole(String assetRole) {
        this.assetRole = assetRole;
    }
}
