import { agents } from "../data/agents";
import teamImage from "../assets/img/realEstateTeamInOffice.webp";
import "../styles/agents.css";

const teamOrder = [
  "patricia-aparicio",
  "camilo-piamba",
  "carlos-perez",
  "marisa-ruiz",
  "oscar-mejia",
];

const team = teamOrder
  .map((id) => agents.find((agent) => agent.id === id))
  .filter(Boolean);

const stats = [
  { value: "12", label: "Años" },
  { value: "300+", label: "Pisos gestionados" },
  { value: "1200+", label: "Estudiantes alojados" },
];

const services = [
  {
    number: "01",
    title: "Una habitación",
    description:
      "Buscamos el ambiente ideal para ti en pisos compartidos con estudiantes afines.",
  },
  {
    number: "02",
    title: "Un piso completo",
    description:
      "Para ti y tu grupo de amigos. Gestionamos todo el proceso para que solo tengáis que mudaros.",
  },
  {
    number: "03",
    title: "Asesoramiento",
    description:
      "Dudas con el contrato, el barrio, el transporte. Estamos aquí antes, durante y después.",
  },
];

function Agents() {
  return (
    <div className="agentsPage">
      <section className="agentsHero" aria-labelledby="agents-page-title">
        <div className="agentsHeroCopy">
          <p className="agentsEyebrow">Personas que conocen Granada</p>
          <h1 id="agents-page-title">
            Conoce a
            <br />
            nuestro
            <br />
            equipo
          </h1>
          <p className="agentsHeroText">
            Estamos aquí para ayudarte a encontrar un hogar donde puedas
            disfrutar de tu etapa universitaria.
          </p>
        </div>

        <figure className="agentsHeroMedia">
          <img
            src={teamImage}
            alt="El equipo de Nido reunido alrededor de una mesa"
          />
        </figure>
      </section>

      <section className="agentsIntro" aria-labelledby="agents-intro-title">
        <div className="agentsIntroCopy">
          <h2 id="agents-intro-title">
            No solo te encontramos
            <br />
            un piso
          </h2>
          <p>
            Conocemos cada barrio, cada campus y cada calle de Granada. Nuestro
            objetivo es que no pierdas el tiempo viendo opciones que no encajan
            contigo. Te asesoramos basándonos en tu facultad, tu presupuesto y
            tu estilo de vida.
          </p>
        </div>

        <dl className="agentsStats">
          {stats.map((stat) => (
            <div className="agentsStat" key={stat.label}>
              <dt>{stat.value}</dt>
              <dd>{stat.label}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="agentsTeam" id="agentes" aria-labelledby="team-title">
        <h2 id="team-title">Las personas detrás de Nido</h2>

        <div className="agentsTeamGrid">
          {team.map((agent) => (
            <article className="agentsProfile" key={agent.id}>
              <img src={agent.image} alt={`Retrato de ${agent.name}`} />
              <div className="agentsProfileBody">
                <h3>{agent.name}</h3>
                <p>{agent.role}</p>
                <a href="#contacto" aria-label={`Contactar con ${agent.name}`}>
                  Contactar <span aria-hidden="true">↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="agentsServices" aria-label="Servicios de alojamiento">
        {services.map((service) => (
          <article className="agentsService" key={service.number}>
            <span>{service.number}</span>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </article>
        ))}
      </section>

      <section className="agentsCta" aria-labelledby="agents-cta-title">
        <h2 id="agents-cta-title">
          ¿Todavía no has
          <br />
          encontrado tu
          <br />
          piso?
        </h2>
        <div className="agentsCtaActions">
          <a className="agentsPrimaryButton" href="/flats">
            Reservar cita
          </a>
        </div>
      </section>
    </div>
  );
}

export default Agents;
