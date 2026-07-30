import PisoCard from './components/cardFlats';
import images from './utils/images';

function App() {
    return (
        <main>
            <div className="cardsContainer">
                <PisoCard
                    image={images['Window.png']}
                    price="450€/MES"
                    title="Piso en el Realejo"
                    distance="a 8 min del centro"
                    services={['WiFi 1GB', 'Climatizado']}
                />
                <PisoCard
                    image={images['Groound.png']}
                    price="500€/MES"
                    title="Piso en Paseo de las flores"
                    distance="a 15 min del centro"
                    services={['WiFi 1GB', 'Climatizado', 'Piscina']}
                />
                <PisoCard
                    image={images['pentHouse.png']}
                    price="800€/MES"
                    title="Piso en Plaza Cristo Rey"
                    distance="En el centro"
                    services={['WiFi 1GB', 'Climatizado', 'Terraza']}
                />
            </div>
        </main>
    );
}

export default App;