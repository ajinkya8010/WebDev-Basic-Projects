package com.example.bookstore.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.bookstore.model.bookstore;
import com.example.bookstore.repo.bookstore_repo;
@Service
public class BookServiceImplementation implements BookService{
	@Autowired
	bookstore_repo repo;
	@Override
	public String addbook(bookstore book) {
		repo.save(book);
		return "book added";
	}
	public List<bookstore> catalogue()
	{
		return repo.findAll();
	}

}
