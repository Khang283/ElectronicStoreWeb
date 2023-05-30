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
public class ModifyProductAssetDTO {
    private Long productId;
    private Long assetId;
    private String role;
    private Long productAssetId;

    public ModifyProductAssetDTO(Long productId, Long assetId, String role, Long productAssetId) {
        this.productId = productId;
        this.assetId = assetId;
        this.role = role;
        this.productAssetId = productAssetId;
    }

   

    public ModifyProductAssetDTO() {
    }

    public Long getProductId() {
        return productId;
    }

    public void setProductId(Long productId) {
        this.productId = productId;
    }

    public Long getAssetId() {
        return assetId;
    }

    public void setAssetId(Long assetId) {
        this.assetId = assetId;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public Long getProductAssetId() {
        return productAssetId;
    }

    public void setProductAssetId(Long productAssetId) {
        this.productAssetId = productAssetId;
    }
    
    
}
