package backend.config;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.redis.cache.RedisCacheConfiguration;
import org.springframework.data.redis.cache.RedisCacheManager;
import org.springframework.data.redis.connection.RedisConnectionFactory;
import org.springframework.data.redis.connection.RedisStandaloneConfiguration;
import org.springframework.data.redis.connection.lettuce.LettuceConnectionFactory;
import org.springframework.data.redis.serializer.GenericJackson2JsonRedisSerializer;
import org.springframework.data.redis.serializer.RedisSerializationContext;

import java.time.Duration;

@Configuration
@RequiredArgsConstructor
public class RedisConfig {
    @Value("${spring.cache.host}")
    private String host;
    @Value("${spring.cache.port}")
    private int port;

    @Bean
    public LettuceConnectionFactory lettuceConnectionFactory() { //Tạo connection cho redis
        //Config cho connection
        /*LettuceClientConfiguration clientConfig = LettuceClientConfiguration.builder()
                .useSsl().and()
                .commandTimeout(Duration.ofSeconds(10))
                .shutdownTimeout(Duration.ZERO)
                .build();*/

        return new LettuceConnectionFactory(new RedisStandaloneConfiguration(host, port)/*, clientConfig*/);
    }

    @Bean
    public RedisCacheManager cacheManager(RedisConnectionFactory connectionFactory) { // Config for cache managing
        //Default cache manager config
        RedisCacheConfiguration cacheConfig = myCacheConfiguration(Duration.ofMinutes(10)).disableCachingNullValues();

        return RedisCacheManager.builder(lettuceConnectionFactory())
                .cacheDefaults(cacheConfig)
                .withCacheConfiguration("product",myCacheConfiguration(Duration.ofMinutes(5))) //specific cache manager config for different table
                .withCacheConfiguration("products",myCacheConfiguration(Duration.ofMinutes(5)))
                .build();
    }

    private RedisCacheConfiguration myCacheConfiguration(Duration duration){
        return RedisCacheConfiguration
                .defaultCacheConfig()
                .entryTtl(duration) //expiration time of each document in redis
                .serializeValuesWith(RedisSerializationContext.SerializationPair.fromSerializer(new GenericJackson2JsonRedisSerializer())); //serialize the data
    }
}
