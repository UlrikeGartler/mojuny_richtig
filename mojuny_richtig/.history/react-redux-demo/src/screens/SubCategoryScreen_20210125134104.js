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

export function SubCategoryScreen(props) {
  console.log(props.mainCategoryDecision);

  const renderAuthButton = () => {
    if (props.mainCategoryDecision === 1) {
      return (
        <div>
          <Button text="Ask" function={props.clickOnASK}></Button>
          <Button text="Code" function={props.clickOnCODE}></Button>
          <Button text="Concept" function={props.clickOnCONCEPT}></Button>
          <Button text="Error" function={props.clickOnERROR}></Button>
          <Button text="General" function={props.clickOnGENERAL}></Button>
          <Button text="Learn" function={props.clickOnLEARN}></Button>
        </div>
      );
    } else {
      return (
        <div>
          <Button
            text="Concentration"
            function={props.clickOnConcentration}
          ></Button>
          <Button text="Stress" function={props.clickOnStress}></Button>
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
    clickOnCONCEPT: () => dispatch(clickOnCONCEPT()),
    clickOnERROR: () => dispatch(clickOnERROR()),
    clickOnGENERAL: () => dispatch(clickOnGENERAL()),
    clickOnLEARN: () => dispatch(clickOnLEARN()),
    clickOnConcentration: () => dispatch(clickOnConcentration()),
    clickOnStress: () => dispatch(clickOnStress()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SubCategoryScreen);
