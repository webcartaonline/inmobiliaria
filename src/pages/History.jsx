import granadaCity from "../assets/img/granadaCity.jpg";
import granadaStreet from "../assets/img/granadaStreet.jpg";
import TimelineItem from "../components/timelineItem/TimelineItem";
import ValueCard from "../components/valueCard/ValueCard";
import "../styles/history.css";

const timelineData = [
  {
    year: "2020",
    title: "La idea",
    text: "Nace la idea de crear un hogar pensado especialmente para estudiantes.",
    align: "left",
  },
  {
    year: "2021",
    title: "Primeros hogares",
    text: "Abrimos nuestras primeras viviendas y comenzamos a construir nuestra comunidad.",
    align: "right",
  },
  {
    year: "2023",
    title: "Crecemos contigo",
    text: "Cada vez más estudiantes encuentran en Granada un lugar al que llamar hogar.",
    align: "left",
  },
  {
    year: "Hoy",
    title: "Seguimos haciendo hogar",
    text: "Continuamos creciendo sin perder nuestra esencia: hacer que vivir en Granada sea una experiencia para recordar.",
    align: "right",
  },
];

const valuesData = [
  {
    title: "Comunidad",
    text: "Creamos espacios donde compartir, convivir y sentirte parte de algo.",
    icon: (
      <svg
        className="history-values__icon"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M12 3v18M5 8l7-5 7 5M5 8v10h14V8" />
      </svg>
    ),
  },
  {
    title: "Cercanía",
    text: "Estamos cerca de nuestros estudiantes para que nunca sientan que están solos.",
    icon: (
      <svg
        className="history-values__icon"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <circle cx="12" cy="10" r="3" />
        <path d="M12 21c4-4.5 7-8 7-11a7 7 0 0 0-14 0c0 3 3 6.5 7 11z" />
      </svg>
    ),
  },
  {
    title: "Confianza",
    text: "Queremos que encontrar un hogar sea sencillo, transparente y seguro.",
    icon: (
      <svg
        className="history-values__icon"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4z" />
      </svg>
    ),
  },
];

function History() {
  return (
    <div className="history-page">
      <section className="history-hero">
        <div className="history-hero__content">
          <p className="history-hero__eyebrow">Nido Estudiantil Granada</p>

          <h1 className="history-hero__title">
            Nuestra
            <span>Historia</span>
          </h1>

          <p className="history-hero__description">
            Una historia construida para acompañar a estudiantes en su vida en
            Granada.
          </p>
        </div>

        <div className="history-hero__image">
          <img src={granadaCity} alt="Panoramic view of Granada" />
        </div>
      </section>

      <section className="history-intro">
        <div className="history-intro__image">
          <img src={granadaStreet} alt="Historic street in Granada" />
        </div>

        <div className="history-intro__content">
          <span className="history-intro__label">Historia</span>

          <h2 className="history-intro__title">
            Una idea nacida
            <span>en Granada</span>
          </h2>

          <p className="history-intro__text">
            Nido Estudiantil Granada nació con una idea sencilla: crear algo más
            que un lugar donde vivir.
          </p>

          <p className="history-intro__text">
            Queremos que cada estudiante pueda sentirse parte de una ciudad,
            compartir experiencias y construir recuerdos que permanezcan mucho
            después de terminar sus estudios.
          </p>
        </div>
      </section>

      <section className="history-timeline">
        <div className="history-timeline__header">
          <span className="history-timeline__label">Nuestro camino</span>

          <h2 className="history-timeline__title">
            Una historia que
            <span>seguimos construyendo</span>
          </h2>
        </div>

        <div className="history-timeline__content">
          {timelineData.map((item) => (
            <TimelineItem
              key={item.year}
              year={item.year}
              title={item.title}
              text={item.text}
              align={item.align}
            />
          ))}
        </div>
      </section>

      <section className="history-values">
        <div className="history-values__header">
          <span className="history-values__label">Nuestros valores</span>

          <h2 className="history-values__title">¿Qué nos mueve?</h2>
        </div>

        <div className="history-values__grid">
          {valuesData.map((value) => (
            <ValueCard
              key={value.title}
              icon={value.icon}
              title={value.title}
              text={value.text}
            />
          ))}
        </div>
      </section>

      <section className="history-closing">
        <h2 className="history-closing__title">
          Tu próxima historia empieza aquí
        </h2>

        <p className="history-closing__text">
          Encuentra tu piso, comparte tu experiencia y empieza a escribir tu
          etapa en Granada.
        </p>

        <div className="history-closing__actions">
          <a href="/flats" className="history-closing__button--primary">
            Ver pisos
          </a>
        </div>
      </section>
    </div>
  );
}

export default History;
