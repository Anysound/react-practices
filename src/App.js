import Counter from './Counter';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter initialCount={0} />
      </header>
    </div>
  );
}

export default App;
