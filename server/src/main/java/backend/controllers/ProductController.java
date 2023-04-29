package backend.controllers;

import backend.dto.DeleteProductDTO;
import backend.dto.InsertProductDTO;
import backend.dto.ProductListDTO;
import backend.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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

    @DeleteMapping("/v1/product")
    public ResponseEntity<String> deletedProductById(@RequestBody DeleteProductDTO deleteProductDTO){
        if(productService.deleteProductById(deleteProductDTO.getProductId())){
            return ResponseEntity.ok("Đã xóa sản phẩm");
        }
        return ResponseEntity.badRequest().build();
    }
    @PostMapping("/v1/product/restore")
    public ResponseEntity<String>restoreProductById(@RequestBody DeleteProductDTO deleteProductDTO){
        if(productService.restoreProductById(deleteProductDTO.getProductId())){
            return ResponseEntity.ok("Đã khôi phục sản phẩm");
        }
        return ResponseEntity.badRequest().build();
    }

    @PostMapping("/v1/product/insert")
    public ResponseEntity<String>insertProduct(@RequestBody InsertProductDTO insertProductDTO){
        if (productService.insertProduct(insertProductDTO)) {
            return ResponseEntity.ok("Đã thêm thành công");
        }
        return ResponseEntity.badRequest().build();
    }
}
