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
    @Query(value="SELECT * FROM product", nativeQuery = true)
    List<Product>findAllProduct();
    @Query(value = "SELECT product_name, product_price, asset_path AS icon \n" +
                    "FROM product, assets, product_asset\n" +
                    "WHERE product.product_id=product_asset.product_id AND assets.asset_id = product_asset.asset_id AND asset_role = 'icon'",
                    nativeQuery = true)
    List<ProductListDTO>getProductList();

    @Modifying
    @Transactional
    @Query(value = "INSERT INTO product (product_name,product_price) VALUES (:productName,:productPrice)",nativeQuery = true)
    void insertProduct(@Param("productName") String productName, @Param("productPrice") double productPrice);
}
