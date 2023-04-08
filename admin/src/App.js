import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import Home from "./pages/home/Home";
import New from "./pages/new/New";
import Products from "./pages/Product/Products";

function App() {


  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className={darkMode ? "app dark" : "app"}>
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
      
              <div className="container">
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/users">
                  <List />
                </Route>
                <Route path="/user/:userId">
                  <Single />
                </Route>
                <Route
                  path="new"
                  element={<New inputs={userInputs} title="Add New User" />}
                />

                <Route path="/products">
                  <Products />
                </Route>
                <Route path="/product/:productId">
                  <Single />
                </Route>
                <Route
                  path="new"
                  element={
                    <New inputs={productInputs} title="Add New Product" />
                  }
                />
              </div>
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
