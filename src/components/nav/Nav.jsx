import "./nav.css";

function Nav() {
  return (
    <nav className="nav">
      <a href="#" className="navLink">
        Inicio
      </a>
      <a href="#" className="navLink">
        Pisos
      </a>
      <a href="#" className="navLink">
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
