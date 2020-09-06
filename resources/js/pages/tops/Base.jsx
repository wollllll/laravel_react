import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import ReactDOM from "react-dom";
import Index from "../../pages/tops/Index";
import NotFound from "../../components/NotFound";

export const Base = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Index}/>
                <Route component={NotFound}/>
            </Switch>
        </Router>
    );
}

if (document.getElementById('app')) {
    ReactDOM.render(<Base/>, document.getElementById('app'));
}

