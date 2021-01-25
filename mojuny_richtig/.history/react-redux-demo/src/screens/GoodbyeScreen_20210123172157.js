import { Text as Text } from "../core-components/Text.jsx";
import { Button as Button } from "../core-components/Button.jsx";
import React from "react";
import { BrowserRouter, Route, Switch, Link, Redirect } from "react-router-dom";

export class GoodbyeScreen extends React.Component {
  render() {
    return (
      <div className="screen">
        <Text text="Schönen Feierabend, "> </Text>
        <Text text="_____________ !"> </Text>
        <Button text="Logout"></Button>
      </div>
    );
  }
}
