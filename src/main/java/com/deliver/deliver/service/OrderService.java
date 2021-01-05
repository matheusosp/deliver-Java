package com.deliver.deliver.service;

import com.deliver.deliver.dto.OrderDTO;
import com.deliver.deliver.dto.ProductDTO;
import com.deliver.deliver.entities.Order;
import com.deliver.deliver.entities.OrderStatus;
import com.deliver.deliver.entities.Product;
import com.deliver.deliver.repository.OrderRepository;
import com.deliver.deliver.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.Instant;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class OrderService {

    @Autowired
    OrderRepository repository;

    @Autowired
    private ProductRepository productRepository;

    @Transactional(readOnly = true)
    public List<OrderDTO> findAll(){
        List<Order> list = repository.findOrdersWithProducts();
        return list.stream().map(OrderDTO::new).collect(Collectors.toList());
    }

    @Transactional
    public OrderDTO create(OrderDTO dto){
        Order order = new Order(null,dto.getAddress(),dto.getLatitude(),dto.getLongitude(),
                Instant.now(), OrderStatus.PENDING);
        for(ProductDTO p : dto.getProducts()){
            Product product = productRepository.getOne(p.getId());
            order.getProducts().add(product);
        }
        order = repository.save(order);
        return new OrderDTO(order);
    }
}
