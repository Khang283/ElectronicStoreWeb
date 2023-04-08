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
    private Long userId;
    @Column(name="loggin_name")
    private String logginName;
    @Column(name="pass_word")
    private String password;
    @Column(name="user_address")
    private String userAddress;
    @Column(name="user_email")
    private String userEmail;
    @Column(name="user_phone")
    private String userPhone;
    @Column(name = "created_at")
    private Date createdAt;
    @Column (name = "modified_at")
    private Date modifiedAt;
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

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public String getLogginName() {
        return logginName;
    }

    public void setLogginName(String logginName) {
        this.logginName = logginName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getUserAddress() {
        return userAddress;
    }

    public void setUserAddress(String userAddress) {
        this.userAddress = userAddress;
    }

    public String getUserEmail() {
        return userEmail;
    }

    public void setUserEmail(String userEmail) {
        this.userEmail = userEmail;
    }

    public String getUserPhone() {
        return userPhone;
    }

    public void setUserPhone(String userPhone) {
        this.userPhone = userPhone;
    }

    public Date getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
    }

    public Date getModifiedAt() {
        return modifiedAt;
    }

    public void setModifiedAt(Date modifiedAt) {
        this.modifiedAt = modifiedAt;
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

    public User() {
    }

    public User(Long userId, String logginName, String password, String userAddress, String userEmail, String userPhone, Date createdAt, Date modifiedAt, boolean deleted, String avatar, String gender, Date dob, String role) {
        this.userId = userId;
        this.logginName = logginName;
        this.password = password;
        this.userAddress = userAddress;
        this.userEmail = userEmail;
        this.userPhone = userPhone;
        this.createdAt = createdAt;
        this.modifiedAt = modifiedAt;
        this.deleted = deleted;
        this.avatar = avatar;
        this.gender = gender;
        this.dob = dob;
        this.role = role;
    }

    

    
    
}
