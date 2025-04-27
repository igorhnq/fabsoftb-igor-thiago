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

            for (int i = 0; i < 50; i++) {
                ProductModel product = new ProductModel();
                product.setName(faker.food().dish());
                product.setPrice(random.nextFloat(50));
                product.setCategory(categories[random.nextInt(categories.length)]);
                product.setDescription(faker.lorem().sentence(10));
                productRepository.save(product);
            }
        };
    }
}
