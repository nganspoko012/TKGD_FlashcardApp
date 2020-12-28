import React from 'react';
import SearchBar from '../Common/SearchBar'

export default function CoursePage(){
    return (
        <div className="content-container">
            <form>
                <div className="search-form">
                    <SearchBar/>
                    <button className="btn-search">Tìm kiếm</button>
                </div>
                <div className="community-course-card">
                    
                </div>
            </form>

        </div>
    )
}