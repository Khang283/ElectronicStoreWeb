package backend.dto;

public class GetSpecDTO {
    private Long specId;
    private String specName;
    private String groupName;
    private String specValue;
    private String specDetail;

    public GetSpecDTO() {
    }

    public GetSpecDTO(Long specId, String specName, String groupName, String specValue, String specDetail) {
        this.specId = specId;
        this.specName = specName;
        this.groupName = groupName;
        this.specValue = specValue;
        this.specDetail = specDetail;
    }

    public Long getSpecId() {
        return specId;
    }

    public void setSpecId(Long specId) {
        this.specId = specId;
    }

    public String getSpecName() {
        return specName;
    }

    public void setSpecName(String specName) {
        this.specName = specName;
    }

    public String getGroupName() {
        return groupName;
    }

    public void setGroupName(String groupName) {
        this.groupName = groupName;
    }

    public String getSpecValue() {
        return specValue;
    }

    public void setSpecValue(String specValue) {
        this.specValue = specValue;
    }

    public String getSpecDetail() {
        return specDetail;
    }

    public void setSpecDetail(String specDetail) {
        this.specDetail = specDetail;
    }
}
