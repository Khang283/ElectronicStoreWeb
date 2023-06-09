package backend.dto;

public class DeleteSpecDTO {
    long specId;

    public long getSpecId() {
        return specId;
    }

    public void setSpecId(long specId) {
        this.specId = specId;
    }
    public DeleteSpecDTO(){};
    public DeleteSpecDTO(long specId){
        this.specId = specId;
    }
}
