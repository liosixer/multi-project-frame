import "core-js/stable";
import React from "react";
import ReactDOM from "react-dom";
import {
    BrowserRouter as Router,
    Route
} from "react-router-dom";
import "regenerator-runtime/runtime";


const Root = document.getElementById("root");

const Test = () => <div className="test">投标</div>;


console.log(`【当前NODE_ENV】${process.env.NODE_ENV}`)

ReactDOM.render(
    <Router>
        <Route path="/" component={ Test } ></Route>
    </Router>,
    Root
)
