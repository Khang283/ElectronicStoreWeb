/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package backend.dto;
import java.lang.Long;
/**
 *
 * @author DELL
 */
public class ModifyProductDetailDTO {
    private Long specId;
    private Long productId;
    private boolean insert;
    private boolean deleted;

    public ModifyProductDetailDTO(Long specId, Long productId, boolean insert, boolean deleted) {
        this.specId = specId;
        this.productId = productId;
        this.insert = insert;
        this.deleted = deleted;
    }

    public ModifyProductDetailDTO() {
    }

    public Long getSpecId() {
        return specId;
    }

    public void setSpecId(Long specId) {
        this.specId = specId;
    }

    public Long getProductId() {
        return productId;
    }

    public void setProductId(Long productId) {
        this.productId = productId;
    }

    public boolean isInsert() {
        return insert;
    }

    public void setInsert(boolean insert) {
        this.insert = insert;
    }

    public boolean isDeleted() {
        return deleted;
    }

    public void setDeleted(boolean deleted) {
        this.deleted = deleted;
    }
    
}
