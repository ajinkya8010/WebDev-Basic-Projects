package com.example.bookstore.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.bookstore.model.bookstore;
@Repository
public interface bookstore_repo extends JpaRepository<bookstore,Integer>
{

}
