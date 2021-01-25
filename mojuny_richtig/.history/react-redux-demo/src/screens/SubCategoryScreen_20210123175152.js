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
      <br></br>
      <Link to="/solution">{renderAuthButton()}</Link>
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

export default connect(mapStateToProps, mapDispatchToProps)(SubCategoryScreen);
