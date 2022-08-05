import { useState } from "react";
import logo from "../assets/main_logo.svg";
import logoTerra from "../assets/logo_terra.svg";
import "./App.css";
import "./index.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <h4 style={{ fontWeight: 700 }}>Página en construcción...</h4>
        <div style={{ display: 'flex'}}>

        <img src={logo} className="App-logo" alt="logo" />
        <div style={{borderLeft:'3px solid #454b4d', marginRight: '20px', marginLeft: '20px', backgroundColor: 'red'}}></div>
        <img src={logoTerra} className="App-logo" alt="logo" />
        </div>

        <div className="info__container">
          <div className="contact__item">
            <i style={{marginRight: '16px'}} className="uil uil-envelope"></i>
            <p className="text">contacto@javierniebles.com</p>
          </div>
          <div className="contact__item">
            <i style={{marginRight: '16px'}} className="uil uil-whatsapp"></i>
            <a
              className="text link"
              href="https://wa.link/ozr341"
              target="_blank"
            >
              (+57) 311 398 8081
            </a>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
