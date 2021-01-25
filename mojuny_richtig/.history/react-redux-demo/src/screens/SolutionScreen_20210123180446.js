import { Button as Button } from "../core-components/Button.js";
// import { Text as Text } from "../core-components/Text.jsx";
// import { SolutionTable as SolutionTable } from "../sub-components/SolutionTable.jsx";
import firebase from "firebase";
import { connect } from "react-redux";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch, Link, Redirect } from "react-router-dom";
import {
  clickOnASK,
  clickOnCODE,
  clickOnERROR,
  clickOnGENERAL,
  clickOnLEARN,
  clickOnCONCEPT,
} from "../redux/actions/subCategoryActions";
import { clickCODE } from "../redux/actions/subCategoryTypes.js";

export function SolutionScreen(props) {
  //local state
  const [askSolutions, setAskSolutions] = useState([]);

  let input = "";
  if (props.subCategoryDecisionState === 1) {
    input = "mainCategory/strategy/subCategory/ask/1";
    console.log(props.subCategoryDecisionState);
  } else if (props.subCategoryDecisionState === 2) {
    input = "mainCategory/strategy/subCategory/code/codeSolutions";
  }

  const db = firebase.firestore();
  db.collection(input)
    .get()
    .then(function (querySnapshot) {
      const items = [];
      querySnapshot.forEach(function (doc) {
        items.push(doc.data());
        // console.log(doc.label, " => ", doc.data());
      });
      setConcentration(items);
    });

  // const ref = firebase.firestore().collection(input);
  // //console.log(ref);
  // //load data
  // function getAskSolutions() {
  //   ref.onSnapshot((querySnapshot) => {
  //     const items = [];
  //     querySnapshot.forEach((doc) => {
  //       items.push(doc.data());
  //     });
  //     setAskSolutions(items);

  //     console.log(items);
  //   });
  // }

  useEffect(() => {
    getAskSolutions();
  }, []);

  return (
    <div className="screen">
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
    subCategoryDecision: state.subCategoryDecision,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    clickOnASK: () => dispatch(clickOnASK()),
    clickOnCODE: () => dispatch(clickOnCODE()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SolutionScreen);
