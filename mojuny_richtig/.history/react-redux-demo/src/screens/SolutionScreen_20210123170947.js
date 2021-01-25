// import { Button as Button } from "../core-components/Button.js";
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

export function SolutionScreen(props) {
  //local state
  const [subCategoryState, setSubCategoryState] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  // const [concentration, setConcentration] = useState([]);
  const ref = firebase
    .firestore()
    .collection("mainCategory/strategy/subCategory/ask/1");

  // const db = firebase.firestore();
  // db.collection(input)
  //   .get()
  //   .then(function (querySnapshot) {
  //     const items = [];
  //     querySnapshot.forEach(function (doc) {
  //       items.push(doc.data());
  //       // console.log(doc.label, " => ", doc.data());
  //     });
  //     setConcentration(items);
  //   });

  //load data
  // const [concentrationSolutions, setConcentrationSolutions] = useState([]);

  // const ref = firebase
  //   .firestore()
  //   .collection(
  //     "mainCategory/motivation/subCategory/concentration/concentrationSolutions"
  //   );
  // // console.log(ref);

  // function getSolutions() {
  //   ref.onSnapshot((querySnapshot) => {
  //     const items = [];
  //     querySnapshot.forEach((doc) => {
  //       items.push(doc.data());
  //     });
  //     setConcentrationSolutions(items);
  //   });
  // }

  // useEffect(() => {
  //   getSolutions();
  // }, []);

  const renderAuthButton = () => {
    if (isLoggedIn) {
      return (
        <div>
          <button onClick={props.clickOnASK}>Ask</button>
          <button onClick={props.clickOnCODE}>Code</button>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={props.clickOnASK}>Concentration</button>
          <button onClick={props.clickOnCODE}>Stress</button>
        </div>
      );
    }
  };

  return (
    <div className="screen">
      <h1>Solutions</h1>
      <Link to="/solution">{renderAuthButton()}</Link>

      {/* {concentration.map((concentration) => (
        <div key={concentration.id}>
          <h2>{concentration.solution}</h2>
        </div>
      ))} */}

      {/* <Label text="Error"></Label>
        <Text id="splitHeading" text="Wähle eine Option aus:"></Text>
        <SolutionTable></SolutionTable>
        <Link to="/praise">
          <Button text="Weiter"></Button>
        </Link> */}

      {mainCategory.map((mainCategory) => (
        <div key={mainCategory.id}>
          <Link to="/subCategory">
            <Button
              text={mainCategory.label}
              // function={() => setMainCategory(mainCategory.id)}
              function={mainCategory.function}
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
    // clickOnCONCEPT: () => dispatch(clickOnCONCEPT()),
    // clickOnERROR: () => dispatch(clickOnERROR()),
    // clickOnGENERAL: () => dispatch(clickOnGENERAL()),
    // clickOnLEARN: () => dispatch(clickOnLEARN()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SolutionScreen);
