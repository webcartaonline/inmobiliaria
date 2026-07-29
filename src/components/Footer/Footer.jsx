import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer-container">
      {/* 1. Título principal del sitio */}
      <div className="footer-brand">
        <h2>NIDO ESTUDIANTIL GRANADA</h2>
      </div>

      {/* 2. Secciones del Footer */}
      <div className="footer-content">
        {/* Columna 1: Explorar */}
        <div className="footer-column">
          <h3 className="column-title">EXPLORAR</h3>
          <ul className="footer-links">
            <li><a href="#pisos">PISOS</a></li>
            <li><a href="#zonas">ZONAS UNIVERSITARIAS</a></li>
            <li><a href="#contrato">TÉRMINOS DE CONTRATO</a></li>
            <li><a href="#contacto">CONTACTO</a></li>
          </ul>
        </div>

        {/* Columna 2: Contacto */}
        <div className="footer-column">
          <h3 className="column-title">CONTACTO</h3>
          <p className="contact-item">Calle Recogidas, 42. Granada.</p>
          <p className="contact-item">+34 958 00 00 00</p>
          <p className="contact-item">info@nidoestudiantil.com</p>
        </div>

        {/* Columna 3: Síguenos (Iconos) */}
        <div className="footer-column">
          <h3 className="column-title">SÍGUENOS</h3>
          <div className="social-icons">
            <a href="#web" className="social-circle" aria-label="Sitio Web">🌐</a>
            <a href="#comunidad" className="social-circle" aria-label="Comunidad">👥</a>
            <a href="#email" className="social-circle" aria-label="Correo">@</a>
          </div>
        </div>
      </div>

      {/* 3. Textos legales e inferiores */}
      <div className="footer-bottom">
        <p className="copyright">
          © 2026 NIDO ESTUDIANTIL GRANADA. TODOS LOS DERECHOS RESERVADOS.
        </p>
        <p className="legal-note">
          PROYECTO CON FINALIDAD EDUCATIVA, DESARROLLADO POR EL EQUIPO HABITATCODE.
        </p>
      </div>
    </footer>
  );
}

export default Footer;

