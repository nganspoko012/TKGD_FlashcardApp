import Flashcard from '../Flashcard/Flashcard.js'
import ProgressBar from './ProgressBar.js'
import SeftEvaluateButton from './SeftEvaluateButton.js'
import flashcards from '../../Data/flashcards.json'
import displayStyle from '../../Utils/displayStyle.js'
import { useState } from 'react'

export default function Learn({ display }) {
    let flashcard = flashcards[0];
    const [flip,setFlip] = useState(false);
    function flashcardClick(e){
        setFlip(!flip);
    }
    return (
        <div className="content-container" style={display === false ? displayStyle : {}}>
            <div className="learn-container">
                <ProgressBar />
                <Flashcard flashcard={flashcard} flip={flip} flashcardClick={flashcardClick} />
                <SeftEvaluateButton />
            </div>
        </div>
    )
}