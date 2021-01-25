import { Link } from "react-router-dom";
import { connect } from "react-redux";
import React, { useState, useEffect } from "react";
import { Button } from "../core-components/Button";
import { clickOnASK, clickOnCODE } from "../redux/actions/subCategoryActions";
import { compose } from "redux";

export function SubCategoryScreen(props) {
  //local state
  // const [subCategory, setSubCategory] = useState([]);
  // const [isLoggedIn, setIsLoggedIn] = useState(props.mainCategoryDecision);

  // const renderAuthButton = () => {
  //   if (isLoggedIn === 1) {
  //     return (
  //       <div>
  //         <button onClick={props.clickOnASK}>Ask</button>
  //         <button onClick={props.clickOnCODE}>Code</button>
  //       </div>
  //     );
  //   } else {
  //     return (
  //       <div>
  //         <button onClick={props.clickOnASK}>Concentration</button>
  //         <button onClick={props.clickOnCODE}>Stress</button>
  //       </div>
  //     );
  //   }
  // };

  // const loadCode = () => {
  //   props.clickOnCODE();
  // };
  // const loadAsk = () => {
  //   props.clickOnASK();
  // };

  return (
    <div className="screen">
      <h2>Decision- {props.mainCategoryDecision}</h2>
      <label>Bitte konkretisiere deinen Unterstützungsbereich: </label>
      <br></br>
      <br></br>
      {/* <Link to="/solution">{renderAuthButton()}</Link> */}
      <Link to="/solution">
        <button onClick={props.clickOnASK}>Ask</button>
      </Link>
      <Link to="/solution">
        <button onClick={props.clickOnCODE}>Code</button>
      </Link>
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
    clickOnASK: (solutions) => dispatch(clickOnASK(solutions)),
    clickOnCODE: () => dispatch(clickOnCODE()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SubCategoryScreen);
