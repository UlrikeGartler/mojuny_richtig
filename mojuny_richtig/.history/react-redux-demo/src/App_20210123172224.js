//import logo from "./logo.svg";
import React from "react";
import "./css/styles.css";
import store from "./redux/store";
import { Provider } from "react-redux";
import { DecisionScreen } from "./screens/DecisionScreen";
import MainCategoryScreen from "./screens/MainCategoryScreen";
import SubCategoryScreen from "./screens/SubCategoryScreen";
import { BrowserRouter, Route } from "react-router-dom";
import { SupportScreen } from "./screens/SupportScreen";
import { SolutionScreen } from "./screens/SolutionScreen";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Route path="/welcome" exact strict component={SolutionScreen} />
          <Route path="/support" exact strict component={SupportScreen} />
          <Route
            path="/mainCategory"
            exact
            strict
            component={MainCategoryScreen}
          />
          <Route
            path="/subCategory"
            exact
            strict
            component={SubCategoryScreen}
          />
          <Route path="/solution" exact strict component={SolutionScreen} />
          <Route path="/praise" exact strict component={SolutionScreen} />
          <Route path="/decision" exact strict component={SolutionScreen} />
          <Route path="/goodbye" exact strict component={SolutionScreen} />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
