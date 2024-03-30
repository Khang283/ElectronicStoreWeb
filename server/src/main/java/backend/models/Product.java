package backend.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.util.Date;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "product")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="product_id")
    private Long productId;
    @Column(name="product_name")
    private String productName;
    @Column(name="category_id")
    private Long categoryId;
    @Column(name="company_id")
    private Long companyId;
    @Column(name="product_version")
    private String productVersion;
    @Column(name="product_stock")
    private Long productStock;
    @Column(name="product_rating")
    private Long productRating;
    @Column(name="product_price")
    private BigDecimal productPrice;
    @Column(name="product_sold")
    private Long productSold;
    @Column(name="product_status")
    private String productStatus;
    @Column(name="created_at")
    private Date createdAt;
    @Column(name="modified_at")
    private Date modifiedAt;
    @Column(name="deleted")
    private boolean deleted;
}
