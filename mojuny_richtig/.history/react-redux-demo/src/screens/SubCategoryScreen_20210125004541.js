import { Link } from "react-router-dom";
import { connect } from "react-redux";
import React, { useState, useEffect } from "react";
import { Button } from "../core-components/Button";
import {
  clickOnASK,
  clickOnCODE,
  clickOnConcentration,
  clickOnStress,
} from "../redux/actions/subCategoryActions";
import { compose } from "redux";

export function SubCategoryScreen(props) {
  //local state
  // const [subCategory, setSubCategory] = useState([]);
  // const [isLoggedIn, setIsLoggedIn] = useState(props.mainCategoryDecision);

  const renderAuthButton = () => {
    if (props.mainCategoryDecision === 1) {
      return (
        <div>
          <Button text="Ask" function={props.clickOnASK}></Button>
          <Button text="Code" function={props.clickOnCODE}></Button>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={props.clickOnConcentration}>Concentration</button>
          <button onClick={props.clickOnStress}>Stress</button>
        </div>
      );
    }
  };

  return (
    <div className="screen">
      {/* <h2>Decision- {props.mainCategoryDecision}</h2> */}
      <label>Bitte konkretisiere deinen Unterstützungsbereich: </label>
      <br></br>
      <br></br>
      <Link to="/solution">{renderAuthButton()}</Link>
      {/* <Link to="/solution">
        <button onClick={props.clickOnASK}>Ask</button>
      </Link>
      <Link to="/solution">
        <button onClick={props.clickOnCODE}>Code</button>
      </Link> */}
    </div>
  );
}
//global state from store
const mapStateToProps = (state) => {
  return {
    mainCategoryDecision: state.main.mainCategoryDecision,
    subCategoryDecision: state.sub.subCategoryDecision,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    clickOnASK: () => dispatch(clickOnASK()),
    clickOnCODE: () => dispatch(clickOnCODE()),
    clickOnConcentration: () => dispatch(clickOnConcentration()),
    clickOnStress: () => dispatch(clickOnStress()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SubCategoryScreen);
