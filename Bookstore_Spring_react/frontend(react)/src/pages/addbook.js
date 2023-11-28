import { useState } from "react"

export function Add()
{
    const [bookname,Setbookname] = useState();
    const [author,setAuthor] = useState();
    const [genre,setGenre] = useState();
    const [price,setPrice] = useState();
    
    function handleSubmit(e)
    {
        e.preventDefault();
        const Book = {bookname,author,genre,price};
        fetch("http://localhost:8080/bookstore/add",
        {
            method:"POST",
            headers:{"Content-Type":"application/JSON"},
            body:JSON.stringify(Book)
        }).then(console.log("Book addded"));
    }
    return(
        <div>
            <div>
            <label for="bookname">Enter Book Name</label>
            <input type="text" id="bookname" name="bookname" onChange={(e)=>Setbookname(e.target.value)}/><br/>
            <label for="author">Enter Author Name</label>
            <input type="text" id="author" name="author"onChange={(e)=>setAuthor(e.target.value)}/><br/>
            <label for="genre">Enter Genre Type</label>
            <input type="text" id="genre" name="genre"onChange={(e)=>setGenre(e.target.value)}/><br/>
            <label for="price">Enter Price</label>
            <input type="number" id="price" name="price" onChange={(e)=>setPrice(e.target.value)}/><br/>
            <input type="submit" onClick={handleSubmit}/>
            </div>
        </div>
    )
}