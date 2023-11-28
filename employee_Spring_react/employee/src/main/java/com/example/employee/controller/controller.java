package com.example.employee.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.employee.model.employee;
import com.example.employee.service.EmployeeServiceImpl;

@RestController 
@RequestMapping("/employ")
@CrossOrigin
public class controller {
	@Autowired
	EmployeeServiceImpl service;
	@PostMapping("/add")
	public String add(@RequestBody employee e)
	{
		return service.add(e);
	}
	@GetMapping("/delete/{id}")
	public String delete(@PathVariable int id)
	{
		return service.delete(id);
	}
	@GetMapping("/view")
	public List<employee> view()
	{
		return service.view_list();
	}
	@GetMapping("/view_name")
	public List<employee> view_name(@RequestParam("name") String name)
	{
		return service.list_by_name(name);
	}
}
