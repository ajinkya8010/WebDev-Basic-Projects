import { useEffect, useState } from "react"

export function Catalog()
{
    const [Books,setBooks] = useState([]);
    function handleSubmit(e)
    {
        e.preventDefault();
        fetch(`http://localhost:8080/bookstore/catalog`).then(res=>res.json()).then(result=>{setBooks(result);console.log(Books);});
    }
    //const list = Books.map((Books)=><p>{Books.bookname} by {Books.author}, price : {Books.price}</p>)
    const list = Books.map((Books)=><li key="student">{Books.bookname} by {Books.author} for Rs.{Books.price}</li>)
    return(
        <div>
            <h1>Here's our collection of books</h1>
            <button onClick={handleSubmit}>View</button>
            {
                Books &&
                (<div>
                <ul>
                    <li>
                    {list}
                    </li>
                </ul>
                </div>)
            }

        </div>
    )
}