import { useEffect, useState } from "react";
import { Msg } from "./movieApp";


export function MovieList() {

  const[movies, setMovies] = useState([]);

  useEffect(()=>{
    fetch("https://670562aa031fd46a830fc21d.mockapi.io/movies")
    .then((data)=>data.json())
    .then((mv)=>setMovies(mv));
  },[]);

  return (
    <div>
      <div className="App">
        {movies.map((mv, index) => (
          <Msg
            key={index}
            name={mv.name}
            poster={mv.poster}
            summary={mv.summary}
            rating={mv.rating}
            id={index} />
        ))}
      </div>
    </div>
  );
}
