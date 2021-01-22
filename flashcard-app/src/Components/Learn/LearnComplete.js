import './Learn.css'
import { Link } from 'react-router-dom'
import {useEffect} from 'react'
import { useCourses } from '../../Provider/CoursesProvider.js'


export default function LearnComplete({courseId}) {
    const {learnCourse} = useCourses();
    useEffect( () =>
        learnCourse(Number(courseId)));
    return (
        <div className="learn-container" >
            <div className="complete-text">
                <i className="material-icons md-48 completed">done</i>
                <span>Hoàn thành</span>
            </div>
            {/* <div className="learned-detail-group">
                <div className="learned-detail">
                    <span>Khó</span>
                    <span className="hard">3</span>
                </div>
                <div className="learned-detail">
                    <span>Bình thường</span>
                    <span className="normal">5</span>
                </div>
                <div className="learned-detail">
                    <span>Dễ</span>
                    <span className="easy">2</span>
                </div>
            </div> */}
            <Link to='/courses' className="return-link">
                <i className="material-icons md-24">keyboard_backspace</i>
                <span>Về học phần</span>
            </Link>
        </div>
    )
}