import { useMemo, useRef, useState } from "react";
import "./App.css";
import { PostFilter } from "./PostFilter";
import { PostForm } from "./PostForm";
import { PostList } from "./PostList";
import { MyBtn } from "./UI/btn/MyBtn";
import { MyInput } from "./UI/input/MyInput";
import { Select } from "./UI/select/Select";

function App() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [posts, setPosts] = useState([
    { id: 1, title: "yi1", body: "er 1" },
    { id: 2, title: "x2", body: "tr 2" },
    { id: 3, title: "ab3", body: "ab 3" },
  ]);
  const [filter, setFilter] = useState({sort: '', search: ''});

  const bodyInputRef = useRef(); // получаем ссылку для элемента
  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  function getSortedPosts() {
    console.log('getSortedPosts');
    if (filter.sort) {
      return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]));
    }
    return posts;
  }

  const deletePost = (post) => {
    setPosts(posts.filter((it) => it.id !== post.id));
  };

  const sortedPosts = useMemo(getSortedPosts, [posts, filter.sort]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(it => it.body.toLowerCase().includes(filter.search))
  },[filter.search, sortedPosts])


  return (
    <div className="App">
      <header className="App-header">
        <PostForm create={createPost} />
        <PostList posts={sortedAndSearchedPosts} remove={deletePost} />
        <PostFilter filter={filter} setFilter={setFilter} />
      </header>
    </div>
  );
}

export default App;
