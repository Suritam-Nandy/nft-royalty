import { Provider } from "react-redux";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import store, { rrfProps } from "./store";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./components/pages/Login";
import Signup from "./components/pages/Signup";
import Home from "./components/pages/Home";
import AddCollectionDetails from "./components/pages/AddCollectionDetails";
import { useEffect, useState } from "react";
import { auth } from "./store";
function App() {
  return (
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
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
      </ReactReduxFirebaseProvider>
    </Provider>
  );
}

export default App;
