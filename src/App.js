import { useMemo, useRef, useState } from "react";
import "./App.css";
import { usePosts } from "./hooks/usePosts";
import { PostFilter } from "./PostFilter";
import { PostForm } from "./PostForm";
import { PostList } from "./PostList";
import { MyBtn } from "./UI/btn/MyBtn";
import { MyInput } from "./UI/input/MyInput";
import { Modal } from "./UI/modal/Modal";
import { Select } from "./UI/select/Select";

function App() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [posts, setPosts] = useState([
    { id: 1, title: "yi1", body: "er 1" },
    { id: 2, title: "x2", body: "tr 2" },
    { id: 3, title: "ab3", body: "ab 3" },
  ]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);

  const bodyInputRef = useRef(); // получаем ссылку для элемента
  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  function getSortedPosts() {

  }

  const deletePost = (post) => {
    setPosts(posts.filter((it) => it.id !== post.id));
  };


  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

  return (
    <div className="App">
      <header className="App-header">
        <MyBtn onClick={() => setModal(true)}>create User</MyBtn>
        <Modal visible={modal} setVisible={setModal}>
          <PostForm create={createPost} />
        </Modal>
        <PostList posts={sortedAndSearchedPosts} remove={deletePost} />
        <PostFilter filter={filter} setFilter={setFilter} />
      </header>
    </div>
  );
}

export default App;
