import './Flashcard.css';
import Fields from './Fields.js'

export default function Flashcard({ flashcard = [], flip = false, flashcardClick = f => f }) {
    return (
        <div className="flashcard" onClick={flashcardClick}>
            <div className={flip === false ? "flashcard-wrapper" : "flashcard-wrapper flip"}>
                <div className="prev-button"><i className="material-icons md-48">arrow_back_ios</i></div>
                <div className="next-button"><i className="material-icons md-48">arrow_back_ios</i></div>
                <Fields style="flashcard-front" fields={flashcard.frontFields}></Fields>
                <Fields style="flashcard-back" fields={flashcard.backFields}></Fields>
            </div>
        </div>
    )
}