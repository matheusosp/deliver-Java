package com.deliver.deliver.controller;

import com.deliver.deliver.dto.ProductDTO;
import com.deliver.deliver.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/products")
public class ProductController {

    @Autowired
    ProductService service;

    @GetMapping()
    public ResponseEntity<List<ProductDTO>> listAll(){
        List<ProductDTO> list = service.findAll();
        return ResponseEntity.ok().body(list);
    }

}
