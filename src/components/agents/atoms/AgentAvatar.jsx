export function AgentAvatar({ image, name, position = "50% 50%" }) {
  return (
    <div
      className="agentAvatar"
      role="img"
      aria-label={`Retrato de ${name}`}
      style={{
        backgroundImage: `url("${image}")`,
        backgroundPosition: position,
      }}
    />
  );
}
