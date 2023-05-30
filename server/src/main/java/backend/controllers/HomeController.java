package backend.controllers;

import backend.dto.ProductListDTO;
import backend.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api")
public class HomeController {
    @Autowired
    private ProductService productService;
    @GetMapping("/v1/search/{keyword}")
    public ResponseEntity<List<ProductListDTO>>searchByKeyword(@PathVariable("keyword")String keyword){
        List<ProductListDTO>productListDTOS = productService.findProductByKeyWord(keyword,1);
        if(productListDTOS.isEmpty()) return ResponseEntity.notFound().build();
        return ResponseEntity.ok(productListDTOS);
    }
    @GetMapping()
    public ResponseEntity<String>getDefault(){
        return ResponseEntity.status(200).body("Hello");
    }

}
