import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Signup from "./components/pages/Signup";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
