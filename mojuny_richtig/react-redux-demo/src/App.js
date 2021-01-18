//import logo from "./logo.svg";
import React from "react";
import "./css/styles.css";
import store from "./redux/store";
import { Provider } from "react-redux";
import { DecisionScreen } from "./screens/DecisionScreen";
import MainCategoryScreen from "./screens/MainCategoryScreen";
import { SubCategoryScreen } from "./screens/SubCategoryScreen";
import { BrowserRouter, Route } from "react-router-dom";
import { SupportScreen } from "./screens/SupportScreen";
import firebase from "firebase";

import { ReactReduxFirebaseProvider } from "react-redux-firebase";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path="/support" exact strict component={SupportScreen} />
        <Route
          path="/mainCategory"
          exact
          strict
          component={MainCategoryScreen}
        />
        <Route path="/subCategory" exact strict component={SubCategoryScreen} />
      </div>
    </BrowserRouter>
  );
}

export default App;
