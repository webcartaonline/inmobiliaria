import "./hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="heroText">
        <p className="heroTag">Pisos compartidos en Granada</p>
        <h1 className="heroTitle">
          Tu piso ideal, cerca de la Universidad de Granada
        </h1>
        <p className="heroDescription">
          Gestión profesional de alojamientos para estudiantes en las mejores
          zonas de la capital nazarí.
        </p>
      </div>
      <img
        className="heroImage"
        src="/assets/img/granada.png"
        alt="Vista panorámica de la Alhambra y Granada al atardecer"
      />
    </section>
  );
}

export default Hero;
