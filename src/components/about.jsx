import officeMeeting from '../assets/img/officeMeeting.jpg';
import '../styles/About.css';

function About() {
  return (
    <section className="about">
      <div className="about-container">
        <img
          className="about-image"
          src={officeMeeting}
          alt="Equipo de Nido Estudiantil Granada reunido en la oficina"
        />

        <div className="about-content">
          <h2 className="about-title">
            Expertos en logística residencial universitaria
          </h2>
          <p className="about-description">
            Desde 2012 transformamos la experiencia de vivir en Granada. No
            solo alquilamos habitaciones, diseñamos comunidades para que el
            estudiante solo se preocupe por sus metas.
          </p>

          <div className="about-stats">
            <div className="about-stat">
              <p className="about-stat-number">12</p>
              <p className="about-stat-label">AÑOS EN GRANADA</p>
            </div>
            <div className="about-stat">
              <p className="about-stat-number">300+</p>
              <p className="about-stat-label">PISOS GESTIONADOS</p>
            </div>
            <div className="about-stat">
              <p className="about-stat-number">1200+</p>
              <p className="about-stat-label">ESTUDIANTES ALOJADOS</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;