import { useState } from "react";
import "./App.css";
import Button from '@mui/material/Button';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { IconButton } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import { useNavigate } from "react-router-dom";
import { Counter } from './Counter';

export function Msg({name, poster, summary, rating, id}){

  const styles = {color: rating > 8.5 ? "green" : "crimson"}

  const[show, setShow] = useState(true);

  const styleSummary = {display: show ? "block" : "none"}

  const navigate = useNavigate();

  return(
    <div>
      <img src={poster} alt={name} />
      <h2>{name}</h2>
      <p style={styles}>⭐ {rating}</p>
      <IconButton color="primary" onClick={()=>setShow(!show)} aria-label="Toggle Summary"> {show ? <ExpandLessIcon /> : <ExpandMoreIcon />} </IconButton>
      <IconButton color="primary" onClick={()=>navigate(`/movies/${id}`)} aria-label="Movie Details"> <InfoIcon /> </IconButton>
      <p style={styleSummary}>{summary}</p>
      <Counter />
    </div>
  )
}



