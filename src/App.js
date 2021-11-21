import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { AppRouter } from "./UI/AppRouter";
import { Navbar } from "./UI/Navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AppRouter/>
    </BrowserRouter>
  );
}

export default App;
