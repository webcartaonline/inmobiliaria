import "./nav.css";

function Nav() {
  return (
    <nav className="nav">
      <a href="#inicio" className="navLink">
        Inicio
      </a>
      <a href="#pisos" className="navLink">
        Pisos
      </a>
      <a href="#agentes" className="navLink">
        Agentes
      </a>
      <a href="#contacto" className="navLink">
        Contacto
      </a>
      <button className="navCta">Reservar cita</button>
    </nav>
  );
}

export default Nav;
