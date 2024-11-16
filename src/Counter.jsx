import { useEffect, useState } from "react";
import Button from '@mui/material/Button';

export function Counter() {
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);

//   useEffect(()=>{
//     console.log("Like value is updated: ", like);
//   }, [like, dislike]);

  return (
    <div>
      <Button onClick={() => setLike(like + 1)} variant="contained" color="success">
        👍 {like}
      </Button>
      {" "} 
      <Button onClick={() => setDislike(dislike + 1)} variant="contained" color="success">
        👎 {dislike}
      </Button>
    </div>
  );
}
