import './App.css';
import Dashboard from './page/Dashboard';
import Login from './page/login';
import ListadoInicial from './page/ListadoInicial';
import Scaner from './page/Scaner';
import ScanGallery from './page/ScanGallery';

function App() {
  return (
    <section >
      <div>
        <Login />
      </div>
      <div>
        <Dashboard/>
      </div>
      <div>
        <ListadoInicial/>
      </div>
      <div>
        <Scaner/>
      </div>
      <div>
        <ScanGallery/>
      </div>

    </section>
  );
}

export default App;