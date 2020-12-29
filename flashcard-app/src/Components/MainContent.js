import '../style.css';
import Home from './Home/Home.js';
import Community from './Community/Community.js';
import CoursePage from './Course/CoursePage';

import { Switch, Route } from "react-router-dom";
import Learn from './Learn/Learn.js';

export default function MainContent({ display }) {
    return (
        <Switch>
            <Route path="/learn">
                <Learn display={display}/>
            </Route>
            <Route path="/community">
                <Community display={display}/>
            </Route>
            <Route path="/coursePage">
                <CoursePage/>
            </Route>
            <Route path="/">
                <Home display={display}/>
            </Route>
        </Switch>
    )
}