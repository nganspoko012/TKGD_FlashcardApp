import './Community.css';
import CommunityCourseItem from './CommunityCourseItem';

export default function CourseItemRow({courses=[]}){
    return (
        <div className="course-item-row">
            {courses.map((course, i) => 
                <CommunityCourseItem course={course}/>)}
        </div>
    )
}