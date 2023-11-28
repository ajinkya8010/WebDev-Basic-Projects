package com.example.employee.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.employee.model.employee;
import com.example.employee.repo.employee_repo;

@Service
public class EmployeeServiceImpl {

	@Autowired
	employee_repo repo;
	
	public String add(employee e)
	{
		repo.save(e);
		return "employee added";
	}
	public String delete(int id)
	{
		repo.deleteById(id);
		return "deleted successfuly";
	}
	public List<employee> view_list()
	{
		return repo.findAll();
	}
	public List<employee> list_by_name(String name)
	{
		return repo.view_by_name(name);
	}
}
