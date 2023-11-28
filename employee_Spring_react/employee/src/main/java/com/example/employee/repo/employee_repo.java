package com.example.employee.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.employee.model.employee;
@Repository
public interface employee_repo extends JpaRepository<employee,Integer> {
	@Query("select e from employee e where name = :name")
	public List<employee> view_by_name(String name);
}
