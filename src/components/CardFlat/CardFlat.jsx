import './CardFlat.css';

function CardFlat({ image, price, title, distance, services }) {
    return (
        <article className="cardFlat">
            <div className="cardFlatImageWrapper">
                <img className="cardFlatImage" src={image} alt={title} />
                <span className="cardFlatPrice">{price}</span>
            </div>

            <div className="cardFlatInfo">
                <h3 className="cardFlatTitle">{title}</h3>

                <p className="cardFlatDistance">
                    {distance}
                </p>

                <ul className="cardFlatServices">
                    {services.map((service) => (
                        <li key={service} className="cardFlatService">
                            {service}
                        </li>
                    ))}
                </ul>
            </div>
        </article>
    );
}

export default CardFlat;
