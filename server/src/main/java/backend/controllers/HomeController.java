package backend.controllers;

import backend.dto.ExchangeRateDTO;
import backend.dto.ProductListDTO;
import backend.dto.ProductSearchDTO;
import backend.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

import java.util.*;

@RestController
@RequestMapping("/api")
public class HomeController {
    @Autowired
    private ProductService productService;
//    @Autowired
//    private WebClient webClient;
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

    @GetMapping("/v1/testapi")
    public ResponseEntity<ExchangeRateDTO> getExchangeRate(){
        String ACCESS_API_KEY = "4328bde74e2e3ec5c9ecd8b4";
        String url = "https://v6.exchangerate-api.com/v6/"+ACCESS_API_KEY+"/latest/VND";
        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<ExchangeRateDTO> response = restTemplate.getForEntity(url, ExchangeRateDTO.class);
        return response;
    }

}
