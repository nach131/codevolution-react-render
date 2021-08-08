import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Parent } from './componentes/Optimization/Parent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="row">
          <div className="col">
            <Parent />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
