import { useState } from "react"

export function Register()
{
    const [name,setName]=useState();
    const [password,setPassword] = useState();
    function handleSubmit(e)
    {
        e.preventDefault();
        const User = {name,password};
        fetch("http://localhost:8080/bookstore/adduser",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(User)
        }).then(console.log("User added"));
    }
    return(
        <div>
            <h1>Register</h1>
            <br/>
            <label for="name">Name</label>
            <input type="text" name="name" id="name" onChange={(e)=>setName(e.target.value)}/><br/>
            <label for="password">Password</label>
            <input type="password" for="password" id="password" onChange={(e)=>setPassword(e.target.value)}/><br/>
            <input type="submit" onClick={handleSubmit}/> 
        </div>
    )
}