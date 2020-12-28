import './Flashcard.css';
import Fields from './Fields.js'
import flashcards from '../../Data/flashcards.json';
import { useState } from 'react';

export default function Flashcard() {
    let flashcard = flashcards[0];
    const [flip,setFlip] = useState(false);
    function flashcardClick(e){
        setFlip(!flip);
    }
    return (
        <div className="flashcard" onClick={flashcardClick}>
            <div className={flip===false?"flashcard-wrapper":"flashcard-wrapper flip"}>
                <Fields style="flashcard-front" fields={flashcard.frontFields}></Fields>
                <Fields style="flashcard-back" fields={flashcard.backFields}></Fields>
            </div>
        </div>
    )
}