import '../style.css';
import Home from './Home/Home.js';

import { Switch, Route } from "react-router-dom";

export default function MainContent() {
    return (
        <Switch>
            <Route path="/course">
                <Home />
            </Route>
            <Route path="/community">
                <Home />
            </Route>
            <Route path="/">
                <Home />
            </Route>
        </Switch>
    )
}