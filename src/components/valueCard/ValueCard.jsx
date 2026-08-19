function ValueCard({ icon, title, text }) {
  return (
    <article className="history-values__item">
      {icon}
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}

export default ValueCard;