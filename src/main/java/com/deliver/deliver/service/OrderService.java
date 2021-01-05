package com.deliver.deliver.service;

import com.deliver.deliver.dto.OrderDTO;
import com.deliver.deliver.dto.ProductDTO;
import com.deliver.deliver.entities.Order;
import com.deliver.deliver.entities.Product;
import com.deliver.deliver.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class OrderService {

    @Autowired
    OrderRepository repository;

    @Transactional(readOnly = true)
    public List<OrderDTO> findAll(){
        List<Order> list = repository.findOrdersWithProducts();
        return list.stream().map(x -> new OrderDTO(x)).collect(Collectors.toList());
    }

}
