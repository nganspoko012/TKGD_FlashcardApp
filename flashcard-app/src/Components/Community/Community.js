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
        <ul style={{display: 'flex', listStyle: 'none'}}>
          <li style={{paddingLeft: 10}}><button style={{borderRadius: 10}}>English</button></li>
          <li style={{paddingLeft: 10}}><button style={{borderRadius: 10}}>Vocabulary</button></li>
          <li style={{paddingLeft: 10}}><button style={{borderRadius: 10}}>Animal</button></li>
        </ul>
        <CourseHeader />
      </div>
    </div>
  )
}