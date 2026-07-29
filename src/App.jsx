/*
  App.jsx — componente raíz de la aplicación
  Cada sección se importa como componente independiente.
  Para añadir una nueva sección: importa el componente y colócalo
  dentro del fragmento <> </> en el orden deseado.
*/

import About from './components/about.jsx';

function App() {
  return (
    <>
      {/* ── Añade aquí los componentes de cada sección en orden ── */}
      <About />
      {/* <OtraSeccion /> */}
    </>
  );
}

export default App;