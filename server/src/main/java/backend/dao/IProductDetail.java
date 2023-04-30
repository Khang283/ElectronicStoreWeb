/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package backend.dao;

import backend.models.ProductDetail;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.transaction.annotation.Transactional;
import java.lang.Long;
import java.util.List;
public interface IProductDetail extends JpaRepository<ProductDetail,Long> {
    @Modifying
    @Transactional
    @Query(value = "UPDATE product_detail \n" + 
            "INNER JOIN product\n" +
            "WHERE product.product_id = product_detail.product_id" +
            "SET product_detail.product_id = :productId, product_detail.spec_id = :specId ", nativeQuery = true)
    void modifyProductDetail(@Param("productId") Long productId , @Param("specId") Long specId);
}
