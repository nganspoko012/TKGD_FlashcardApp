import './Flashcard.css'
import Field from './Field'

export default function Fields({ fields=[], style="" }) {
    return (
        <div className={style}>
            <div className="flashcard-button-group">
                <button className="flashcard-button"><i className="material-icons md-24">star</i></button>
                <button className="flashcard-button"><i className="material-icons md-24">edit</i></button>
                <button className="flashcard-button"><i className="material-icons md-24">more_vert</i></button>
            </div>
            <div className="fields-wrapper">
                {fields.map((field, i) =>
                    <Field key={i} content={field.content}></Field>)}
            </div>
        </div>
    )
}