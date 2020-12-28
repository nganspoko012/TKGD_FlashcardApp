import '../style.css';
import Home from './Home/Home.js';
import Community from './Community/Community.js';

import { Switch, Route } from "react-router-dom";

export default function MainContent({ display }) {
    return (
        <Switch>
            <Route path="/course">
                <Home display={display}/>
            </Route>
            <Route path="/community">
                <Community display={display}/>
            </Route>
            <Route path="/">
                <Home display={display}/>
            </Route>
        </Switch>
    )
}