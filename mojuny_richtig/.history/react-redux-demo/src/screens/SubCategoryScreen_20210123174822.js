import firebase from "firebase";
import { BrowserRouter, Route, Switch, Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import React, { useState, useEffect } from "react";
import { Button } from "../core-components/Button";
import {
  clickOnASK,
  clickOnCODE,
  clickOnERROR,
  clickOnGENERAL,
  clickOnLEARN,
  clickOnCONCEPT,
} from "../redux/actions/subCategoryActions";
import { clickCODE } from "../redux/actions/subCategoryTypes";

export function SubCategoryScreen(props) {
  //local state
  const [subCategory, setSubCategory] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  // const [mainCategoryDecision, setIsLoggedIn] = useState(false);

  // if (decsion === 1){
  //   load ask/code
  // }
  // else
  //   load concentration/stress

  //  let input = "";

  // if (props.mainCategoryDecision === 1) {
  //   render ask/code in html
  // //   input = "mainCategory/strategy/subCategory";
  // // } else {
  // //   input = "mainCategory/motivation/subCategory";
  // render conc/stress in html
  // // }

  // const ref = firebase
  //   .firestore()
  //   // .collection("mainCategory/strategy/subCategory");
  //   .collection("mainCategory/strategy/subCategory");

  // const db = firebase.firestore();
  // db.collection(input)
  //   .get()
  //   .then(function (querySnapshot) {
  //     const items = [];
  //     querySnapshot.forEach(function (doc) {
  //       items.push(doc.data());
  //       // console.log(doc.label, " => ", doc.data());
  //     });
  //     setSubCategory(items);
  //   });

  // function getSubCategory() {
  //   ref.onSnapshot((querySnapshot) => {
  //     const items = [];
  //     querySnapshot.forEach((doc) => {
  //       items.push(doc.data());
  //     });
  //     setSubCategory(items);
  //   });
  // }

  // useEffect(() => {
  //   getSubCategory();
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
      <label>Bitte konkretisiere deinen Unterstützungsbereich: </label>
      <br></br>
      <Link to="/solution">{renderAuthButton()}</Link>
      {/* <Link to="/solution">
      <button onClick={props.clickOnASK}>Ask</button>
    </Link>
    <Link to="/solution">
      <button onClick={props.clickOnCODE}>Code</button>
    </Link>
    <br></br> */}

      {/* {subCategory.map((subCategory) => (
        <div key={subCategory.id}>
          <Button text={subCategory.label}></Button>
        </div>
      ))} */}

      {/* <label>Decision: {props.mainCategoryDecision}</label> */}

      {/* <h2>Number of cakes - {props.numOfStrategies}</h2>
      <br></br>
      <Link to="/subCategory">
        <Button
          text={props.numOfStrategies}
          // function={props.loadCategories}
        ></Button>
      </Link> */}
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

export default connect(mapStateToProps, mapDispatchToProps)(SubCategoryScreen);
