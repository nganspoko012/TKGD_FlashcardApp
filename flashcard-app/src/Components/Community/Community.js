import './Community.css';
import '../Common/Common.css'
import CommunityCourseItemRow from './CommunityCourseItemRow';
import { useCourses } from '../../Provider/CoursesProvider';
import { getUser } from '../../Provider/LoggedUserProvider';
import { getCoursesUser } from '../../Utils/coursesUser.js'
import { useEffect, useState } from 'react';
import SearchBar from "material-ui-search-bar";
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import Snackbar from '@material-ui/core/Snackbar';
import React from 'react';
import MuiAlert from '@material-ui/lab/Alert';


function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}


export default function Community() {
  const tags = ["English", "Vocabulary", "Animal", "Grammar", "TOEIC", "IELTS", "Japanese", "JLPT", "all"];
  const { courses } = useCourses();

  //prepare data for display course user
  let publicCourses = courses.filter(course => course.userId !== getUser(5).id && course.isPublic === true);
  let publicCoursesUsers = getCoursesUser(publicCourses);
  const [filteredPublicCoursesUsers, setFilteredPublicCoursesUsers] = useState(publicCoursesUsers);
  const [selectedTag, setSelectedTag] = useState("all");

  useEffect(() =>
  {
    if(selectedTag === "all")
      setFilteredPublicCoursesUsers(publicCoursesUsers);
    else
      setFilteredPublicCoursesUsers(publicCoursesUsers.filter(course => course.tags.includes(selectedTag)));
  },[selectedTag]);

  let toggleSelectedTag = (tag) => {
      setSelectedTag(tag);
  };

  const [open, setOpen] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleSearch = (name) => {
    setFilteredPublicCoursesUsers(publicCoursesUsers
      .filter(course => course.name.toLowerCase()
        .includes(name)));
  };

  const handleClick = (name) => {
    setOpen(true);
    setSuccessMessage(`Thêm thành công ${name} vào học phần của bạn`);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <div className="content-container">
      <div className="community-container">
        <Breadcrumbs aria-label="breadcrumb" className="breadcrumb">
          <Link>Trang chủ</Link>
          <Typography>Cộng đồng</Typography>
        </Breadcrumbs>

        <div className="search-group-wrapper">
          <div className="search-group">
            <SearchBar className="search-bar" placeholder="Tìm kiếm học phần" onChange={handleSearch} />
            <div className="tag-group">
              {tags.map((tag, id) => <Chip label={tag} key={id} onClick={() => toggleSelectedTag(tag)}></Chip>)}
            </div>
          </div>
        </div>

        <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success">
            {successMessage}
          </Alert>
        </Snackbar>
        <CommunityCourseItemRow courses={filteredPublicCoursesUsers} onCourseItemAdded={handleClick} />
      </div>
    </div>
  )
}