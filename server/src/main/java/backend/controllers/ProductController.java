/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package backend.controllers;
import backend.dto.ProductListDTO;
import backend.dto.ModifyProductDTO;
import backend.dto.ModifyProductDetailDTO;
import backend.dto.ModifyProductAssetDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import backend.service.ProductService;
import java.lang.Long;
/**
 *
 * @author DELL
 */
@RestController
@RequestMapping("/api")
public class ProductController {
    @Autowired
    private ProductService productService;
    @GetMapping("/v1/product")
    public ResponseEntity<List<ProductListDTO>> getAllProduct(@RequestParam(name = "page", required = false,defaultValue = "1")int page){
        List<ProductListDTO> productListDTOS = productService.getProductList(page);
        if (productListDTOS == null){
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(productListDTOS);
    }
    @PostMapping("v1/product/modify")
    public ResponseEntity<String>modifyProduct(@RequestBody ModifyProductDTO modProdDTO){
        if(productService.modifyProductByID(modProdDTO)){
            return ResponseEntity.ok("Sửa sản phẩm thành công");
        }
        return ResponseEntity.badRequest().build();
    }
    
}
