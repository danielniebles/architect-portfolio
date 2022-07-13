import { useState } from "react";
import logo from "../assets/main_logo.svg";
import "./App.css";
import "./index.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <h4 style={{ fontWeight: 700 }}>Página en construcción...</h4>
        <img src={logo} className="App-logo" alt="logo" />

        <div className="info__container">
          <div className="contact__item">
            <i style={{marginRight: '16px'}} className="uil uil-envelope"></i>
            <p className="text">javier.niebles@gmail.com</p>
          </div>
          <div className="contact__item">
            <i style={{marginRight: '16px'}} className="uil uil-whatsapp"></i>
            <a
              className="text link"
              href="https://wa.link/ozr341"
              target="_blank"
            >
              (+57) 300 373 4489
            </a>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
