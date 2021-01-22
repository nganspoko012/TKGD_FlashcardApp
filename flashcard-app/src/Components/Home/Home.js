import CourseCard from './CourseCard';
import CommunityCourseCard from './CommunityCourseCard';
import './Home.css';
import Banner from './Banner.js';
import Link from '@material-ui/core/Link';
import { useCourses } from '../../Provider/CoursesProvider.js'
import {getUser} from '../../Provider/LoggedUserProvider';
import {getCoursesUser} from '../../Utils/coursesUser';

export default function Home() {
    const {courses} = useCourses();
    const user = getUser(5);
    const maxNCoursesUsers = 8;
    let coursesUsers = getCoursesUser(courses);
    let personalCourses = coursesUsers.filter(course => course.userId === user.id);
    let communityCourses = coursesUsers.filter(course => course.userId !== user.id);

    
    return (
        <div className="content-container">
            <div className="home-container">
                <Banner />
                <div className="courses-wrapper">
                    <div className="more-info">
                        <div>Học phần của bạn</div>
                        <div className="more-info-link">
                            <Link href="/courses">Xem tất cả</Link>
                            <i className="material-icons md-24">navigate_next</i>
                        </div>
                    </div>
                    <div className="course-container">
                        {personalCourses.slice(0, maxNCoursesUsers).map((course, i) =>
                            <CourseCard key={i} course={course} />)}
                    </div>
                </div>
                <div className="courses-wrapper">
                    <div className="more-info">
                        <div>Học phần mới từ cộng đồng</div>
                        <div className="more-info-link">
                            <Link href="/community">Xem tất cả</Link>
                            <i className="material-icons md-24">navigate_next</i>
                        </div>
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