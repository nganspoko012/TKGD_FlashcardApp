import './Courses.css';

export default function CoursesHeader(){
    return (
        <div className="course-header">
            <div><i className="material-icons md-36">lock</i></div>
            <div><span>Tên học phần</span></div>
            <div><span>Tới hạn</span></div>
            <div><span>Chưa học</span></div>
            <div><span>Đã học</span></div>
            <div><span>Tổng</span></div>
        </div>
    )
}