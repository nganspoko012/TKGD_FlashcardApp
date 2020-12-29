import Flashcard from '../Flashcard/Flashcard.js'
import ProgressBar from './ProgressBar.js'
import SeftEvaluateButton from './SeftEvaluateButton.js'
import LearnComplete from './LearnComplete.js'
import displayStyle from '../../Utils/displayStyle.js'
import { useState } from 'react'
import { useDueFlashcards } from '../Provider/DueFlashcardsProvider.js'
import { useParams } from 'react-router-dom'

export default function Learn({ display }) {
    let { courseId } = useParams();
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
        learn={learnFlashcard} flip={flip} flashcardClick={flashcardClick} /> : <LearnComplete />;

    if(coursesDueFlashcards.length <= 0) 
        return (<div className="content-container" style={display === false ? displayStyle : {}}>
                    Không có thẻ tới hạn trong học phần này!
            </div>)

    return (
        <div className="content-container" style={display === false ? displayStyle : {}}>
            <div className="learn-container">
                <ProgressBar currentIndex={currentFlashcardIndex} length={coursesDueFlashcards.length} />
                {showedContent()}
                <SeftEvaluateButton show={flip} learn={learnFlashcard} flashcardId={coursesDueFlashcards.length > 0 ? coursesDueFlashcards[currentFlashcardIndex] : null}
                    currentIndex={currentFlashcardIndex} changeFlashcard={changeFlashcard} />
            </div>
        </div>
    )
}