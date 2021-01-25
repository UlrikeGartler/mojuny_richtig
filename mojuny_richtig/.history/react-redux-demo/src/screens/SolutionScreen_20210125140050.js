import { Button as Button } from "../core-components/Button.js";
// import { Text as Text } from "../core-components/Text.jsx";
// import { SolutionTable as SolutionTable } from "../sub-components/SolutionTable.jsx";
import firebase from "firebase";
import { connect } from "react-redux";
import React, { useState } from "react";
import { BrowserRouter, Route, Switch, Link, Redirect } from "react-router-dom";

export function SolutionScreen(props) {
  //console.log("props");
  console.log(props.subCategoryDecision);
  let input = "";

  if (props.subCategoryDecision === 1) {
    input = "mainCategory/strategy/subCategory/ask/1";
  } else if (props.subCategoryDecision === 2) {
    input = "mainCategory/strategy/subCategory/code/codeSolutions";
  } else if (props.subCategoryDecision === 3) {
    input = "mainCategory/motivation/subCategory/stress/stressSolutions";
  } else if (props.subCategoryDecision === 3) {
    input = "mainCategory/motivation/subCategory/stress/stressSolutions";
  } else if (props.subCategoryDecision === 3) {
    input = "mainCategory/motivation/subCategory/stress/stressSolutions";
  } else if (props.subCategoryDecision === 3) {
    input = "mainCategory/motivation/subCategory/stress/stressSolutions";
  } else if (props.subCategoryDecision === 3) {
    input = "mainCategory/motivation/subCategory/stress/stressSolutions";
  } else if (props.subCategoryDecision === 3) {
    input = "mainCategory/motivation/subCategory/stress/stressSolutions";
  } else if (props.subCategoryDecision === 3) {
    input = "mainCategory/motivation/subCategory/stress/stressSolutions";
  } else {
    input =
      "mainCategory/motivation/subCategory/concentration/concentrationSolutions";
  }

  const [solutions, setSolutions] = useState([]);

  const db = firebase.firestore();
  db.collection(input) //input
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
