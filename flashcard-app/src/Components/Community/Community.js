import './Community.css';
import CourseHeader from './CourseHeader';

export default function Community() {
  return (
    <div className="content-container">
      <div className="item-header">
        <p>Cộng đồng</p>
      </div>
      <div>
        <input className="search-bar" placeholder="Tìm kiếm"></input>
      </div>
      <CourseHeader />
    </div>
  )
}