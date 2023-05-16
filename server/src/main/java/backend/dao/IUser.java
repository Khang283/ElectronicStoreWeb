package backend.dao;

import backend.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;
@Repository
public interface IUser extends JpaRepository<User,Long> {
    @Query(value = "SELECT * FROM users WHERE username = :name",nativeQuery = true)
    Optional<User> findByUsername(@Param("name") String name);

    @Modifying
    @Transactional
    @Query(value = "INSERT INTO users (username,pass_word) VALUES (:username,:password)",nativeQuery = true)
    void createUser(@Param("username")String username,@Param("password")String password);
}
