import './Courses.css';
import Avatar from '../UserInfo/Avatar.js'
import { Link, useRouteMatch } from 'react-router-dom'

export default function CourseItem({ course = {} }) {
    let match = useRouteMatch();
    return (
        <Link to={`/learn/${course.id}`} className="course-item">
            <div className="course-item-detail">
                <div className="course-item-name">
                    <i className="material-icons md-24">{course.isPublic ? "public" : "lock"}</i>
                    <span>{course.name}</span>
                </div>
                <div className="due-detail">
                    <span>{course.totalCards} thẻ</span>
                    <span>-</span>
                    <span><span className="due">{course.dueCards}</span> thẻ tới hạn</span>
                </div>
            </div>
            <div className="course-item-info-group">
                <div className="my-courses-user">
                    <Avatar letter={course.user.displayName.charAt(0)} color={course.user.avatarColor} size="32px" />
                    <span>{course.user.displayName}</span>
                </div>
                <div className="course-item-button-group">
                    <i className="material-icons md-24 button">add</i>
                    <i className="material-icons md-24 button">edit</i>
                    <i className="material-icons md-24 button">delete</i>
                    <i className="material-icons md-24 button">navigate_next</i>
                </div>
            </div>

        </Link>
    )
}