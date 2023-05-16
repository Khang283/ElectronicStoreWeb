<<<<<<< HEAD
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
=======
package backend.controllers;

import backend.dto.DeleteProductDTO;
import backend.dto.InsertProductDTO;
import backend.dto.ProductListDTO;
import backend.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

>>>>>>> 9ff0f161a96f30eff9c73eac7963078aafff149f
@RestController
@RequestMapping("/api")
public class ProductController {
    @Autowired
    private ProductService productService;
<<<<<<< HEAD
    @GetMapping("/v1/product")
    public ResponseEntity<List<ProductListDTO>> getAllProduct(@RequestParam(name = "page", required = false,defaultValue = "1")int page){
        List<ProductListDTO> productListDTOS = productService.getProductList(page);
=======
    @GetMapping("/v1/product/{type}")
    public ResponseEntity<List<ProductListDTO>> getAllPhone(@PathVariable("type")String type,@RequestParam(name = "page", required = false,defaultValue = "1")int page,@RequestParam(value = "search",required = false)String search){
        List<ProductListDTO> productListDTOS = new ArrayList<>();
        if(search==null){
            productListDTOS = productService.getProductList(page,type);
        }
        else{
            productListDTOS = productService.findProductByKeyWord(search,page);
        }
>>>>>>> 9ff0f161a96f30eff9c73eac7963078aafff149f
        if (productListDTOS == null){
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(productListDTOS);
    }
<<<<<<< HEAD
    @PostMapping("v1/product/modify")
    public ResponseEntity<String>modifyProduct(@RequestBody ModifyProductDTO modProdDTO){
        if(productService.modifyProductByID(modProdDTO)){
            return ResponseEntity.ok("Sửa sản phẩm thành công");
        }
        return ResponseEntity.badRequest().build();
    }
    
=======

    @DeleteMapping("/admin/product/delete")
    public ResponseEntity<String> deletedProductById(@RequestBody DeleteProductDTO deleteProductDTO){
        if(productService.deleteProductById(deleteProductDTO.getProductId())){
            return ResponseEntity.ok("Đã xóa sản phẩm");
        }
        return ResponseEntity.badRequest().build();
    }
    @PostMapping("/admin/product/restore")
    public ResponseEntity<String>restoreProductById(@RequestBody DeleteProductDTO deleteProductDTO){
        if(productService.restoreProductById(deleteProductDTO.getProductId())){
            return ResponseEntity.ok("Đã khôi phục sản phẩm");
        }
        return ResponseEntity.badRequest().build();
    }

    @PostMapping("/admin/product/add")
    public ResponseEntity<String>insertProduct(@RequestBody InsertProductDTO insertProductDTO){
        if (productService.insertProduct(insertProductDTO)) {
            return ResponseEntity.ok("Đã thêm thành công");
        }
        return ResponseEntity.badRequest().build();
    }
>>>>>>> 9ff0f161a96f30eff9c73eac7963078aafff149f
}
