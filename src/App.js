import "./App.css";
import Navbar from "./components/Navbar/navbar";

function App() {
  return (
    <div className="App" id="today">
      <Navbar />
      <div className="ok">
        <h1>litcoder</h1>
        <br />
     <a href="https://litcoder.in/login">
        <button
          className="loginbtn"
          style={{ padding: "1rem 2rem", borderRadius: "1rem" }}
        >
         Log in
        </button>
           </a>
      </div>
      <h1 className="mask">MASK MAN</h1>
    </div>
  );
}

export default App;
