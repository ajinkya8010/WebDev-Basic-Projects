import {useState} from 'react';
export function View()
{
    const [ans,setAns] = useState([]);
    function handleSubmit(e)
    {
        e.preventDefault();
        fetch("http://localhost:8080/employ/view").then((res)=>res.json()).then((result)=>setAns(result));
    }
    const list = ans.map((ans)=><li key="ans">{ans.name} {ans.position}</li>)
    return (
        <div>
            <h1>View all employees here !</h1>
            <input type="submit" onClick={handleSubmit}></input>
            <p>{list}</p>
        </div>
    )
}