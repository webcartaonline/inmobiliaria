import { agents } from "../data/agents";
import teamImage from "../assets/img/team.jpg";
import "./Agents.css";

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
  { value: "12", label: "Años de experiencia" },
  { value: "300+", label: "Pisos gestionados" },
  { value: "1200+", label: "Estudiantes alojados" },
];

function Agents() {
  return (
    <div className="agentsPage">
      <section className="agentsHero" aria-labelledby="agents-page-title">
        <div className="agentsHeroCopy">
          <p className="agentsEyebrow">Equipo de Nido Granada</p>
          <h1 id="agents-page-title">
            Conoce a
            <br />
            nuestro
            <br />
            equipo
          </h1>
          <p className="agentsHeroText">
            Personas que te escuchan, te acompañan y hacen más fácil encontrar
            el lugar perfecto para ti.
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
            Conocemos cada barrio, cada universidad y cada detalle. Nuestro
            equipo está en Granada para acompañarte, resolver tus dudas y
            ayudarte a sentirte en casa desde el primer día.
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
                  Escríbeme <span aria-hidden="true">↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="agentsCta" aria-labelledby="agents-cta-title">
        <p>Un equipo cerca de ti</p>
        <h2 id="agents-cta-title">
          ¿Todavía no has
          <br />
          encontrado tu piso?
        </h2>
        <div className="agentsCtaActions">
          <a className="agentsPrimaryButton" href="/flats">
            Buscar piso
          </a>
          <a className="agentsSecondaryButton" href="#contacto">
            Hablar con nosotros
          </a>
        </div>
      </section>
    </div>
  );
}

export default Agents;
