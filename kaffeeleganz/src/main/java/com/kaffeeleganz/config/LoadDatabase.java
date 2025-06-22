package com.kaffeeleganz.config;

import com.github.javafaker.Faker;
import com.kaffeeleganz.models.ProductModel;
import com.kaffeeleganz.repositories.ProductRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.Locale;
import java.util.Random;

@Configuration
public class LoadDatabase {

    @Bean
    CommandLineRunner initDatabase(ProductRepository productRepository) {
        return args -> {
            Faker faker = new Faker(Locale.forLanguageTag("pt-BR"));
            Random random = new Random();

            String[] categories = {"Bebidas", "Salgados", "Doces", "Promoções", "Pratos de balcão"};
            
            String[] imageUrls = {
                "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=300&fit=crop", 
                "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=300&fit=crop", 
                "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&h=300&fit=crop", 
                "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop", 
                "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&h=300&fit=crop", 
                "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=300&fit=crop", 
                "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=400&h=300&fit=crop", 
                "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=400&h=300&fit=crop",
                "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=300&fit=crop", 
                "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop"  
            };

            for (int i = 0; i < 50; i++) {
                ProductModel product = new ProductModel();
                product.setName(faker.food().dish());
                product.setPrice(random.nextFloat(50));
                product.setCategory(categories[random.nextInt(categories.length)]);
                product.setDescription(faker.lorem().sentence(10));
                product.setImageUrl(imageUrls[random.nextInt(imageUrls.length)]);
                productRepository.save(product);
            }
        };
    }
}