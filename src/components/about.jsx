import teamPhoto from '../assets/img/team.jpg';
import '../styles/about.css';

const STATS = [
  { number: '12 AÑOS', label: 'EN GRANADA' },
  { number: '300+',    label: 'PISOS GESTIONADOS' },
  { number: '1200+',   label: 'ESTUDIANTES ALOJADOS' },
];

function About() {
  return (
    <section className="about">
      <div className="aboutContainer">

        <img
          className="aboutImage"
          src={teamPhoto}
          alt="Equipo de Nido Estudiantil Granada reunido en la oficina"
        />

        <div className="aboutContent">
          <h2 className="aboutTitle">
            Expertos en logística residencial universitaria
          </h2>

          <p className="aboutDescription">
            Desde 2012 transformamos la experiencia de vivir en Granada.
          </p>
          <p className="aboutDescription">
            No solo alquilamos habitaciones, diseñamos comunidades para que el
            estudiante solo se preocupe por sus metas.
          </p>

          <div className="aboutStats">
            {STATS.map(({ number, label }) => (
              <div key={label}>
                <p className="aboutStatNumber">{number}</p>
                <p className="aboutStatLabel">{label}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;