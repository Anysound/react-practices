import { useRef, useState } from "react";
import "./App.css";
import { MyBtn } from "./UI/btn/MyBtn";
import { MyInput } from "./UI/input/MyInput";

function App() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [posts, setPosts] = useState([
    { id: 1, title: "JS 1", body: "description" },
    { id: 2, title: "JS 2", body: "description" },
    { id: 3, title: "JS 3", body: "description" },
  ]);

  const bodyInputRef = useRef(); // получаем ссылку для
  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = {
      id: Date.now(),
      title,
      body,
    };
    setPosts([...posts, newPost])
    setTitle('');
    setBody('')
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
          <MyInput
            value={body}
            onChange={e => setBody(e.target.value)}
            ref={bodyInputRef}
            placeholder="название поста"
          />
          <MyBtn onClick={addNewPost}>Push me</MyBtn>
        </form>
        {posts.map(it => {
          return (
            <div>
              <p>{it.id}</p>
              <p>{it.title}</p>
              <p>{it.body}</p>
            </div>
          )
        })}
      </header>
    </div>
  );
}

export default App;
