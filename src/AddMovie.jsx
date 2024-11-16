import { useState } from "react";
import Button from '@mui/material/Button';

export function AddMovie({ movies, setMovies }){
    const[name, setName] = useState("");
    const[poster, setPoster] = useState("");
    const[rating, setRating] = useState("");
    const[summary, setSummary] = useState("");
    const[trailer, setTrailer] = useState("");
    return(<div className="styles">
      <input onChange={(event)=>setName(event.target.value)} type="text" placeholder="Name" />
      <input onChange={(event)=>setPoster(event.target.value)} type="text" placeholder="Poster" />
      <input onChange={(event)=>setRating(event.target.value)} type="text" placeholder="Rating" />
      <input onChange={(event)=>setSummary(event.target.value)} type="text" placeholder="Summary" />
      <input onChange={(event)=>setTrailer(event.target.value)} type="text" placeholder="Trailer" />
      
      <Button onClick={()=>{
        const newMovie = {
          name: name,
          poster: poster,
          rating: rating,
          summary: summary,
          trailer: trailer
        };
        setMovies([...movies, newMovie]);
      }} variant="contained">Add Movie</Button>
    </div>)
  }