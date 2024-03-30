package backend.controllers;

import backend.dto.*;
import backend.models.Category;
import backend.models.Company;
import backend.models.SpecGroup;
import backend.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.sound.sampled.Port;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/v1/product")
public class ProductController {
    @Autowired
    private ProductService productService;

    @GetMapping("/v1/test")
    public ResponseEntity<String>getDefault(){
        return ResponseEntity.status(200).body("Hello");
    }

    @GetMapping("/v1/product/{type}")
    public ResponseEntity<List<ProductListDTO>> getAllProduct(@PathVariable("type")String type,
                                                            @RequestParam(name = "page", required = false,defaultValue = "1")int page,
                                                            @RequestParam(value = "search",required = false)String search,
                                                            @RequestParam(value = "company",required = false)String company,
                                                              @RequestParam(value = "limit",required = false,defaultValue = "10")int limit){
        List<ProductListDTO> productListDTOS = new ArrayList<>();
        if(search==null){
            productListDTOS = productService.getProductList(page,type,limit);
        }
        else{
            productListDTOS = productService.findProductByKeyWord(search,page,limit);
        }
        if (productListDTOS == null){
            return ResponseEntity.notFound().build();
        }
        if(company == null || company.isEmpty() || company.isBlank()) return ResponseEntity.ok(productListDTOS);
        return ResponseEntity.ok(productListDTOS.stream().filter(productListDTO -> productListDTO.getCompany().toUpperCase().equals(company.toUpperCase())).collect(Collectors.toList()));
    }

    @GetMapping()
    public ResponseEntity<GetProductByIdDTO> getProductById(@RequestParam(name= "productId", required = false,defaultValue = "1" )int productId) {
        GetProductByIdDTO product = new GetProductByIdDTO();
        product = productService.getProductById(productId);

        if (product == null) {
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok(product);
    }

    @GetMapping("/v1/countproduct/{type}")
    public ResponseEntity<Integer> countProduct(@PathVariable("type")String type) {
        int count = productService.countProduct(type);
        return ResponseEntity.ok(count);
    }

    @GetMapping("/admin/product")
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<List<ProductListDTO>>getAdminProduct(){
        List<ProductListDTO>productListDTOS = productService.getAdminProduct();
        if(productListDTOS.isEmpty()) return ResponseEntity.notFound().build();
        return ResponseEntity.ok(productListDTOS);
    }

    @DeleteMapping("/admin/product/delete")
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<String> deletedProductById(@RequestBody DeleteProductDTO deleteProductDTO){
        if(productService.deleteProductById(deleteProductDTO.getProductId())){
            return ResponseEntity.ok("Đã xóa sản phẩm");
        }
        return ResponseEntity.badRequest().build();
    }
    @PostMapping("/admin/product/restore")
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<String>restoreProductById(@RequestBody DeleteProductDTO deleteProductDTO){
        if(productService.restoreProductById(deleteProductDTO.getProductId())){
            return ResponseEntity.ok("Đã khôi phục sản phẩm");
        }
        return ResponseEntity.badRequest().build();
    }

    @PostMapping("/admin/product/add")
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<String>insertProduct(@RequestBody InsertProductDTO insertProductDTO){
        if (productService.insertProduct(insertProductDTO)) {
            return ResponseEntity.ok("Đã thêm thành công");
        }
        return ResponseEntity.badRequest().build();
    }
    


    @GetMapping("/v1/getlistcompany")
    public ResponseEntity<List<Company>> getListCompany(){
        List<Company> listCompany = productService.getListCompany();
        if(listCompany.isEmpty()) return ResponseEntity.notFound().build();
        return ResponseEntity.ok(listCompany);
    }

    @GetMapping("/v1/getlistcategory")
    public ResponseEntity<List<Category>> getListCategory(){
        List<Category> listCategory = productService.getListCategory();
        if(listCategory.isEmpty()) return ResponseEntity.notFound().build();
        return ResponseEntity.ok(listCategory);
    }

    @GetMapping("/v1/getlistspecgroup")
    public ResponseEntity<List<SpecGroup>> getListSpecGroup(){
        List<SpecGroup> listSpecGroup = productService.getListSpecGroup();
        if(listSpecGroup.isEmpty()) return ResponseEntity.notFound().build();
        return ResponseEntity.ok(listSpecGroup);
    }

    @PostMapping("/v1/modify/spec")
    public ResponseEntity<String>modifySpec(@RequestBody SpecModifyDTO spec){
        if(productService.modifySpec(spec)){
            return ResponseEntity.ok("Sửa thuộc tính thành công");
        }
        return ResponseEntity.badRequest().build();
    }
    @PostMapping("/v1/delete/spec")
    public ResponseEntity<String>deleteSpec(@RequestBody DeleteSpecDTO spec){
        if(productService.deleteSpecById(spec.getSpecId())){
            return ResponseEntity.ok("Sửa thuộc tính thành công");
        }
        return ResponseEntity.badRequest().build();
    }
    @PostMapping("/v1/delete/asset")
    public ResponseEntity<String>deleteAsset(@RequestBody DeleteAssetDTO asset){
        if(productService.deleteAssetById(asset.getAssetId())){
            return ResponseEntity.ok("Sửa thuộc tính thành công");
        }
        return ResponseEntity.badRequest().build();
    }
    @PostMapping("/v1/modify/asset")
    public ResponseEntity<String>modifyAsset(@RequestBody AssetModifyDTO asset){
        if(productService.modifyAsset(asset)){
            return ResponseEntity.ok("Sửa thuộc tính thành công");
        }
        return ResponseEntity.badRequest().build();
    }
    @PostMapping("/v1/modify/product")
    public ResponseEntity<String>modifyProduct(@RequestBody ProductModifyDTO modProdDTO){
        if(productService.modifyProduct(modProdDTO)){
            return ResponseEntity.ok("Sửa sản phẩm thành công");
        }
        return ResponseEntity.badRequest().build();
    }
    @PutMapping("/admin/modify/detail")
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<String>modifyProductDetail(@RequestBody ProductDetailDTO productDetailDTO){
        if(productService.modifyProductDetail(productDetailDTO)){
            return ResponseEntity.ok("Sửa thông số sản phẩm thành công");
        }
        return ResponseEntity.badRequest().build();
    }

    @GetMapping("/v1/recommend/search")
    public ResponseEntity<List<RecommendProductDTO>>getRecommendation(@RequestParam Long productId){
        if(productId <= 0) return ResponseEntity.badRequest().build();
        return ResponseEntity.ok(productService.getRecommendation(productId));
    }
}
