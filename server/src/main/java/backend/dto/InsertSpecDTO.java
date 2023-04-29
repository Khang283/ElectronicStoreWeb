package backend.dto;

public class InsertSpecDTO {
    private String specName;
    private String specDetail;
    private String specValue;
    private int groupId;

    public InsertSpecDTO() {
    }

    public InsertSpecDTO(String specName, String specDetail, String specValue, int groupId) {
        this.specName = specName;
        this.specDetail = specDetail;
        this.specValue = specValue;
        this.groupId = groupId;
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

    public int getGroupId() {
        return groupId;
    }

    public void setGroupId(int groupId) {
        this.groupId = groupId;
    }
}
