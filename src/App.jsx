/*
  App.jsx — componente raíz de la aplicación
  Cada sección se importa como componente independiente.
  Para añadir una nueva sección: importa el componente y colócalo
  dentro del fragmento <> </> en el orden deseado.
*/

/*
  App.jsx — componente raíz de la aplicación
  Cada sección se importa como componente independiente.
  Para añadir una nueva sección: importa el componente y colócalo
  dentro de <main> en el orden deseado.
*/

import About from './components/about.jsx';

function App() {
  return (
    <div className="appContainer">
      <main>
        {/* ── Añade aquí los componentes de cada sección en orden ── */}
        <About />
        {/* <OtraSeccion /> */}
      </main>
    </div>
  );
}

export default App;