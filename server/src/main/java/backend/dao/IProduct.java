package backend.dao;

import backend.models.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface IProduct extends JpaRepository<Product,Long> {
    @Query(value =  "SELECT *\n" +
                    "FROM product\n" +
                    "WHERE product.product_id = FALSE"
                    , nativeQuery = true)
    List<Product>findAllProduct();
    @Modifying
    @Transactional
   
    @Query(value = "SELECT product_id \n" +
            "FROM product\n" +
            "WHERE product_name= :productName\n" +
            "AND category_id= :categoryId\n" +
            "AND company_id= :companyId\n" +
            "AND product_version= :productVersion", nativeQuery = true)
    Integer findProductId(@Param("productName") String productName, @Param("categoryId") int categoryId,
                          @Param("companyId") int companyId, @Param("productVersion") String productVersion);
     @Modifying
     @Transactional

     @Query(value ="SELECT * \n" +
                "FROM product \n" + 
                "WHERE product_id = :productId", nativeQuery = true)
     List<Product> getProductByID(@Param("productid") String ProductID);
}