import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";
import "./css/styles.css";
import reportWebVitals from "./reportWebVitals";

var config = {
  apiKey: "AIzaSyASeHrl1QRg7Emrf1l5tBKd8mwka3Jkk9Y",
  authDomain: "mojuny-54bad.firebaseapp.com",
  projectId: "mojuny-54bad",
  storageBucket: "mojuny-54bad.appspot.com",
  messagingSenderId: "334786459023",
  appId: "1:334786459023:web:a2d18b47b02d2b8a1287fa",
  measurementId: "G-8WDZB8F1BT",
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

ReactDOM.render(
  <App />,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
