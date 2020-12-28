import './Flashcard.css';
import Fields from './Fields.js'

export default function Flashcard({flashcard, flip, flashcardClick}) {
    return (
        <div className="flashcard" onClick={flashcardClick}>
            <div className={flip===false?"flashcard-wrapper":"flashcard-wrapper flip"}>
                <Fields style="flashcard-front" fields={flashcard.frontFields}></Fields>
                <Fields style="flashcard-back" fields={flashcard.backFields}></Fields>
            </div>
        </div>
    )
}