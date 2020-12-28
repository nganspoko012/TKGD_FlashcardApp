import './SearchBar.css';

export default function SearchBar(){
    return (
        <div className="search-bar">
            <i className="material-icons md-36">search</i>
            <input type="text" className="search-bar-input" placeholder="Tìm kiếm học phần"/>
        </div>
    )
}