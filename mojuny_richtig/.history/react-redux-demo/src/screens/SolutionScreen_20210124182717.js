import { Button as Button } from "../core-components/Button.js";
// import { Text as Text } from "../core-components/Text.jsx";
// import { SolutionTable as SolutionTable } from "../sub-components/SolutionTable.jsx";
import firebase from "firebase";
import { connect } from "react-redux";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch, Link, Redirect } from "react-router-dom";
import { takeSolution1, takeSolution2 } from "../redux/actions/solutionActions";
import { clickCODE } from "../redux/actions/subCategoryTypes.js";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";

export function SolutionScreen(props) {
  return <div></div>;
}

const mapStateToProps = (state) => {
  console.log(state);
  const mainCategory = state.firestore.ordered.mainCategory;
  return {
    mainCategory: mainCategory,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect((ownProps) => [
    {
      collection: "mainCategory",
      orderBy: ["id", "desc"],
    },
  ])
)(SolutionScreen);

//export default connect(mapStateToProps, mapDispatchToProps)(SolutionScreen);
