import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { ContextParents } from './component/Context/ContextParents';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="row">
          <div className="col">
            <ContextParents />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
