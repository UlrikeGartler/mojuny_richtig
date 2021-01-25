// import { Button as Button } from "../core-components/Button.js";

// import { Text as Text } from "../core-components/Text.jsx";
// import { SolutionTable as SolutionTable } from "../sub-components/SolutionTable.jsx";

import firebase from "firebase";

import { connect } from "react-redux";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch, Link, Redirect } from "react-router-dom";

export function SolutionScreen(props) {
  const [subCategoryState, setSubCategoryState] = useState(0);

  let input = "";

  if (props.subCategoryDecision === 1) {
    input =
      "mainCategory/strategy/subCategory/concentration/concentrationSolutions";
  } else {
    input = "mainCategory/motivation/subCategory/general/generalSolutions";
  }

  const [concentration, setConcentration] = useState([]);

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

  return (
    <div className="screen">
      <h1>Solutions</h1>
      {concentration.map((concentration) => (
        <div key={concentration.id}>
          <h2>{concentration.solution}</h2>
        </div>
      ))}

      {/* <Label text="Error"></Label>
        <Text id="splitHeading" text="Wähle eine Option aus:"></Text>
        <SolutionTable></SolutionTable>
        <Link to="/praise">
          <Button text="Weiter"></Button>
        </Link> */}
    </div>
  );
}

// const mapStateToProps = (state) => {
//   return {
//     subCategoryDecision: state.subCategoryDecision,
//   };
// };
