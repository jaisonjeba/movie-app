import "./App.css";
import { Home } from "./Home";
import { NotFound } from "./NotFound";
import { TicTacToe } from "./TicTacToe";
import { Routes, Route, Link } from "react-router-dom";
import { MovieList } from "./movieApp";
import { AddColor } from "./AddColor";

export function App(){
  return(
    <div className="App">
      <nav>
        <ul>
          <li> <Link to="/">Home</Link> </li>
          <li> <Link to="/tic-tac-toe">Tic Tac Toe Game</Link> </li>
          <li> <Link to="/movies">Movies</Link> </li>
          <li> <Link to="/add-color">Color Game</Link> </li>
        </ul>
      </nav>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tic-tac-toe" element={<TicTacToe />} />
        <Route path="/movies" element={<MovieList />} />
        <Route path="/add-color" element={<AddColor />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

<<<<<<< HEAD
export default App;
=======
function Msg({name, poster, summary, rating}){

  const styles = {color: rating > 8.5 ? "green" : "crimson"}

  const[show, setShow] = useState(true);

  const styleSummary = {display: show ? "block" : "none"}

  return(
    <div>
      <img src={poster} alt={name} />
      <h2>{name}</h2>
      <p style={styles}>⭐ {rating}</p>
      <Button onClick={()=>setShow(!show)} variant="text">Toggle Summary</Button>
      <p style={styleSummary}>{summary}</p>
      <Counter />
    </div>
  )
}

function Counter(){
  const[like, setLike] = useState(0);
  const[dislike, setDislike] = useState(0);
  return(
    <div>
      <Button onClick={()=>setLike(like+1)} variant="contained" color="success">
      👍 {like}
      </Button>
      {" "} 
      <Button onClick={()=>setDislike(dislike+1)} variant="contained" color="success">
      👎 {dislike}
      </Button>
    </div>
  )
}
>>>>>>> 830cec6fe03f5bb6609d37f3bfc9055e39d78119
