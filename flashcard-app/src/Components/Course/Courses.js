import './Courses.css';
import '../Flashcard/Flashcard.js';
import Flashcard from '../Flashcard/Flashcard.js';
import displayStyle from '../../Utils/displayStyle.js'
export default function Courses({display}){
    return (
        <div className="content-container" style={ display===false?displayStyle:{}}>
            <Flashcard></Flashcard>
        </div>
    )
}