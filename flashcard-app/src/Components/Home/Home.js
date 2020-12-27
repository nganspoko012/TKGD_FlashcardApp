import CourseCard from './CourseCard';
import './Home.css';
import users from '../../Data/users.json';
import courses from '../../Data/courses.json';

export default function Home() {
    let coursesUsers = courses.map((course) => {
        let user = users.find(user => user.id == course.userId);
        return { ...course, user: user };
    });

    return (
        <div className="content-container">
            <div className="home-container">
                <div className="banner-container">
                    <div className="img-container">
                        <img className="banner-img" src="/images/banner1.jpg"></img>
                        <a className="prev">&#10094;</a>
                        <a className="next">&#10095;</a>

                    </div>
                    <div className="slider">
                        <span className="dot"></span>
                        <span className="dot"></span>
                        <span className="dot"></span>
                    </div>
                </div>
                <div className="courses-wrapper">
                    <div className="more-info">
                        <div>Học phần của bạn</div>
                        <a className="more-info-link">
                            <span>Xem tất cả</span>
                            <i className="material-icons md-24">navigate_next</i>
                        </a>
                    </div>
                    <div className="course-container">
                        {coursesUsers.map((course, i) =>
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
                        {coursesUsers.map((course, i) =>
                            <CourseCard key={i} course={course} />)}
                    </div>
                </div>

            </div>
        </div>
    )
}