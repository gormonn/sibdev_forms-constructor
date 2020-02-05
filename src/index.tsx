import * as React from "react";
import { render } from "react-dom";
import { Button } from "antd/es";
import FieldsConstructor from "./fields-constructor";

import "./styles.css";
import "antd/dist/antd.css";

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Button type="primary">Button</Button>
      <FieldsConstructor />
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
