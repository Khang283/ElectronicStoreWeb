package backend.dao;

import backend.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;
import java.util.Optional;
@Repository
public interface IUser extends JpaRepository<User,Long> {
    @Query(value = "SELECT * FROM users WHERE username = :name",nativeQuery = true)
    Optional<User> findByUsername(@Param("name") String name);

    @Modifying
    @Transactional
    @Query(value = "INSERT INTO users (username,pass_word) VALUES (:username,:password)",nativeQuery = true)
    void createUser(@Param("username")String username,@Param("password")String password);

    @Query(value = "SELECT * FROM users WHERE user_email = :email",nativeQuery = true)
    Optional<User> findUserByEmail(@Param("email") String email);

    @Transactional
    @Modifying
    @Query(value =  "UPDATE users\n" +
                    "SET username = :username, user_address = :address, user_email = :email, user_phone = :phone, gender = :gender, dob = :dob\n" +
                    "WHERE user_id = :id",nativeQuery = true)
    void updateUserById(@Param("id")long id,
                        @Param("username")String username,
                        @Param("address")String address,
                        @Param("email")String email,
                        @Param("phone")String phone,
                        @Param("gender")String gender,
                        @Param("dob") Date dob);
    @Transactional
    @Modifying
    @Query(value =  "UPDATE users\n" +
                    "SET pass_word = :password\n" +
                    "WHERE user_id = :id",nativeQuery = true)
    void changePassword(@Param("id")long id,@Param("password")String password);
}
