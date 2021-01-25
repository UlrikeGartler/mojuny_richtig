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
  const [mainCategory, setMainCategory] = useState([]);

  const ref = firebase.firestore().collection("mainCategory");

  //load data
  function getMainCategory() {
    ref.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setMainCategory(items);
      // setTakeDecision([takeStrategy, takeMotivation]);

      console.log(items);
    });
  }

  useEffect(() => {
    getMainCategory();
  }, []);

  // //set state for different screen
  // const [mainCategoryState, setMainCategoryState] = useState("---");

  // console.log(props);
  // console.log(props.mainCategoryDecision);

  //data from within local state (aready here) , second mainCategory = document
  return (
    <div className="screen">
      <h3>
        Sehr gerne :) <br></br>
        Welche Art von Unterstützung brauchst du?
      </h3>
      {/* <h2>Decision- {props.mainCategoryDecision}</h2> */}

      {/* {mainCategory.map((mainCategory) => (
        <div key={mainCategory.id}>
          <Link to="/subCategory">
            <Button
              text={mainCategory.label}
              // function={() => setMainCategory(mainCategory.id)}
              function={mainCategory.function}
            ></Button>
          </Link>
        </div>
      ))} */}

      <Link to="/subCategory">
        <button onClick={props.takeStrategy}>Strategie</button>
      </Link>
      <Link to="/subCategory">
        <button onClick={props.takeMotivation}>Motivation</button>
      </Link>
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
