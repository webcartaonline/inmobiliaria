import { Link } from "react-router-dom";
import "./nav.css";

function Nav() {
  return (
    <nav className="nav">
      <a href="#" className="navLink">
        Inicio
      </a>
      <Link to="/pisos" className="navLink">
        Pisos
      </Link>
      <a href="#agentes" className="navLink">
        Agentes
      </a>
      <a href="#" className="navLink">
        Contacto
      </a>
      <button className="navCta">Reservar cita</button>
    </nav>
  );
}

export default Nav;