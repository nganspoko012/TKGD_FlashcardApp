import '../style.css';
import Home from './Home/Home.js';
import Community from './Community/Community.js';
import CoursePage from './Course/CoursePage';

import { Switch, Route } from "react-router-dom";

export default function MainContent() {
    return (
        <Switch>
            <Route path="/course">
                <Home />
            </Route>
            <Route path="/community">
                <Community />
            </Route>
            <Route path="/coursePage">
                <CoursePage/>
            </Route>
            <Route path="/">
                <Home />
            </Route>
        </Switch>
    )
}