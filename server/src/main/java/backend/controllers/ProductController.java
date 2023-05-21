package backend.controllers;
<<<<<<< HEAD

import backend.dto.ProductDetailDTO;
import backend.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

=======
import backend.dto.ProductListDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import backend.service.ProductService;
import java.lang.Long;
import java.util.ArrayList;
>>>>>>> 4a1f7dc8f36597c9808936e8c20069c06465542f
@RestController
@RequestMapping("/api")
public class ProductController {
    @Autowired
    private ProductService productService;
    @RequestMapping(value={ "/v1/product/{id}"}, method = RequestMethod.GET)
<<<<<<< HEAD
    public ResponseEntity<List<ProductDetailDTO>> getProductDetail(@PathVariable("productID")long productID,
                                                                   @RequestParam(name = "page", required = false,defaultValue = "1")int page){
        List<ProductDetailDTO> DetailDTOs = new ArrayList<>();
        DetailDTOs = productService.getProductDetail(page, productID);
            return ResponseEntity.ok(DetailDTOs);
    }


=======
    public ResponseEntity<List<ProductListDTO>> getProductDetail(@PathVariable("productID")long productID){
        List<ProductListDTO> productListDTOS = new ArrayList<>();
            productListDTOS = productService.getProductByID(productID);
            return ResponseEntity.ok(productListDTOS);
    }
>>>>>>> 4a1f7dc8f36597c9808936e8c20069c06465542f
}