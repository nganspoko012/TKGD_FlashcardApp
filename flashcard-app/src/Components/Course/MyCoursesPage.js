
import MySearchBar from '../Common/MySearchBar.js'
import './Courses.css'
import CourseItemRow from './CourseItemRow.js';
import { useCourses } from '../Provider/CoursesProvider.js'
import users from '../../Data/users.json';
import { Route, useRouteMatch, Switch } from 'react-router-dom'
import displayStyle from '../../Utils/displayStyle.js'

export default function MyCoursesPage({ display }) {
    const { courses } = useCourses();
    let coursesUsers = courses.map((course) => {
        let user = users.find(user => user.id === course.userId);
        return { ...course, user: user };
    });
    return (
        <div className="content-container" style={display === false ? displayStyle : {}}>
            <div className="my-courses-container">
                <MySearchBar />
                <CourseItemRow courses={coursesUsers} />
            </div>
        </div>
    )
}