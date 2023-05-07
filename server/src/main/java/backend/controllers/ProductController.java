package backend.controllers;
import backend.dto.ProductListDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import backend.service.ProductService;
import java.lang.Long;
import java.util.ArrayList;
@RestController
@RequestMapping("/api")
public class ProductController {
    @Autowired
    private ProductService productService;
    @RequestMapping(value={ "/v1/product/{id}"}, method = RequestMethod.GET)
    public ResponseEntity<List<ProductListDTO>> getProductDetail(@PathVariable("productID")long productID){
        List<ProductListDTO> productListDTOS = new ArrayList<>();
            productListDTOS = productService.getProductByID(productID);
            return ResponseEntity.ok(productListDTOS);
    }
}