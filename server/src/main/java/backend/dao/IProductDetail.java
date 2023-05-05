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
             "SET product_detail.spec_id = :specId \n" + "WHERE product_id = :productId" , nativeQuery = true)
    void modifyProductDetail(@Param("productId") Long productId , @Param("specId") Long specId);
    @Modifying
    @Transactional
    @Query(value =  "UPDATE product_detail\n" +
                    "SET deleted = :deleted \n" +
                    "WHERE product_id = :productId AND spec_id = :specId", nativeQuery = true)
    void setDeleteDetail(@Param("productId")long productId,@Param("specId") Long assetId, @Param("deleted")boolean deleted);
    @Modifying
    @Transactional
    @Query(value = "INSERT INTO product_detail (product_id, spec_id)\n" +
            "VALUES (:productId, :specId)", nativeQuery = true)
    void insertProductDetail(@Param("productId") Long productId, @Param("specId") Long specId);
}
