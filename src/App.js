import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { UseReducer } from './component/UseReduer/UseReducer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>useReduce</p>
        <UseReducer />
      </header>
    </div>
  );
}

export default App;
