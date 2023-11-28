package com.example.bookstore.service;

import java.util.List;

import com.example.bookstore.model.bookstore;

public interface BookService {
	public String addbook(bookstore book);
	public List<bookstore> catalogue();
}
