import "core-js/stable";
import React from "react";
import ReactDOM from "react-dom";
import {
    BrowserRouter as Router,
    Route
} from "react-router-dom";
import "regenerator-runtime/runtime";


const Root = document.getElementById("root");

const Test = () => <div className="test">门户网</div>;

const { ENV_CONFIG } = process.env;
console.log(ENV_CONFIG);

ReactDOM.render(
    <Router>
        <Route path="/" component={Test} ></Route>
    </Router>,
    Root
)
