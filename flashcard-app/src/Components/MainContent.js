import '../style.css';
import Home from './Home/Home.js';
import Community from './Community/Community.js';
import { Switch, Route } from "react-router-dom";
import Learn from './Learn/Learn.js';
import MyCoursesPage from './Course/MyCoursesPage';
import CourseAddPage from './Course/CourseAddPage';
import { DueFlashcardProvider } from '../Provider/DueFlashcardsProvider';
import AddFlashCard from '../Components/Flashcard/FLashcard.test';

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
            <Route path="/add_flashcard/:courseId">
               <AddFlashCard />
            </Route>
            <Route path="/">
                <Home/>
            </Route>
        </Switch>
    )
}