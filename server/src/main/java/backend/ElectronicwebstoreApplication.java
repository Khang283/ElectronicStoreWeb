package backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cache.annotation.EnableCaching;

@SpringBootApplication
@EnableCaching
public class ElectronicwebstoreApplication {

	public static void main(String[] args) {
		SpringApplication.run(ElectronicwebstoreApplication.class, args);
	}

}
