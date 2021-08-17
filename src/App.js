import {useState} from 'react';
import CardWrapper from "./Card-wrapper";
import StatusCard from "./Status-card";
import Context from "./Context";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  const count = n => setCounter(counter + n);
  const value = {
    counter,
    count
  }

  return (
    <Context.Provider value={value}>
      <div className="App">
        <StatusCard />
        <CardWrapper />
      </div>
    </Context.Provider>
  );
}

export default App;
