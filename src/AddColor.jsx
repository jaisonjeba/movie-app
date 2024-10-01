import { useState } from "react";
import { App } from "./App";

export function AddColor() {
  const [color, setColor] = useState("");
  const styles = { background: color };
  const [colorList, setColorList] = useState(["crimson", "skyblue", "yellow"]);
  return (
    <div>
      <input style={styles} type="text" onChange={(event) => setColor(event.target.value)} value={color} />
      <button onClick={() => setColorList([...colorList, color])}>Add Color</button>
      {colorList.map((clr) => (
        <ColorBox color={clr} />
      ))}
    </div>
  );
}
function ColorBox({ color }) {
  const styles = {
    height: "25px",
    width: "250px",
    margin: "5px 0px",
    background: color
  };
  return (
    <div style={styles}></div>
  );
}
export default App;
