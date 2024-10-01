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

export default App;
