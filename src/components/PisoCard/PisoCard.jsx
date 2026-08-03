import './PisoCard.css';

function PisoCard({ image, price, title, distance, services }) {
    return (
        <article className="pisoCard">
            <div className="pisoCardImageWrapper">
                <img className="pisoCardImage" src={image} alt={title} />
                <span className="pisoCardPrice">{price}</span>
            </div>

            <div className="pisoCardInfo">
                <h3 className="pisoCardTitle">{title}</h3>

                <p className="pisoCardDistance">
                    {distance}
                </p>

                <ul className="pisoCardServices">
                    {services.map((service) => (
                        <li key={service} className="pisoCardService">
                            {service}
                        </li>
                    ))}
                </ul>
            </div>
        </article>
    );
}

export default PisoCard;
