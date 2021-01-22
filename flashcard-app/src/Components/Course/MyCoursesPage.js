import '../Common/Common.css';
import './Courses.css';
import CourseItemRow from './CourseItemRow.js';
import { useCourses } from '../../Provider/CoursesProvider.js'
import { getUser } from '../../Provider/LoggedUserProvider.js';
import SearchBar from "material-ui-search-bar";
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { useState } from 'react';
import AddCourseButton from './AddCourseButton'



export default function MyCoursesPage() {
    const { courses } = useCourses();
    const loggedUser = getUser(5);
    // const maxDisplayCourses = 6;

    let getCoursesUsers = () => courses.filter(course => course.userId === loggedUser.id)
    .map((course) => {
        let creator = getUser(course.creatorId)
        return { ...course, user: creator };
    });

    const [coursesUsers, setCoursesUsers] = useState(getCoursesUsers());

    // const [currentOffset, setOffset] = useState(0);

    // let handleClick = (offset) => {
    //     setOffset(offset);
    //     setCoursesUsers(() => getCoursesUsers().slice(Math.abs(currentOffset - 1) * maxDisplayCourses, maxDisplayCourses));
    // };

    let handleSearchBar = (search) => {
        setCoursesUsers(() => getCoursesUsers().filter(course => course.name.toLowerCase().includes(search)));
    };

    return (
        <div className="content-container">
            <div className="my-courses-container">
                <Breadcrumbs aaria-label="breadcrumb" className="breadcrumb">
                    <Link href="/">
                        Trang chủ
                </Link>
                    <Typography color="textPrimary">Học phần</Typography>
                </Breadcrumbs>

                <SearchBar
                    placeholder="Tìm kiếm học phần"
                    className="search-bar"
                    onChange={handleSearchBar}
                />

                <AddCourseButton></AddCourseButton>

                <CourseItemRow courses={coursesUsers} />

                {/* <Pagination
                    count={getCoursesUsers().length / maxDisplayCourses} shape="rounded"
                    onClick={(e, offset) => handleClick(offset)}
                /> */}
            </div>
        </div>
    )
}