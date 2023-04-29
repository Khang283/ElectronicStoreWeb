package backend.dao;

import backend.dto.ProductListDTO;
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
    @Query(value = "INSERT INTO product (product_name,product_price) VALUES (:productName,:productPrice)",nativeQuery = true)
    void insertProduct(@Param("productName") String productName, @Param("productPrice") double productPrice);

    @Modifying
    @Transactional
    @Query(value =  "UPDATE product_asset\n" +
                    "INNER JOIN product\n" +
                    "ON product_asset.product_id = product.product_id\n" +
                    "SET product_asset.deleted = :deleted , product.deleted=:deleted  \n" +
                    "WHERE product.product_id = :productId", nativeQuery = true)
    void setDelete(@Param("productId")long productId, @Param("deleted")boolean deleted);

    @Query(value =  "SELECT DISTINCT product.*\n" +
                    "FROM product\n" +
                    "WHERE product_name LIKE :keyword \n" +
                    "UNION \n" +
                    "SELECT DISTINCT product.*\n" +
                    "FROM product\n" +
                    "INNER JOIN company\n" +
                    "ON company.company_id = product.company_id \n" +
                    "WHERE company_name LIKE :keyword \n" +
                    "UNION \n" +
                    "SELECT DISTINCT product.*\n" +
                    "FROM product\n" +
                    "INNER JOIN category\n" +
                    "ON category.category_id = product.category_id \n" +
                    "WHERE category_name LIKE :keyword \n" +
                    "UNION\n" +
                    "SELECT DISTINCT product.*\n" +
                    "FROM product\n" +
                    "INNER JOIN product_detail\n" +
                    "ON product_detail.product_id = product.product_id \n" +
                    "INNER JOIN spec \n" +
                    "ON spec.spec_id = product_detail.spec_id \n" +
                    "INNER JOIN spec_group\n" +
                    "ON spec.group_id = spec_group.group_id\n" +
                    "WHERE (spec_value LIKE :keyword OR spec_detail LIKE :keyword OR spec_name LIKE :keyword )",nativeQuery = true)
    List<Product>findProductByKeyWord(@Param("keyword") String keyword);
}
