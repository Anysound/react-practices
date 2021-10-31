import axios from "axios";
import { useEffect, useMemo, useRef, useState } from "react";
import PostService from "./API/PostService";
import "./App.css";
import { useFetching } from "./hooks/useFetching";
import { usePosts } from "./hooks/usePosts";
import { PostFilter } from "./PostFilter";
import { PostForm } from "./PostForm";
import { PostList } from "./PostList";
import { MyBtn } from "./UI/btn/MyBtn";
import { MyInput } from "./UI/input/MyInput";
import { Loader } from "./UI/loader/Loader";
import { Modal } from "./UI/modal/Modal";
import { Pagination } from "./UI/pagination/Pagination";
import { Select } from "./UI/select/Select";
import { getPageCount, getPagesArray } from "./utils/pages";

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
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1); // номер текущей страницы
  const [totalPages, setTotalPages] = useState(0);

  const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
    const response = await PostService.getAll(limit, page);
    setPosts(response.data);
    const totalCount = response.headers["x-total-count"];

    setTotalPages(getPageCount(totalCount, limit));
  });
  const bodyInputRef = useRef(); // получаем ссылку для элемента
  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  // async function fetchPosts() {
  //   setIsPostsLoading(true);

  //   setIsPostsLoading(false);
  // }

  const deletePost = (post) => {
    setPosts(posts.filter((it) => it.id !== post.id));
  };

  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  useEffect(() => {
    fetchPosts();
  }, [page]);

  return (
    <div className="App">
      <header className="App-header">
        <button
          onClick={(evt) => {
            console.log("evt: ", evt);
            fetchPosts();
          }}
        >
          get posts
        </button>
        {isPostsLoading ? (
          <div
            style={{ display: "flex", justifyContent: "center", marginTop: 50 }}
          >
            <Loader />
          </div>
        ) : (
          <PostList posts={sortedAndSearchedPosts} remove={deletePost} />
        )}
        <MyBtn onClick={() => setModal(true)}>create User</MyBtn>
        <Modal visible={modal} setVisible={setModal}>
          <PostForm create={createPost} />
        </Modal>

        <PostFilter filter={filter} setFilter={setFilter} />
        {postError && <h1>An error occured: {postError}</h1>}
        <Pagination totalPages={totalPages} page={page} changePage={setPage} />
      </header>
    </div>
  );
}

export default App;
