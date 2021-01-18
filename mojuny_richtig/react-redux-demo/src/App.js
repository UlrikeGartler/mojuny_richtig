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

//react-redux-firestore props
const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
};

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
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
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
