import { Button as Button } from "../core-components/Button.js";
// import { Text as Text } from "../core-components/Text.jsx";
// import { SolutionTable as SolutionTable } from "../sub-components/SolutionTable.jsx";
import firebase from "firebase";
import { connect } from "react-redux";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch, Link, Redirect } from "react-router-dom";
import { takeSolution1, takeSolution2 } from "../redux/actions/solutionActions";
import { clickCODE } from "../redux/actions/subCategoryTypes.js";

export function SolutionScreen(props) {
  return (
    <div className="screen">
      <h2>Decision- {props.subCategoryDecision}</h2>

      <label>Wähle eine Lösung aus: </label>
      <br></br>
      <br></br>
      {askSolutions.map((askSolutions) => (
        <div key={askSolutions.id}>
          <Link to="/praise">
            <Button
              text={askSolutions.solution}
              function={askSolutions.function}
            ></Button>
          </Link>
        </div>
      ))}
    </div>
  );
}

//global state from store
const mapStateToProps = (state) => {
  return {
    subCategoryDecision: state.sub.subCategoryDecision,
    solutionDecision: state.sol.solutionDecision,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    takeSolution1: () => dispatch(takeSolution1()),
    takeSolution2: () => dispatch(takeSolution2()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SolutionScreen);
