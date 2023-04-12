package backend.controllers;

import backend.dto.ProductListDTO;
import backend.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/product")
public class ProductController {
    @Autowired
    private ProductService productService;
    @GetMapping()
    public ResponseEntity<List<ProductListDTO>> getAllProduct(){
        List<ProductListDTO> productListDTOS = productService.getProductList();
        if (productListDTOS == null){
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(productListDTOS);
    }
}
