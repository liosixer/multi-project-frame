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


const { ENV_CONFIG, APP_CONFIG } = process.env;
console.log(ENV_CONFIG);
console.log(APP_CONFIG);


ReactDOM.render(
    <Router>
        <Route path="/" component={Test} ></Route>
    </Router>,
    Root
)
