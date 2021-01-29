package com.deliver.deliver.repository;

import com.deliver.deliver.entities.Product;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProductRepository extends JpaRepository<Product,Long> {

    List<Product> findAllByOrderByNameAsc();

}
