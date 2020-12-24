import React from 'react';
import ReactDOM from 'react-dom';
import MainNav from './Components/MainNav'
import BodyContent from './Components/BodyContent'

ReactDOM.render(
  <React.StrictMode>
    <MainNav />
    <BodyContent />
    
  </React.StrictMode>,
  document.getElementById('root')
);
