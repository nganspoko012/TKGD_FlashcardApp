import './Community.css';
import Avatar from '../UserInfo/Avatar.js'
import Tag from './Tag'
import {  useState } from 'react';
import Rating from '@material-ui/lab/Rating';


export default function ComunityCourseItem({ course = {}, handleAdded = f => f }) {
    const [added, setAdded] = useState(false);
    let onAdded = (e) => {
        e.stopPropagation();
        setAdded(true);
        handleAdded(course.name);
    }

    return (
        <div className="community-course-item-wrapper">
            <div className={added ? "community-course-item added" : "community-course-item"}>
                <div className="community-course-detail">
                    <div className="course-item-name">
                        <span>{course.name}</span>
                    </div>
                    <div className="due-detail">
                        <span>{course.totalCards} thẻ</span>
                    </div>
                </div>
                <div className="right-wrapper">
                    <div className="rating">
                        <span>{course.rating}</span>
                        <Rating name="read-only" value={course.rating} precision={0.5} readOnly size="medium"/>
                    </div>
                    <div className="my-courses-user">
                        <Avatar letter={course.user.displayName.charAt(0)} color={course.user.avatarColor} size="32px" />
                        <span>{course.user.displayName}</span>
                    </div>
                    <div className="community-course-button-group">
                        <i className={added ? "material-icons md-36 completed" : "material-icons md-36 button"}
                            title={added ? "Học phần đã thêm" : "Thêm vào học phần của bạn"}
                            onClick={(e) => onAdded(e)}>{added === true ? "done" : "add"}
                        </i>
                        <i className={added ? "material-icons md-36 completed" : "material-icons md-36 button"} title="Xem chi tiết">navigate_next</i>
                    </div>
                </div>

            </div>
        </div>
    )
}