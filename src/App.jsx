import PisoCard from './components/cardFlats';
import images from './utils/images';

function App() {
    return (
        <main>
            <PisoCard
                image={images['Window.png']}
                price="450€/MES"
                title="Piso en el Realejo"
                distance="8 min a la UGR"
                services={['WiFi 1GB', 'Climatizado']}
            />
            <PisoCard
                image={images['Groound.png']}
                price="50€/MES"
                title="Piso felíz navidad"
                distance="10 min a la UGR"
                services={['WiFi 1GB', 'Climatizado', 'Piscina']}
            />
        </main>
    );
}

export default App;