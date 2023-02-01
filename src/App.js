import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./components/pages/Login";
import Signup from "./components/pages/Signup";
import Home from "./components/pages/Home";
import AddCollectionDetails from "./components/pages/AddCollectionDetails";
import { useEffect, useState } from "react";
import { auth } from "./firebase";
function App() {
  const [walletAddress, setWalletAddress] = useState("");
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setWalletAddress(user.walletAddress);
      } else setWalletAddress("");
    });
  }, []);

  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/"
          // element={
          component={Home}
          // walletAddress={walletAddress}
        />
        <Route
          exact
          path="/addcollectiondetails"
          component={AddCollectionDetails}
        />

        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
