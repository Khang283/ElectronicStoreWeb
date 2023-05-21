package backend.controllers;

import backend.dto.ProductDetailDTO;
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
    @RequestMapping(value={ "/v1/product/{id}"}, method = RequestMethod.GET)
    public ResponseEntity<List<ProductDetailDTO>> getProductDetail(@PathVariable("productID")long productID,
                                                                @RequestParam(name = "page", required = false,defaultValue = "1")int page){
        List<ProductDetailDTO> DetailDTOs = new ArrayList<>();
        DetailDTOs = productService.getProductDetail(page, productID);
            return ResponseEntity.ok(DetailDTOs);
    }


}