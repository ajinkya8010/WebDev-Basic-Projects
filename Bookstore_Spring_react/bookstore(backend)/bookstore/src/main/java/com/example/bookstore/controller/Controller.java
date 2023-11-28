package com.example.bookstore.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.bookstore.model.Users;
import com.example.bookstore.model.bookstore;
import com.example.bookstore.service.BookService;
import com.example.bookstore.service.UserServiceImpl;

@RestController 
@RequestMapping("/bookstore")
@CrossOrigin()
public class Controller {
	@Autowired
	UserServiceImpl user_service;
	@Autowired
	BookService service;
	@PostMapping("/add")
	public String add(@RequestBody bookstore book)
	{
		return service.addbook(book);
	}
	@GetMapping("/catalog")
	public List<bookstore> catalog()
	{
		return service.catalogue();
	}
	@PostMapping("/adduser")
	public String adduser(@RequestBody Users u)
	{
		return user_service.add(u);
	}
	@GetMapping("/find/{id}")
	public Optional<Users> find(@PathVariable int id)
	{
		return user_service.getuserbyID(id);
	}
}
