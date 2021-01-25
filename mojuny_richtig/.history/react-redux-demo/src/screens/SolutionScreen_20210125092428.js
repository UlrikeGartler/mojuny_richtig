import { Button as Button } from "../core-components/Button.js";
// import { Text as Text } from "../core-components/Text.jsx";
// import { SolutionTable as SolutionTable } from "../sub-components/SolutionTable.jsx";
import firebase from "firebase";
import { connect } from "react-redux";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch, Link, Redirect } from "react-router-dom";
import { takeSolution1, takeSolution2 } from "../redux/actions/solutionActions";
import { clickCODE } from "../redux/actions/subCategoryTypes.js";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";

export function SolutionScreen(props) {
  console.log("props");
  //console.log("props");
  // let input = "";

  // if (props.subCategoryDecision === 1) {
  //   input = "mainCategory/strategy/subCategory/ask/1";
  // } else {
  //   input =
  //     "mainCategory/motivation/subCategory/concentration/concentrationSolutions";
  //   // console.log(props.subCategoryDecision);
  // }

  // if (props.subCategoryDecision === 3) {
  //   input = "mainCategory/motivation/subCategory/stress/stressSolutions";
  // }

  const [solutions, setSolutions] = useState([]);

  const db = firebase.firestore();
  db.collection("mainCategory/strategy/subCategory/ask/1") //input
    .get()
    .then(function (querySnapshot) {
      const items = [];
      querySnapshot.forEach(function (doc) {
        items.push(doc.data());
        // console.log(doc.label, " => ", doc.data());
      });
      setSolutions(items);
    });

  return (
    <div className="screen">
      <h1>Solutions</h1>
      {/* <Link to="/praise"> */}
      {solutions.map((solutions) => (
        <div key={solutions.id}>
          <Link to="/praise">
            <Button text={solutions.solution}></Button>
          </Link>
        </div>
      ))}
      {/* </Link> */}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    subCategoryDecision: state.sub.subCategoryDecision,
  };
};

export default connect(mapStateToProps, null)(SolutionScreen);
