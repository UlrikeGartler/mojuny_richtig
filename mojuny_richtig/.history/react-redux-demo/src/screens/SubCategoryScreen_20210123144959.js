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

export function SubCategoryScreen(props) {
  let input = "";

  if (props.mainCategoryDecision === 1) {
    input = "mainCategory/strategy/subCategory";
  } else {
    input = "mainCategory/motivation/subCategory";
  }

  //load data
  const [subCategory, setSubCategory] = useState([]);

  // const ref = firebase
  //   .firestore()
  //   // .collection("mainCategory/strategy/subCategory");
  //   .collection("mainCategory/strategy/subCategory");

  const db = firebase.firestore();
  db.collection(input)
    .get()
    .then(function (querySnapshot) {
      const items = [];
      querySnapshot.forEach(function (doc) {
        items.push(doc.data());
        // console.log(doc.label, " => ", doc.data());
      });
      setSubCategory(items);
    });

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

  return (
    <div className="screen">
      <h1>SubCategories</h1>
      {subCategory.map((subCategory) => (
        <div key={subCategory.id}>
          <Button text={subCategory.label}></Button>
        </div>
      ))}

      <br></br>
      <label>Decision: {props.mainCategoryDecision}</label>

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

const mapStateToProps = (state) => {
  return {
    mainCategoryDecision: state.mainCategoryDecision,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    clickOnASK: () => dispatch(clickOnASK()),
    clickOnCODE: () => dispatch(clickOnCODE()),
    clickOnCONCEPT: () => dispatch(clickOnCONCEPT()),
    clickOnERROR: () => dispatch(clickOnERROR()),
    clickOnGENERAL: () => dispatch(clickOnGENERAL()),
    clickOnLEARN: () => dispatch(clickOnLEARN()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SubCategoryScreen);
