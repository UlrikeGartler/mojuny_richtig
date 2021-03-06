import React, { useState } from "react";

import { BrowserRouter, Route, Switch, Link, Redirect } from "react-router-dom";
import firebase from "firebase";
import { connect } from "react-redux";
import { buyStrategy } from "../redux/actions/mainCategoryActions";

export function SupportScreen(props) {
  //load mainCategoryCollectionData from database
  //put it into state
  //pass state to store

  return (
    <div className="screen">
      <Link to="/mainCategory">
        <button>next</button>
      </Link>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    buyStrategy: (project) => dispatch(buyStrategy(project)),
  };
};

export default connect(null, mapDispatchToProps)(SupportScreen);
