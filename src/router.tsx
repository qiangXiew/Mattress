import * as React from "react";
import App from './page/home/App';
import { BrowserRouter as Router, Route } from "react-router-dom";

const BasicExample = () => (
    <Router>
        <div>
            <Route exact path="/" component={App} />
            <Route path="/about" component={About} />
        </div>
    </Router>
);

const About = () => (
    <div>
        <h2>About</h2>
    </div>
);

export default BasicExample;