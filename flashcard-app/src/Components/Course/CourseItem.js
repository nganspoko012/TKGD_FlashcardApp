import './Courses.css';
import Avatar from '../UserInfo/Avatar.js'
import { Link, useRouteMatch, useHistory } from 'react-router-dom'

export default function CourseItem({ course = {} }) {
    let match = useRouteMatch();
    const history = useHistory();

    const addFlashCard = (e) => {
      e.preventDefault(); // Disable Link tag
      history.push(`add_flashcard/${course.id}`);
    }

    return (
        <Link to={`/learn/${course.id}`} className="course-item">
            <div className="course-item-detail">
                <div className="course-item-name">
                    <i className="material-icons md-24" title={course.isPublic?"Công khai":"Riếng tư"}>{course.isPublic ? "public" : "lock"}</i>
                    <span>{course.name}</span>
                </div>
                <div className="due-detail">
                    <span>{course.dueCards} / </span>
                    <span className="total-cards-detail">&nbsp; {course.totalCards} thẻ tới hạn.</span>
                </div>
            </div>
            <div className="course-item-info-group">
                <div className="my-courses-user">
                    <Avatar letter={course.user.displayName.charAt(0)} color={course.user.avatarColor} size="32px" />
                    <span>{course.user.displayName}</span>
                </div>
                <div className="course-item-button-group">
                    <i className="material-icons md-24 button" title="Thêm"  onClick={addFlashCard}>add</i>
                    <i className="material-icons md-24 button" title="Chỉnh sửa">edit</i>
                    <i className="material-icons md-24 button" title="Xóa">delete</i>
                    <i className="material-icons md-24 button" title="Chi tiết">navigate_next</i>
                </div>
            </div>

        </Link>
    )
}