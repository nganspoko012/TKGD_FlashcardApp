import './CourseCard.css'
import Avatar from '../UserInfo/Avatar';

export default function CourseCard(props) {
    return (
        <div className="course-card">
            <div className="course-card-info">
                <span className="course-card-name">{props.course.name}</span>
                <i className="material-icons md-24">{props.course.isPublic? "public" : "lock" }</i>
                <i className="material-icons md-24">more_vert</i>
            </div>
            <div className="course-card-user">
                <Avatar letter="N" color="#9E54FC" size="36px" />
                <span>Ngân Võ</span>
                <div className="due-info">
                    <span className="due">{props.course.dueCards}</span>
                    <span>/{props.course.totalCards}</span>
                </div>
            </div>
        </div>

    )
}