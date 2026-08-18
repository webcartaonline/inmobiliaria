import { AgentAvatar } from "../atoms/AgentAvatar";
import { AgentName } from "../atoms/AgentName";
import { AgentRole } from "../atoms/AgentRole";

export function AgentCard({ agent }) {
  return (
    <article className="agentCard">
      <AgentAvatar
        image={agent.image}
        name={agent.name}
        position={agent.imagePosition}
      />

      <div className="agentIdentity">
        <AgentName>{agent.name}</AgentName>
        <AgentRole>{agent.role}</AgentRole>
      </div>
    </article>
  );
}
