import React from 'react';
import ReactDataGrid from '@inovua/reactdatagrid-community';
import '@inovua/reactdatagrid-community/index.css';

const columns = [
    { name: 'id', header: 'ID', maxWidth: 50, defaultFlex: 1 },
    { name: 'nameCourse', header: 'Tên học phần', minWidth: 700, defaultFlex: 1 },
    { name: 'deadline', header: 'Tới hạn', maxWidth: 200, defaultFlex: 1 },
    { name: 'notLearned', header: 'Chưa học', maxWidth: 200, defaultFlex: 1 },
    { name: 'learned', header: 'Đã học', maxWidth: 200, defaultFlex: 1 },
    { name: 'totalCard', header: 'Tổng số', maxWidth: 200, defaultFlex: 1 },
  ];
  
  const gridStyle = { minHeight: 550 };
  
  const headers = [
    { name: "No#", field: "id", sortable: false },
    { name: "Tên học phần", field: "nameCourse", sortable: true },
    { name: "Tới hạn", field: "deadline", sortable: true },
    { name: "Chưa học", field: "notLearned", sortable: false },
    { name: "Đã học", field: "learned", sortable: false },
    { name: "Tổng số", field: "totalCard", sortable: false }
];
  
  const dataSource = [
    { id: 1, nameCourse: 'Animal', deadline: 1, notLearned:20, learned:39, totalCard:59 },
    { id: 2, nameCourse: 'Plant', deadline: 4, notLearned:43, learned:39, totalCard:84},
    { id: 3, nameCourse: 'English Grammar', deadline: 3, notLearned:45, learned:39, totalCard:84},
    { id: 4, nameCourse: 'Ball', deadline: 51, notLearned:12, learned:54, totalCard:66},
    { id: 5, nameCourse: 'Sea', deadline: 5, notLearned:43, learned:54, totalCard:97},
    { id: 6, nameCourse: 'Earth', deadline: 7, notLearned:32, learned:23, totalCard:55},
    { id: 7, nameCourse: 'IELTS', deadline: 12, notLearned:62, learned:154, totalCard:216},
    { id: 8, nameCourse: 'Kanji', deadline: 21, notLearned:34, learned:54, totalCard:88},
    { id: 9, nameCourse: 'Taiwan', deadline: 12, notLearned:64, learned:256, totalCard:320},
    { id: 10, nameCourse: 'Vocabulary for TOEIC', deadline: 23, notLearned:12, learned:54, totalCard:666},
    { id: 11, nameCourse: 'Taiwan', deadline: 12, notLearned:64, learned:256, totalCard:320},
    { id: 12, nameCourse: 'China', deadline: 12, notLearned:64, learned:256, totalCard:320},
    { id: 13, nameCourse: 'America', deadline: 12, notLearned:64, learned:256, totalCard:320},
    { id: 14, nameCourse: 'environment', deadline: 12, notLearned:64, learned:256, totalCard:320},
    { id: 15, nameCourse: 'successful', deadline: 12, notLearned:64, learned:256, totalCard:320},
    { id: 16, nameCourse: 'Kids', deadline: 12, notLearned:64, learned:256, totalCard:320},
  ];
  
  export default function CourseTable(props){
      
      return(
        <ReactDataGrid
        classname="course-table"
        idproperty="id"
        columns={columns}
        dataSource={dataSource}
        style={gridStyle}
        />  
    )
  } 
