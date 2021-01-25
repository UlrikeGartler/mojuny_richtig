import { Text as Text } from "../core-components/Text";
import { Button as Button } from "../core-components/Button";
import React from "react";
import { BrowserRouter, Route, Switch, Link, Redirect } from "react-router-dom";
import firebase from "firebase";

export function WelcomeScreen(props) {
  firebase.storage().ref("Bilder/Hoffnung/...");
  return (
    <div className="screen">
      <Text text="Hallo, Ulrike"></Text>
      <Text text="Viel Spaß beim Arbeiten heute :)"></Text>

      <Link to="/support">
        <Button text="Weiter"></Button>
      </Link>
    </div>
  );
}
