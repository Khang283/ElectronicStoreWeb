package backend.dto;

public class SpecModifyDTO {
    private String specName;
    private String specDetail;
    private String specValue;
    private Long groupId;
    private Long specId;
    private boolean deleted;
    public SpecModifyDTO(String specName, String specDetail, String specValue, Long groupId, Long specId, boolean deleted, boolean insert) {
        this.specName = specName;
        this.specDetail = specDetail;
        this.specValue = specValue;
        this.groupId = groupId;
        this.specId = specId;
        this.deleted = deleted;
    }
    public SpecModifyDTO() {
    }

    public String getSpecName() {
        return specName;
    }

    public void setSpecName(String specName) {
        this.specName = specName;
    }

    public String getSpecDetail() {
        return specDetail;
    }

    public void setSpecDetail(String specDetail) {
        this.specDetail = specDetail;
    }

    public String getSpecValue() {
        return specValue;
    }

    public void setSpecValue(String specValue) {
        this.specValue = specValue;
    }

    public Long getGroupId() {
        return groupId;
    }

    public void setGroupId(Long groupId) {
        this.groupId = groupId;
    }



    public Long getSpecId() {
        return specId;
    }

    public void setSpecId(Long specId) {
        this.specId = specId;
    }

    public boolean isDeleted() {
        return deleted;
    }

    public void setDeleted(boolean deleted) {
        this.deleted = deleted;
    }


}
