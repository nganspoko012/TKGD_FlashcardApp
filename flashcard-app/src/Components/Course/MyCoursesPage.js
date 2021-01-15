
import MySearchBar from '../Common/MySearchBar.js'
import './Courses.css'
import CourseItemRow from './CourseItemRow.js';
import { useCourses } from '../../Provider/CoursesProvider.js'
import {getUser} from '../../Provider/LoggedUserProvider.js';

export default function MyCoursesPage() {
    const { courses } = useCourses();
    const  loggedUser  = getUser(5);
    let coursesUsers = courses.filter(course => course.userId === loggedUser.id)
                            .map((course) => {
                                let creator = getUser(course.creatorId)
                            return { ...course, user: creator };
                        });

    return (
        <div className="content-container">
            <div className="my-courses-container">
                <MySearchBar />
                <CourseItemRow courses={coursesUsers} />
            </div>
        </div>
    )
}