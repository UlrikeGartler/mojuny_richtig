import React from "react";
import { connect } from "react-redux";
import { Button } from "../core-components/Button";
import { Link } from "react-router-dom";
import firebase from "firebase";
import { buyStrategy } from "../redux/actions/mainCategoryActions";

export function MainCategoryScreen(props) {
  var db = firebase.firestore();
  var docRef = db.doc("mainCategory/strategy/subCategory/code/");

  docRef
    .get()
    .then(function (doc) {
      if (doc.exists) {
        console.log(doc.data().text);
      } else {
        console.log("no such document");
      }
    })
    .catch(function (error) {
      console.log(error);
    });

  return (
    <div className="screen">
      <h2>Number of cakes - {props.numOfStrategies}</h2>
      <br></br>
      <Link to="/subCategory">
        <Button
          text={props.numOfStrategies}
          function={props.buyStrategy}
        ></Button>
      </Link>
    </div>
  );
}

/* <Link to="/next">
   <button onClick={props.buyCake}>next</button>
 </Link>
 <button onClick={props.buyCake}>Buy Cake</button>*/

const mapStateToProps = (state) => {
  return {
    numOfStrategies: state.numOfStrategies,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyStrategy: () => dispatch(buyStrategy()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainCategoryScreen);
