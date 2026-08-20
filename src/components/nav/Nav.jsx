import { Link } from "react-router-dom";
import './Nav.css';

function Nav() {
  return (
    <nav className="nav">
      <Link to="/" className="navLink">Inicio</Link>
      <Link to="/agents" className="navLink">Agentes</Link>
      <Link to="/history" className="navLink">Nuestra Historia</Link>
      <Link to="/flats" className="navLink">Pisos</Link>
      <Link to="/restaurant" className="navLink">Restaurante</Link>
    </nav>
  );
}

export default Nav;