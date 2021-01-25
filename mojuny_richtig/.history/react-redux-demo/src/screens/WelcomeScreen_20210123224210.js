import { Text as Text } from "../core-components/Text";
import { Button as Button } from "../core-components/Button";
import React from "react";
import { BrowserRouter, Route, Switch, Link, Redirect } from "react-router-dom";
import firebase from "firebase";

export function WelcomeScreen(props) {
  var storageRef = firebase.storage().ref();

  let image = "";

  //var spaceRef = storageRef.child("Bilder/Hoffnung/achieve-1822503_1920.jpg");

  storageRef
    .child("Bilder/Hoffnung/achieve-1822503_1920.jpg")
    .getDownloadURL()
    .then(function (url) {
      var img = document.getElementById(1);
      img.src = url;
    })
    .catch(function (error) {});

  return (
    <div className="screen">
      <Text text="Hallo, Ulrike"></Text>
      <Text text="Viel Spaß beim Arbeiten heute :)"></Text>

      <img height="125" width="50" id="firstImage" src="" />

      <Link to="/support">
        <Button text="Weiter"></Button>
      </Link>
    </div>
  );
}
