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
  // var db = firebase.firestore();
  // var docRef = db.collection(input);
  // console.log(input);

  // docRef
  //   .get()
  //   .then(function (collection) {
  //     if (collection.exists) {
  //       console.log(collection.data().id);
  //     } else {
  //       console.log("no such collection");
  //     }
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });

  const ref = firebase
    .firestore()
    .collection("mainCategory/strategy/subCategory/ask/1");
  console.log(ref);
  //load data
  function getAskSolutions() {
    ref.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setAskSolutions(items);

      console.log(items);
    });
  }

  // useEffect(() => {
  //   getAskSolutions();
  // }, []);

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