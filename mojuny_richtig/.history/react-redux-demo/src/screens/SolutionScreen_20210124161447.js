import { Button as Button } from "../core-components/Button.js";
// import { Text as Text } from "../core-components/Text.jsx";
// import { SolutionTable as SolutionTable } from "../sub-components/SolutionTable.jsx";
import firebase from "firebase";
import { connect } from "react-redux";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch, Link, Redirect } from "react-router-dom";
import { takeSolution1, takeSolution2 } from "../redux/actions/solutionActions";
import { clickCODE } from "../redux/actions/subCategoryTypes.js";

export function SolutionScreen(props) {
  return <div></div>;
}

//export default connect(mapStateToProps, mapDispatchToProps)(SolutionScreen);
