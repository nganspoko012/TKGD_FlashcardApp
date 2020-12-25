import CourseCard from './CourseCard';
import './Home.css';

const course = {name: "600 Essential words for TOEIC",
                isPublic: true,
                dueCards: 100,
                totalCards: 200};

export default function Home() {
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
                <div className="course-container">
                    <CourseCard course ={course}/>
                </div>
                <div className="course-container">
                    course
                </div>
            </div>
        </div>
    )
}