import { Button as Button } from "../core-components/Button.js";
import { Text as Text } from "../core-components/Text.js";
import React from "react";
import { BrowserRouter, Route, Switch, Link, Redirect } from "react-router-dom";

export class PraiseScreen extends React.Component {
  render() {
    return (
      <div className="screen">
        <Text text="Gutes Gelingen beim Ausprobieren der Option"></Text>
        <Text text="______________"></Text>
        <Text text="Toll, dass du dich für eine Handlungsoption entschieden hast :)"></Text>
        <Link to="/goodbye">
          <Button text="Weiter"></Button>
        </Link>
      </div>
    );
  }
}
