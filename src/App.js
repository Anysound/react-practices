import { useRef, useState } from "react";
import "./App.css";
import { MyBtn } from "./UI/btn/MyBtn";
import { MyInput } from "./UI/input/MyInput";

function App() {
  const [title, setTitle] = useState("");
  const bodyInputRef = useRef(); // получаем ссылку для 
  const addNewPost = (e) => {
    e.preventDefault();
    console.log(bodyInputRef.current.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <form action="">
          {/* управляемый компонент */}
          <MyInput
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="название поста"
          />
          {/* неуправляемый компонент */}
          <MyInput ref={bodyInputRef} placeholder="название поста" />
          <MyBtn onClick={addNewPost}>Push me</MyBtn>
        </form>
      </header>
    </div>
  );
}

export default App;