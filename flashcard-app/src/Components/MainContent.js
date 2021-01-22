import '../style.css';
import Home from './Home/Home.js';
import Community from './Community/Community.js';
import { Switch, Route, useRouteMatch } from "react-router-dom";
import Learn from './Learn/Learn.js';
import MyCoursesPage from './Course/MyCoursesPage';
import { DueFlashcardProvider } from '../Provider/DueFlashcardsProvider';

export default function MainContent() {
    return (
        <Switch>
            <Route path="/community">
                <Community/>
            </Route>
            <Route path="/courses">
                <MyCoursesPage />
            </Route>
            <Route path="/learn/:courseId">
                <DueFlashcardProvider>
                    <Learn/>
                </DueFlashcardProvider>
            </Route>
            <Route path="/">
                <Home/>
            </Route>
        </Switch>
    )
}