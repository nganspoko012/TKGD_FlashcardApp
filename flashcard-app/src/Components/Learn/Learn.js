import Flashcard from '../Flashcard/Flashcard.js'
import ProgressBar from './ProgressBar.js'
import SeftEvaluateButton from './SeftEvaluateButton.js'
import LearnComplete from './LearnComplete.js'
import flashcards from '../../Data/flashcards.json'
import displayStyle from '../../Utils/displayStyle.js'
import { useState } from 'react'

export default function Learn({ display }) {
    let flashcard = flashcards[0];
    const [flip,setFlip] = useState(false);
    const [completed, setCompleted] = useState(false)
    function flashcardClick(e){
        setFlip(!flip);
    }
    let showedContent = () => completed?<Flashcard flashcard={flashcard} flip={flip} flashcardClick={flashcardClick} />: <LearnComplete/>;
    return (
        <div className="content-container" style={display === false ? displayStyle : {}}>
            <div className="learn-container" onClick={() => setCompleted(!completed)}>
                <ProgressBar />
                {showedContent()}
                <SeftEvaluateButton show={flip}/>
            </div>
        </div>
    )
}