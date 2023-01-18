import "./App.css";
import Signup from "./components/pages/Signup";
import Home from "./components/pages/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />

        <Route exact path="/signup" component={Signup} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
