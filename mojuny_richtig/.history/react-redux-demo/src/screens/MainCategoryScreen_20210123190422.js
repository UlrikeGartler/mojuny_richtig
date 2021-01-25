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
  //local state
  // const [mainCategory, setMainCategory] = useState([]);

  // const ref = firebase.firestore().collection("mainCategory");

  //load data
  // function getMainCategory() {
  //   ref.onSnapshot((querySnapshot) => {
  //     const items = [];
  //     querySnapshot.forEach((doc) => {
  //       items.push(doc.data());
  //     });
  //     setMainCategory(items);

  //     console.log(items);
  //   });
  // }

  // useEffect(() => {
  //   getMainCategory();
  // }, []);

  return (
    <div className="screen">
      <label>
        Sehr gerne :) <br></br>
        Welche Art von Unterstützung brauchst du?
      </label>
      <br></br>
      <br></br>
      <Link to="/subCategory">
        <button onClick={props.takeStrategy}>Strategie</button>
      </Link>
      <Link to="/subCategory">
        <button onClick={props.takeMotivation}>Motivation</button>
      </Link>
      <h2>Decision- {props.mainCategoryDecision}</h2>
    </div>
  );
}

//global state from store
const mapStateToProps = (state) => {
  return {
    mainCategoryDecisionState: state.mainCategoryDecision,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    takeStrategy: () => dispatch(takeStrategy()),
    takeMotivation: () => dispatch(takeMotivation()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainCategoryScreen);
