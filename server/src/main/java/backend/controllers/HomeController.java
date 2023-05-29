package backend.controllers;

import backend.dto.ProductListDTO;
import backend.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class HomeController {
    @GetMapping()
    public ResponseEntity<String>getDefault(){
        return ResponseEntity.status(200).body("Hello");
    }

}
