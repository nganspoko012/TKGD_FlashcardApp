import './Courses.css';
import CourseItem from './CourseItem';

export default function CourseItemRow({courses=[]}){
    return (
        <div className="course-item-row">
            {courses.map((course, i) => 
                <CourseItem course={course} key={i}/>)}
        </div>
    )
}