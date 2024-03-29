import '../Common/Common.css'
import Flashcard from '../Flashcard/Flashcard.js'
import ProgressBar from './ProgressBar.js'
import SeftEvaluateButton from './SeftEvaluateButton.js'
import LearnComplete from './LearnComplete.js'
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import {useCourses} from '../../Provider/CoursesProvider'
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { useState } from 'react'
import { useDueFlashcards } from '../../Provider/DueFlashcardsProvider.js'
import { useParams } from 'react-router-dom'

export default function Learn() {
    let { courseId } = useParams();
    const {getCourse} = useCourses();
    const { dueFlashcards, learnFlashcard } = useDueFlashcards();
    const coursesDueFlashcards = dueFlashcards.filter(flashcard => flashcard.courseId.toString() === courseId);
    const [flip, setFlip] = useState(false);
    const [currentFlashcardIndex, setCurrentFlashcardIndex] = useState(0);

    function changeFlashcard(i) {
        if (i < 0)
            return;
        else if (i >= coursesDueFlashcards.length) {
            setFlip(false);
            setCompleted(true);
        }
        setFlip(false);
        setCurrentFlashcardIndex(i);
        console.log(currentFlashcardIndex);
    }
    
    const [completed, setCompleted] = useState(false)

    function flashcardClick(e) {
        setFlip(!flip);
        console.log(flip);
    }
    
    let showedContent = () => completed === false ? <Flashcard flashcard={coursesDueFlashcards[currentFlashcardIndex]} currentIndex={currentFlashcardIndex} changeFlashcard={changeFlashcard}
        learn={learnFlashcard} flip={flip} flashcardClick={flashcardClick} /> : <LearnComplete courseId={courseId} />;

    if(coursesDueFlashcards.length <= 0) 
        return (<div className="content-container">
                    Không có thẻ tới hạn trong học phần này!
            </div>)

    return (
        <div className="content-container">
            <div className="learn-container">
            <Breadcrumbs aaria-label="breadcrumb" className="breadcrumb">
                    <Link href="/">
                        Trang chủ
                    </Link>
                    <Link href="/courses">Học phần</Link>
                    <Typography color="textPrimary">{getCourse(Number(courseId)).name}</Typography>
            </Breadcrumbs>

                <ProgressBar currentIndex={currentFlashcardIndex} length={coursesDueFlashcards.length} />
                {showedContent()}
                <SeftEvaluateButton show={flip} learn={learnFlashcard} flashcardId={coursesDueFlashcards.length > 0 ? coursesDueFlashcards[currentFlashcardIndex] : null}
                    currentIndex={currentFlashcardIndex} changeFlashcard={changeFlashcard} />
            </div>
        </div>
    )
}