import logo from './logo.svg'; 
import './App.css'; 
import { useState,useEffect } from 'react';
import Movies from './Components/Movies';
function App() { 
  const [movieData,setmoviesData]=useState([]) 
 useEffect(()=>{ 
  fetch("/api/movies").then(response=>response.json()).then( 
    data =>{ 
      setmoviesData(data) 
   console.log(movieData) 
    } 
  ) 
 },[]) 

  return ( 
    <div className="App"> 
     { movieData && (movieData.map((movies,i)=><Movies data={movies}/>) 
   ) } 
    { movieData <= 0 && <h1> Loading </h1> } 
    </div> 
  ); 
} 
 
export default App;