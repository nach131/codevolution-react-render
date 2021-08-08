import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { ObjectUseState } from './component/Immutable Strate/ObjectUseState';
import { ArrayUseState } from './component/Immutable Strate/ArrayUseState';
// import { Button } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="row">
          <div className="col">
            <h5>ObjectUseState</h5>
            <ObjectUseState />
          </div>
          <div className="col">
            <h5>ArrayUseState</h5>
            <ArrayUseState />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
