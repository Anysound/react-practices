import { useCallback, useMemo, useState } from "react";
import "./App.css";

function createUser(name, surname) {
  const user = { name, surname };
  console.log(user);
  // return { name, surname };
}

function App() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [counter, setCounter] = useState(0);

  const user = useMemo(() => createUser(name, surname), [name, surname]);

  return (
    <form action="">
      <button
        onClick={(evt) => {
          evt.preventDefault();
          setCounter(counter + 1);
        }}
      >
        На меня нажали {counter} раз.
      </button>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="surname">Surname</label>
      <input
        id="surname"
        type="text"
        value={surname}
        onChange={(e) => setSurname(e.target.value)}
      />
      <div>{JSON.stringify(user)}</div>
    </form>
  );
}

export default App;
