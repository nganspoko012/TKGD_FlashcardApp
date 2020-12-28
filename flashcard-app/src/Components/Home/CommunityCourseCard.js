import './CourseCard.css'
import Avatar from '../UserInfo/Avatar';

export default function CourseCard(props) {
    return (
        <div className="course-card">
            <div className="course-card-info">
                <span className="course-card-name">{props.course.name}</span>
                <i className="material-icons md-24 button">add</i>
            </div>
            <div className="course-card-user">
                <Avatar letter={props.course.user.displayName.charAt(0)} color={props.course.user.avatarColor} size="32px" />
                <span>{props.course.user.displayName}</span>
                <div className="community-course-info">
                    <div className="star-rating">
                        <span>{props.course.rating}</span>
                        <i className="material-icons md-24 star">star</i>
                    </div>
                    <span className="small-text" title="Tổng số thẻ">Số thẻ: {props.course.totalCards}</span>
                </div>
            </div>
        </div>

    )
}