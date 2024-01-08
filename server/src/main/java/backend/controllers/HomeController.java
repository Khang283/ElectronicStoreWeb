package backend.controllers;

import backend.dto.ProductListDTO;
import backend.dto.ProductSearchDTO;
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
    public ResponseEntity<List<ProductListDTO>>searchByKeyword(@PathVariable("keyword")String keyword,
                                                               @RequestParam(value = "page",required = false,defaultValue = "1")int page,
                                                               @RequestParam(value = "limit",required = false,defaultValue = "10")int limit){
        List<ProductListDTO>productListDTOS = productService.findProductByKeyWord(keyword,page,limit);
        if(productListDTOS.isEmpty()) return ResponseEntity.notFound().build();
        return ResponseEntity.ok(productListDTOS);
    }
    @GetMapping("/")
    public ResponseEntity<String>getDefault(){
        return ResponseEntity.status(200).body("Hello");
    }

    @GetMapping("/v1/search")
    public ResponseEntity<List<ProductSearchDTO>> searchProduct(@RequestParam(value = "name", defaultValue = "",required = true)String name){
        List<ProductSearchDTO> searchList = productService.getSearchList(name);
        if(searchList.isEmpty()) return ResponseEntity.notFound().build();
        return ResponseEntity.ok(searchList);
    }

}
