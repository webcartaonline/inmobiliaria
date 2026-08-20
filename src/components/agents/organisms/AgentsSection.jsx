import { AgentCard } from "../molecules/AgentCard";
import { agents } from "../../../data/agents";
import "./AgentsSection.css";

export function AgentsSection() {
  return (
    <section
      id="agentes"
      className="agentsSection"
      aria-labelledby="agentsTitle"
    >
      <div className="agentsContainer">
        <header className="agentsHeader">
          <h2 id="agentsTitle" className="agentsTitle">
            Nuestros agentes
          </h2>
        </header>

        <div className="agentsGrid">
          {agents.map((agent) => (
            <AgentCard key={agent.id} agent={agent} />
          ))}
        </div>
      </div>
    </section>
  );
}
