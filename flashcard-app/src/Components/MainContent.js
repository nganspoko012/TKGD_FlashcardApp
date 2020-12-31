import '../style.css';
import Home from './Home/Home.js';
import Community from './Community/Community.js';
import CoursePage from './Course/CoursePage';
import { Switch, Route, useRouteMatch } from "react-router-dom";
import Learn from './Learn/Learn.js';
import MyCoursesPage from './Course/MyCoursesPage';
import { DueFlashcardProvider } from './Provider/DueFlashcardsProvider';

export default function MainContent({ display }) {
    let match = useRouteMatch();
    return (
        <Switch>
            <Route path="/community">
                <Community display={display} />
            </Route>
            <Route path="/courses">
                <CoursePage />
            </Route>
            <Route path="/mycourses">
                <MyCoursesPage />
            </Route>
            <Route path="/coursePage">
                <CoursePage />
            </Route>
            <Route path="/learn/:courseId">
                <DueFlashcardProvider>
                    <Learn display={display} />
                </DueFlashcardProvider>
            </Route>
            <Route path="/">
                <Home display={display} />
            </Route>
        </Switch>
    )
}