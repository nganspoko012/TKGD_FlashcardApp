import './Community.css';
import displayStyle from '../../Utils/displayStyle';
import MySearchBar from '../Common/MySearchBar.js';
import CommunityCourseItemRow from './CommunityCourseItemRow';
import { useCourses } from '../Provider/CoursesProvider';
import { getUser } from '../Provider/LoggedUserProvider';
import { getCoursesUser } from '../../Utils/coursesUser.js'
import Tag from './Tag'
import { useEffect, useState } from 'react';
import CourseAddedNotify from './CourseAddedNotify';

export default function Community({ display }) {
  const tags = ["English", "Vocabulary", "Animal", "Grammar", "TOEIC", "IELTS", "Japanese", "JLPT", "all"];
  const [selectedTag, setSelectedTag] = useState("");
  const { courses } = useCourses();
  const [addedCourseName, setAddedCourseName] = useState("");
  const [showAddedDialogue, setShowAddedDialogue] = useState(false);

  //prepare data for dis play course user
  let publicCourses = courses.filter(course => course.userId !== getUser(5).id && course.isPublic == true);
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
    if (name != "")
    {
      setAddedCourseName(name);
      setShowAddedDialogue(true);
      handleShowAddedDialogue();
    }
  }

  let handleShowAddedDialogue = () => 
    setTimeout(() => setShowAddedDialogue(false)
                    , 3000);

  return (
    <div className="content-container" style={display === false ? displayStyle : {}}>
      <div className="community-container">
        <div className="search-group-wrapper">
          <div className="search-group">
            <MySearchBar />
            <div className="tag-group">
              {tags.map((tag, id) => <Tag content={tag} key={id} selected={selectedTag} toggleSelectedTag={toggleSelectedTag}></Tag>)}
            </div>
          </div>
        </div>
        <CourseAddedNotify show={showAddedDialogue} addedCourseName={addedCourseName}/>
        <CommunityCourseItemRow courses={filteredPublicCoursesUsers} onCourseItemAdded={onAddCourse} />
      </div>
    </div>
  )
}