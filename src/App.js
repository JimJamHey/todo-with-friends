import "./App.css";
import handImage from "./images/hand-image.png";

function App() {
  return (
    <div className="App-container">
      <img
        alt="a hand gripping a pencil"
        className="hand-image"
        src={handImage}
      />
      <header className="App-header">Today's Tasks</header>
    </div>
  );
}

export default App;
