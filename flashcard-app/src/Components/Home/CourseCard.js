import './CourseCard.css';
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
                <Avatar letter={props.course.user.displayName.charAt(0)} color={props.course.user.avatarColor} size="32px" />
                <span>{props.course.user.displayName}</span>
                <div className="due-info">
                    <span className="small-text">Tới hạn: </span>
                    <span className="due small-text" title="Tới hạn">{props.course.dueCards}</span>
                </div>
            </div>
        </div>

    )
}