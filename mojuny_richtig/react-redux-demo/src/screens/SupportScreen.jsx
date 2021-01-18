import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch, Link, Redirect } from "react-router-dom";
import firebase from "firebase";
import { connect } from "react-redux";
import { buyStrategy } from "../redux/actions/mainCategoryActions";

export function SupportScreen(props) {
  //load mainCategoryCollectionData from database
  //put it into state
  //pass state to store

  const [mainCategory, setMainCategory] = useState("...");

  //const value = doc.data();

  var db = firebase.firestore();

  db.collection("mainCategory")
    .get()
    .then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        console.log(doc.id, "=>", doc.data());
      });
    });

  useEffect(() => {
    setMainCategory(mainCategory);
  });

  return (
    <div className="screen">
      <button>next</button>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    buyStrategy: (project) => dispatch(buyStrategy(project)),
  };
};

export default connect(null, mapDispatchToProps)(SupportScreen);
