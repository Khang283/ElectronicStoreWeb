/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package backend.dao;
import backend.dto.ModifyProductDTO;
import backend.models.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;
import java.math.BigDecimal;
import java.lang.Long;
import java.util.List;
/**
 *
 * @author DELL
 */
public interface IProduct extends JpaRepository<Product,Long> {
    @Query(value =  "SELECT *\n" +
                    "FROM product\n" +
                    "WHERE product.product_id = FALSE"
                    , nativeQuery = true)
    List<Product>findAllProduct();
    @Modifying
    @Transactional
    @Query(value = "INSERT INTO product (product_name,product_price) VALUES (:productName,:productPrice)",nativeQuery = true)
    void insertProduct(@Param("productName") String productName, @Param("productPrice") double productPrice);
    
    @Modifying
    @Transactional
    @Query(value = "UPDATE product\n"+
                    "SET product_name = :productName, product_version = :productVersion, category_id = :categoryId, company_id = :companyId, product_stock = :productStock, product_price = :productPrice,product_rating = :productRating\n"+
            "WHERE product.product_id = :productId", nativeQuery = true)
    void setModify(@Param("productId") Long productId , @Param("productName") String productName, @Param("productVersion") String productVersion, @Param("companyId") Long companyId, @Param("productStock") Long productStock, @Param("productPrice") BigDecimal productPrice ,@Param("productRating") Long productRating, @Param("categoryId") Long categoryId);
    @Query(value = "SELECT product_id\n" +
            "FROM product\n" +
            "WHERE product_name = :productName \n" + "AND category_id = :categoryId\n" + "AND company_id = :companyId\n" + "AND product_version = :productVersion", nativeQuery = true)
    Long getProductId(@Param("productName") String productName, @Param("categoryId") Long categoryId, @Param("companyId") Long companyId, @Param("productVersion") String productVersion);
    @Modifying
    @Transactional
    @Query(value =  "UPDATE product_asset\n" +
                    "INNER JOIN product\n" +
                    "ON product_asset.product_id = product.product_id\n" +
                    "SET product_asset.deleted = :deleted , product.deleted=:deleted  \n" +
                    "WHERE product.product_id = :productId", nativeQuery = true)
    void setDelete(@Param("productId")long productId, @Param("deleted")boolean deleted);
    
}
