import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Signup from "./components/pages/Signup";
import Home from "./components/pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />

      <Route exact path="/signup" component={Signup} />
    </BrowserRouter>
  );
}

export default App;
