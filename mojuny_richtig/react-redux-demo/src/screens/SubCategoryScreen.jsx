import firebase from "firebase";
import { BrowserRouter, Route, Switch, Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import React, { useState, useEffect } from "react";

export function SubCategoryScreen(props) {
  //get necessary state from store
  const [mainCategoryState, setMainCategoryState] = useState([]);

  //load data
  const [subCategory, setSubCategory] = useState([]);

  const ref = firebase
    .firestore()
    .collection("mainCategory/motivation/subCategory");
  // console.log(ref);

  function getSubCategory() {
    ref.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setSubCategory(items);
    });
  }

  useEffect(() => {
    getSubCategory();
  }, []);

  return (
    <div className="screen">
      <h1>SubCategories</h1>
      {subCategory.map((subCategory) => (
        <div key={subCategory.id}>
          <h2>{subCategory.label}</h2>
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

// const mapStateToProps = (state) => {
//   return {
//     projects: state.project.projects,
//   };
// };

export default connect()(SubCategoryScreen);
