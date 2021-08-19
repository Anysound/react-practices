import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Main from "./Main";
import "./App.css";
import Card from "./Card";
import Comp404 from "./Comp-404";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/card" component={Card} />
          <Redirect to="/" exact/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
