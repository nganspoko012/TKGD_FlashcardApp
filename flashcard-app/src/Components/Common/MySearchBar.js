import './MySearchBar.css';

export default function MySearchBar() {
    return (
        <div className="search-bar">
            <i className="material-icons md-36 search-bar-icon">search</i>
            <input type="text" className="search-bar-input" placeholder="Tìm kiếm học phần" />
        </div>
    )
}