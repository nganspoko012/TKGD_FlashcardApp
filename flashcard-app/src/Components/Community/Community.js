import './Community.css';
import '../Common/Common.css'
import CommunityCourseItemRow from './CommunityCourseItemRow';
import { useCourses } from '../../Provider/CoursesProvider';
import { getUser } from '../../Provider/LoggedUserProvider';
import { getCoursesUser } from '../../Utils/coursesUser.js'
import Tag from './Tag'
import { useState } from 'react';
import CourseAddedNotify from './CourseAddedNotify';
import SearchBar from "material-ui-search-bar";
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';




export default function Community() {
  const tags = ["English", "Vocabulary", "Animal", "Grammar", "TOEIC", "IELTS", "Japanese", "JLPT", "all"];
  const [selectedTag, setSelectedTag] = useState("");
  const { courses } = useCourses();
  const [addedCourseName, setAddedCourseName] = useState("");
  const [showAddedDialogue, setShowAddedDialogue] = useState(false);

  //prepare data for dis play course user
  let publicCourses = courses.filter(course => course.userId !== getUser(5).id && course.isPublic === true);
  let publicCoursesUsers = getCoursesUser(publicCourses);
  let filteredPublicCoursesUsers = publicCoursesUsers;
  if (selectedTag !== "" && selectedTag !== "...more")
    filteredPublicCoursesUsers = publicCoursesUsers.filter(course => course.tags.includes(selectedTag));

  if (selectedTag === "all")
    filteredPublicCoursesUsers = publicCoursesUsers;


  let toggleSelectedTag = (tag) => {
    setSelectedTag(tag);
  };

  let onAddCourse = (name) => {
    if (name !== "") {
      setAddedCourseName(name);
      setShowAddedDialogue(true);
      handleShowAddedDialogue();
    }
  }

  let handleShowAddedDialogue = () =>
    setTimeout(() => setShowAddedDialogue(false)
      , 3000);

  return (
    <div className="content-container">
      <div className="community-container">
        <Breadcrumbs aria-label="breadcrumb" className="breadcrumb">
          <Link>Trang chủ</Link>
          <Typography>Cộng đồng</Typography>
        </Breadcrumbs>

        <div className="search-group-wrapper">
          <div className="search-group">
            <SearchBar className="search-bar" />
            <div className="tag-group">
              {tags.map((tag, id) => <Chip label={tag} key={id} onClick={() => toggleSelectedTag(tag)}></Chip>)}
            </div>
          </div>
        </div>

        <CourseAddedNotify show={showAddedDialogue} addedCourseName={addedCourseName} />
        <CommunityCourseItemRow courses={filteredPublicCoursesUsers} onCourseItemAdded={onAddCourse} />
      </div>
    </div>
  )
}