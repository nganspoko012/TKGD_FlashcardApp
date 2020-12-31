import './Community.css';
import Avatar from '../UserInfo/Avatar.js'
import { Link, useRouteMatch } from 'react-router-dom'
import Tag from './Tag'

export default function CourseItem({ course = {}, added = false, toggleAdd = f => f }) {
    let match = useRouteMatch();
    return (
        <div className="wrapper">
            <div className="community-course-item">
                <div className="community-course-detail">
                    <div className="course-item-name">
                        <i className="material-icons md-24">{course.isPublic ? "public" : "lock"}</i>
                        <span>{course.name}</span>
                    </div>
                    <div className="due-detail">
                        <span>{course.totalCards} thẻ</span>
                    </div>
                </div>
                <div className="right-wrapper">
                    <div className="rating">
                        <span>{course.rating}</span>
                        <i className="material-icons md-24 star">star</i>
                    </div>
                    <div className="my-courses-user">
                        <Avatar letter={course.user.displayName.charAt(0)} color={course.user.avatarColor} size="32px" />
                        <span>{course.user.displayName}</span>
                    </div>
                    <div className="community-course-button-group">
                        <i className="material-icons md-36 button" title="thêm vào học phần của bạn" onClick={()=>toggleAdd(true)}>{added === true ? "done" : "add"}</i>
                        <i className="material-icons md-36 button">navigate_next</i>
                    </div>
                </div>

            </div>
            <div className="tag-group">
                {course.tags.map((tag, id) =>
                    <Tag content={tag} key={id}></Tag>)}
            </div>
        </div>
    )
}