import './Flashcard.css';
import Fields from './Fields.js'

export default function Flashcard({ flashcard = [], changeFlashcard= f=>f, flip = false, flashcardClick = f => f, currentIndex=0 }) {
    return (
        <div className="flashcard">
            <div className="prev-button" onClick={() => changeFlashcard(currentIndex - 1)}><i className="material-icons md-48">arrow_back_ios</i></div>
            <div onClick={flashcardClick} className={flip === false ? "flashcard-wrapper" : "flashcard-wrapper flip"}>
                <Fields style="flashcard-front" fields={flashcard.frontFields}></Fields>
                <Fields style="flashcard-back" fields={flashcard.backFields}></Fields>
            </div>
            <div className="next-button" onClick={() => changeFlashcard(currentIndex + 1)}><i className="material-icons md-48">arrow_back_ios</i></div>
        </div>
    )
}