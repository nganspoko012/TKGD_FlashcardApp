import './Community.css';
import CourseHeader from './CourseHeader';
import displayStyle from '../../Utils/displayStyle';

export default function Community({ display }) {
  return (
    <div className="content-container" style={display === false ? displayStyle : {}}>
      <div className="content-container">
        <div className="item-header">
          <p>Cộng đồng</p>
        </div>
        <div>
          <input className="search-bar" placeholder="Tìm kiếm"></input>
        </div>
        <CourseHeader />
      </div>
    </div>
  )
}