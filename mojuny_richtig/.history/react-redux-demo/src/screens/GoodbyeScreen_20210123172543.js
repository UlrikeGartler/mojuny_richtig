import { Text as Text } from "../core-components/Text.js";
import { Button as Button } from "../core-components/Button.js";
import React from "react";
import { BrowserRouter, Route, Switch, Link, Redirect } from "react-router-dom";

export function GoodbyeScreen(props) {
  return (
    <div className="screen">
      <Text text="Schönen Feierabend, "> </Text>
      <Text text="_____________ !"> </Text>
      <Button text="Logout"></Button>
    </div>
  );
}
