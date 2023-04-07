package backend.models;

import jakarta.persistence.*;
import org.hibernate.annotations.Columns;

import java.util.Date;

@Entity
public class Category {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="category_id")
    private Long category_id;
    @Column(name="category_name")
    private String category_name;
    @Column(name="created_at")
    private Date created_at;
    @Column(name="modified_at")
    private Date modified_at;
    @Column(name="deleted")
    private boolean deleted;

    public Category(Long category_id, String category_name, Date created_at, Date modified_at, boolean deleted) {
        this.category_id = category_id;
        this.category_name = category_name;
        this.created_at = created_at;
        this.modified_at = modified_at;
        this.deleted = deleted;
    }

    public Category() {
    }

    public Long getCategory_id() {
        return category_id;
    }

    public void setCategory_id(Long category_id) {
        this.category_id = category_id;
    }

    public String getCategory_name() {
        return category_name;
    }

    public void setCategory_name(String category_name) {
        this.category_name = category_name;
    }

    public Date getCreated_at() {
        return created_at;
    }

    public void setCreated_at(Date created_at) {
        this.created_at = created_at;
    }

    public Date getModified_at() {
        return modified_at;
    }

    public void setModified_at(Date modified_at) {
        this.modified_at = modified_at;
    }

    public boolean isDeleted() {
        return deleted;
    }

    public void setDeleted(boolean deleted) {
        this.deleted = deleted;
    }
}
