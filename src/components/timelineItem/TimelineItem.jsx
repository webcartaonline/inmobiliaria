function TimelineItem({ year, title, text, align }) {
  return (
    <article className={`history-timeline__item history-timeline__item--${align}`}>
      <span className="history-timeline__year">{year}</span>

      <div className="history-timeline__text">
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </article>
  );
}

export default TimelineItem;