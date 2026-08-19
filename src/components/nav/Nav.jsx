import "./nav.css";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav className="nav">
      <NavLink to="/" className="navLink">
        Inicio
      </NavLink>
      <NavLink to="/flats" className="navLink">
        Pisos
      </NavLink>
      <NavLink to="/agents" className="navLink">
        Agentes
      </NavLink>
      <a href="#contacto" className="navLink">
        Contacto
      </a>
      <a className="navCta" href="mailto:info@nidoestudiantil.com">
        Reservar cita
      </a>
    </nav>
  );
}

export default Nav;
