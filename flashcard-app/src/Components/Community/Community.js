import './Community.css';
import displayStyle from '../../Utils/displayStyle';
import MySearchBar from '../Common/MySearchBar.js';
import CommunityCourseItemRow from './CommunityCourseItemRow';
import { useCourses } from '../Provider/CoursesProvider';
import { getUser } from '../Provider/LoggedUserProvider';
import { getCoursesUser } from '../../Utils/coursesUser.js'
import Tag from './Tag'
import { useEffect, useState } from 'react';

export default function Community({ display }) {
  const tags = ["English", "Vocabulary", "Animal", "Grammar", "TOEIC", "IELTS", "Japanese", "JLPT", "more...", "clear"];
  const [selectedTag, setSelectedTag] = useState("");
  const [addedItem, setAddedItem] = useState(false);
  const { courses } = useCourses();
  let publicCourses = courses.filter(course => course.userId !== getUser(5).id && course.isPublic == true);
  let publicCoursesUsers = getCoursesUser(publicCourses);
  let toggleSelectedTag = (tag) => {
    setSelectedTag(tag);
  };
  let filteredPublicCoursesUsers = publicCoursesUsers;
  if (selectedTag !== "" && selectedTag !== "...more")
    filteredPublicCoursesUsers = publicCoursesUsers.filter(course => course.tags.includes(selectedTag));

  if (selectedTag === "clear")
    filteredPublicCoursesUsers = publicCoursesUsers;

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

        <CommunityCourseItemRow courses={filteredPublicCoursesUsers} />
      </div>
    </div>
  )
}