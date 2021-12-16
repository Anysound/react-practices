import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { MainPage } from "./components/MainPage";
import { Nav } from "./components/Nav";
import { TasksPage } from "./components/TasksPage";
import { UserPage } from "./components/UserPage";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Nav />
        <Routes>
          <Route path={"/"} element={<MainPage />} />
          <Route path={"/users"} element={<UserPage />} />
          <Route path={"/tasks"} element={<TasksPage />} />
        </Routes>

        {/* <Card
        width="100px"
        height="100px"
        variant={CardVariant.outlined}
        onClick={(num) => console.log("click ", num)}
      >
        <button>click me</button>
      </Card>
      <TasksPage/>
      <UserPage/> */}
      </div>
    </BrowserRouter>
  );
};

export default App;
