import CourseCard from './CourseCard';
import CommunityCourseCard from './CommunityCourseCard';
import './Home.css';
import displayStyle from '../../Utils/displayStyle'
import Banner from './Banner.js';
import { useCourses } from '../Provider/CoursesProvider.js'
import {getUser} from '../Provider/LoggedUserProvider';
import {getCoursesUser} from '../../Utils/coursesUser';

export default function Home( {display} ) {
    const {courses} = useCourses();
    let user = getUser(5);
    const maxNCoursesUsers = 4;
    let coursesUsers = getCoursesUser(courses);
    let personalCourses = coursesUsers.filter(course => course.userId === user.id);
    let communityCourses = coursesUsers.filter(course => course.userId !== user.id);

    
    return (
        <div className="content-container" style={ display===false?displayStyle:{}}>
            <div className="home-container">
                <Banner />
                <div className="courses-wrapper">
                    <div className="more-info">
                        <div>Học phần của bạn</div>
                        <a className="more-info-link">
                            <span>Xem tất cả</span>
                            <i className="material-icons md-24">navigate_next</i>
                        </a>
                    </div>
                    <div className="course-container">
                        {personalCourses.slice(0, maxNCoursesUsers).map((course, i) =>
                            <CourseCard key={i} course={course} />)}
                    </div>
                </div>
                <div className="courses-wrapper">
                    <div className="more-info">
                        <div>Học phần mới từ cộng đồng</div>
                        <a className="more-info-link">
                            <span>Xem tất cả</span>
                            <i className="material-icons md-24">navigate_next</i>
                        </a>
                    </div>
                    <div className="course-container">
                        {communityCourses.slice(0, maxNCoursesUsers).map((course, i) =>
                            <CommunityCourseCard key={i} course={course} />)}
                    </div>
                </div>

            </div>
        </div>
    )
}