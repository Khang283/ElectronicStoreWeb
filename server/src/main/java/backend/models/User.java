/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package backend.models;
import jakarta.persistence.*;
import org.hibernate.annotations.Columns;

import java.util.Date;
/**
 *
 * @author DELL
 */
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id")
    private Long user_id;
    @Column(name="loggin_name")
    private String loggin_name;
    @Column(name="pass_word")
    private String pass_word;
    @Column(name="user_address")
    private String user_address;
    @Column(name="user_email")
    private String user_email;
    @Column(name="user_phone")
    private String user_phone;
    @Column(name = "created_at")
    private Date created_at;
    @Column (name = "modified_at")
    private Date modified_at;
    @Column (name = "deleted")
    private boolean deleted;
    @Column (name = "avatar")
    private String avatar;
    @Column (name = "gender")
    private String gender;
    @Column (name = "dob")
    private Date dob;
    @Column (name = "role")
    private String role;

    public User(Long user_id, String loggin_name, String pass_word, String user_address, String user_email, String user_phone, Date created_at, Date modified_at, boolean deleted, String avatar, String gender, Date dob, String role) {
        this.user_id = user_id;
        this.loggin_name = loggin_name;
        this.pass_word = pass_word;
        this.user_address = user_address;
        this.user_email = user_email;
        this.user_phone = user_phone;
        this.created_at = created_at;
        this.modified_at = modified_at;
        this.deleted = deleted;
        this.avatar = avatar;
        this.gender = gender;
        this.dob = dob;
        this.role = role;
    }

    public User() {
    }

    public Long getUser_id() {
        return user_id;
    }

    public void setUser_id(Long user_id) {
        this.user_id = user_id;
    }

    public String getLoggin_name() {
        return loggin_name;
    }

    public void setLoggin_name(String loggin_name) {
        this.loggin_name = loggin_name;
    }

    public String getPass_word() {
        return pass_word;
    }

    public void setPass_word(String pass_word) {
        this.pass_word = pass_word;
    }

    public String getUser_address() {
        return user_address;
    }

    public void setUser_address(String user_address) {
        this.user_address = user_address;
    }

    public String getUser_email() {
        return user_email;
    }

    public void setUser_email(String user_email) {
        this.user_email = user_email;
    }

    public String getUser_phone() {
        return user_phone;
    }

    public void setUser_phone(String user_phone) {
        this.user_phone = user_phone;
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

    public String getAvatar() {
        return avatar;
    }

    public void setAvatar(String avatar) {
        this.avatar = avatar;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public Date getDob() {
        return dob;
    }

    public void setDob(Date dob) {
        this.dob = dob;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }
    
    
}
