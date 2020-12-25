import './SearchBar.css';

export default function SearchBar(){
    return (
        <div class="search-bar">
            <i class="material-icons md-36">search</i>
            <input type="text" class="search-bar-input" placeholder="Tìm kiếm học phần"/>
        </div>
    )
}