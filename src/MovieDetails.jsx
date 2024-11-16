import { useParams, useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import React from 'react';

export function MovieDetails({ movies, rating }){
    const{id} = useParams();
    const mv = movies[id];
    console.log(mv);
    const styles = {color: rating > 8.5 ? "green" : "crimson"}
    const navigate = useNavigate();
    return(
      <div>
      <iframe width="656" height="369" src={mv.trailer} title="VIKRAM - Official Trailer | Kamal Haasan | VijaySethupathi, FahadhFaasil | LokeshKanagaraj | Anirudh" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <div className="movie-detail-container">
      <div>
        <h2>{mv.name}</h2>
        <p style={styles}>⭐ {mv.rating}</p>
        </div>
        <p>{mv.summary}</p>
        <Button startIcon={<KeyboardBackspaceIcon/>} variant="contained" onClick={()=>navigate(-1)}>Back</Button>
        </div>
        </div>
    )
  }