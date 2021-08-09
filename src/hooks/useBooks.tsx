import React,{  useState ,useEffect} from "react";
import {  useSelector } from "react-redux";

// import yelp from '../api/yelp'
export default () => {
  const [authors, setAuthors] = useState([]);
  const [filterAuthor, setFilterAuthor] = useState('All');

  const [results, setResults] = useState<any>([]);
  const [error, setError] = useState("");
  
  const books = useSelector((state: any) => state.books.books);
  // console.log(books);
  books.forEach((book: any) =>{
    if (!authors.includes(book.author)){
      setAuthors([...authors, book.author]);
    }
  })
  const searchAuthor =  (SearchTerm:string) => {
    try {
      if (SearchTerm === "All"||SearchTerm === "")  setResults(books);
      else{
        let arr: any[] =[];
        console.log(SearchTerm);
         books.forEach((book: any) =>SearchTerm===book.author?arr.push(book):null);
         setResults(arr);        
      }
      
    } catch (err) {
      setError("Something went wrong");
    }
  };
  useEffect(() => {
    
    searchAuthor(filterAuthor);
}, [results,authors])
 
  return [searchAuthor, results, authors,filterAuthor, setFilterAuthor];
};
