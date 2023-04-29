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

@RestController
@RequestMapping("/api")
public class ProductController {
    @Autowired
    private ProductService productService;
    @GetMapping("/v1/product/{type}")
    public ResponseEntity<List<ProductListDTO>> getAllPhone(@PathVariable("type")String type,@RequestParam(name = "page", required = false,defaultValue = "1")int page,@RequestParam(value = "search",required = false)String search){
        List<ProductListDTO> productListDTOS = new ArrayList<>();
        if(search==null){
            productListDTOS = productService.getProductList(page,type);
        }
        else{
            productListDTOS = productService.findProductByKeyWord(search,page);
        }
        if (productListDTOS == null){
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(productListDTOS);
    }

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
}
