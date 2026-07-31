import './hero.css';
import granadaImage from '../../assets/img/granada.png';

function Hero() {
  return (
    <section className="hero">
        <div className="heroText">
          <p className="heroTag">Pisos compartidos en Granada</p>
          <h1 className="heroTitle">Tu piso ideal, cerca de la Universidad de Granada</h1>
          <p className="heroDescription">
            Gestión profesional de alojamientos para estudiantes en las mejores zonas de la capital nazarí.
          </p>
        </div>
        <img
          className="heroImage"
          src={granadaImage}
          alt="Vista panorámica de la Alhambra y Granada al atardecer"
        />
    </section>
  );
}

export default Hero;