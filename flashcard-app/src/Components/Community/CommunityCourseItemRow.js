import './Community.css';
import CommunityCourseItem from './CommunityCourseItem';

export default function CourseItemRow({courses=[], onCourseItemAdded = f=>f}){
    return (
        <div className="community-course-item-row">
            {courses.map((course, i) => 
                <CommunityCourseItem key={i} course={course} handleAdded={onCourseItemAdded}/>)}
        </div>
    )
}