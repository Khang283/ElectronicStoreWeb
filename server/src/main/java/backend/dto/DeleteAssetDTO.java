package backend.dto;

public class DeleteAssetDTO {
    public long assetId;










    public long getAssetId() {
        return assetId;
    }

    public void setAssetId(long assetId) {
        this.assetId = assetId;

    }
    public DeleteAssetDTO(){

    }
    public DeleteAssetDTO(long assetId){
        this.assetId = assetId;

    }
}
