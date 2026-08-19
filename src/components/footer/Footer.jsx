import './Footer.css';

function Footer() {
  return (
    <footer id="contacto" className="footerContainer">
            
      <div className="footerBrand">
        <h2>NIDO ESTUDIANTIL GRANADA</h2>
      </div>
      
      <div className="footerContent">
               
        <div className="footerColumn explorer">
          <h3 className="columnTitle">EXPLORAR</h3>
          <ul className="footerLinks">
            <li><a href="#">PISOS</a></li>
            <li><a href="#">ZONAS UNIVERSITARIAS</a></li>
            <li><a href="#">TÉRMINOS DE CONTRATO</a></li>
            <li><a href="#">CONTACTO</a></li>
          </ul>
        </div>

        <div className="footerColumn contact">
          <h3 className="columnTitle">CONTACTO</h3>
          <p className="contactItem">Calle Recogidas, 42. Granada.</p>
          <p className="contactItem">+34 958 00 00 00</p>
          <p className="contactItem">info@nidoestudiantil.com</p>
        </div>

        <div className="footerColumn followUs">
          <h3 className="columnTitle">SÍGUENOS</h3>
          <div className="socialIcons">
            <a href="#" className="socialCircle" aria-label="Sitio Web">🌐</a>
            <a href="#" className="socialCircle" aria-label="Comunidad">👥</a>
            <a href="#" className="socialCircle" aria-label="Correo">@</a>
          </div>
        </div>

      </div>

      
      <div className="footerBottom">
        <p className="copyright">
          © 2026 NIDO ESTUDIANTIL GRANADA. TODOS LOS DERECHOS RESERVADOS.
        </p>
        <p className="legalNote">
          PROYECTO CON FINALIDAD EDUCATIVA, DESARROLLADO POR EL EQUIPO HABITATCODE.
        </p>
      </div>

    </footer>
  );
}

export default Footer;
