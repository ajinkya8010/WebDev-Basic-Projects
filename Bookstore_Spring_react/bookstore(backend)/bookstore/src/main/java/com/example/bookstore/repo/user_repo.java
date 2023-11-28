package com.example.bookstore.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.bookstore.model.Users;

@Repository
public interface user_repo extends JpaRepository<Users,Integer>
{
	
}
