package backend.dao;

import backend.models.ProductDetail;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IProductDetail extends JpaRepository<ProductDetail, ProductDetail.ProductDetailId> {

}
