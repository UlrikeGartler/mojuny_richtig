import { Text as Text } from "../core-components/Text";
import { Button as Button } from "../core-components/Button";
import React from "react";
import { BrowserRouter, Route, Switch, Link, Redirect } from "react-router-dom";
import firebase from "firebase";

export function WelcomeScreen(props) {
  var storageRef = firebase.storage().ref();

  var spaceRef = storageRef.child("Bilder/Hoffnung/achieve-1822503_1920.jpg");

  storageRef
    .child("Bilder/Hoffnung/achieve-1822503_1920.jpg")
    .getDownloadURL()
    .then(function (url) {
      var test = url;
      //  add this line here:
      document.getElementById("your_img_id").src = test;
    })
    .catch(function (error) {});

  return (
    <div className="screen">
      <Text text="Hallo, Ulrike"></Text>
      <Text text="Viel Spaß beim Arbeiten heute :)"></Text>

      <img height="125" width="50" id="your_img_id" src="" />

      <Link to="/support">
        <Button text="Weiter"></Button>
      </Link>
    </div>
  );
}