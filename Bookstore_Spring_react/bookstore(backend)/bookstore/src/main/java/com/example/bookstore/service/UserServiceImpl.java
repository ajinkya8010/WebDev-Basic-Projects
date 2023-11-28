package com.example.bookstore.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.bookstore.model.Users;
import com.example.bookstore.repo.user_repo;

@Service
public class UserServiceImpl {
	@Autowired
	user_repo repo;
	public String add(Users u)
	{
		repo.save(u);
		return "user added";
	}
	public Optional<Users> getuserbyID(int id)
	{
		return repo.findById(id);
		
	}
}
