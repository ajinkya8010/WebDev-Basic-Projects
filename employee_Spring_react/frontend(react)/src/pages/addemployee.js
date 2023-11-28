import { useState } from "react"

export function Add()
{
    const [name,setName]=useState();
    const [position,setPosition] = useState();
    const  [salary,setSalary] = useState();
    
    function handleSubmit(e)
    {
        e.preventDefault();
        const employee = {name,position,salary};
        fetch("http://localhost:8080/employ/add",{
            method:"POST",
            headers:{"Content-Type":"application/JSON"},
            body:JSON.stringify(employee)
        }).then(console.log("employee added"));
    }
    return(
        <div>
            <h1>Add an employee here</h1>
            <label for="name">Name of Employee</label>
            <input type="text" id="name" name="name" onChange={(e)=>setName(e.target.value)}></input><br />
            <label for="position">Position of Hire</label>
            <input type="text" id="position" name="position" onChange={(e)=>setPosition(e.target.value)}/>
            <br />
            <label for="salary">Salary </label>
            <input type="number" id="salary" name="salary" onChange={(e)=>setSalary(e.target.value)}/>
            <br />
            <input type="submit" onClick={handleSubmit}></input>
        </div>
    )
}