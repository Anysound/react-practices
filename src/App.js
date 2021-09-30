import { useRef, useState } from "react";
import "./App.css";
import { PostForm } from "./PostForm";
import { PostList } from "./PostList";
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

  const bodyInputRef = useRef(); // получаем ссылку для элемента
  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const deletePost = (post) => {
    setPosts(posts.filter(it => it.id !== post.id))
  }

  return (
    <div className="App">
      <header className="App-header">
        <PostForm create={createPost}/>
        <PostList posts={posts} remove={deletePost} />
        {/* {posts.map(it => {
          return (
            <div>
              <p>{it.id}</p>
              <p>{it.title}</p>
              <p>{it.body}</p>
              <MyBtn onClick={(evt) => deletePost(evt.target.value)}>delete</MyBtn>
            </div>
          )
        })} */}

      </header>
    </div>
  );
}

export default App;
