import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Button } from "../core-components/Button";
import { Link } from "react-router-dom";
import firebase from "firebase";
import {
  takeMotivation,
  takeStrategy,
} from "../redux/actions/mainCategoryActions";

export function MainCategoryScreen(props) {
  console.log(props);

  return (
    <div className="screen">
      {/* <h2>Decision- {props.mainCategoryDecision}</h2> */}
      <label>
        Sehr gerne :) <br></br>
        Welche Art von Unterstützung brauchst du?
      </label>
      <br></br>
      <br></br>
      <Link to="/subCategory">
        <Button text="Strategien" function={props.takeStrategy}></Button>
      </Link>
      <Link to="/subCategory">
        <Button text="Motivation" function={props.takeMotivation}></Button>
      </Link>
    </div>
  );
}

//global state from store
const mapStateToProps = (state) => {
  return {
    mainCategoryDecision: state.main.mainCategoryDecision,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    takeStrategy: () => dispatch(takeStrategy()),
    takeMotivation: () => dispatch(takeMotivation()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainCategoryScreen);
