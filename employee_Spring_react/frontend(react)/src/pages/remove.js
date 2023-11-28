import {useState} from 'react';

export function Remove()
{
    const [id,setid] = useState();
    function handleSubmit(e)
    {
        e.preventDefault();
        fetch(`http://localhost:8080/employ/delete/`+id).then(console.log("Employee deleted successfully"));
    }
    return(
        <div>
            <h1>Remove an employee here</h1>
            <label for="id">Enter id of employee to fire</label>
            <input type="number" name="id" id="id" onChange={(e)=>setid(e.target.value)}></input>
            <input type="submit" onClick={handleSubmit}></input>
            
            
        </div>
    )
}