import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Button } from "../core-components/Button";
import { Link } from "react-router-dom";
import firebase from "firebase";
import { loadCategories } from "../redux/actions/mainCategoryActions";
import { useSelector } from "react-redux";
import { useFirestoreConnect } from "react-redux-firebase";
import mainCategoryReducer from "../redux/reducers/mainCategoryReducer";
import rootReducer from "../redux/reducers/rootReducer";

export function MainCategoryScreen(props) {
  // var db = firebase.firestore();
  // var docRef = db.doc("mainCategory/strategy/subCategory/code/");

  // docRef
  //   .get()
  //   .then(function (doc) {
  //     if (doc.exists) {
  //       console.log(doc.data().text);
  //     } else {
  //       console.log("no such document");
  //     }
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });

  const [mainCategory, setMainCategory] = useState([]);

  const ref = firebase.firestore().collection("mainCategory");
  console.log(ref);

  function getMainCategory() {
    ref.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setMainCategory(items);
    });
  }

  // dispatch({
  //   type: "LOAD_CATEGORIES",
  // });

  // function loadCategories() {
  //   return (dispatch, getState, { getFirebase }) => {
  //     const ref = getFirebase().firestore().collection("mainCategory");
  //     ref.onSnapshot((querySnapshot) => {
  //       const items = [];
  //       querySnapshot
  //         .forEach((doc) => {
  //           items.push(doc.data());
  //         })
  //         .then(() => {
  //           dispatch({ type: "LOAD_CATEGORIES" });
  //         });
  //       setMainCategory(items);
  //     });
  //   };
  // }

  useEffect(() => {
    getMainCategory();
  }, []);

  //laden von Kategorien aus der DB

  return (
    <div className="screen">
      <h1>Categories</h1>
      {mainCategory.map((mainCategory) => (
        <div key={mainCategory.id}>
          <h2>{mainCategory.label}</h2>
        </div>
      ))}

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
    mainCategory: () => dispatch(loadCategories()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainCategoryScreen);
