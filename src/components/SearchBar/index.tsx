import "./SearchBar.css";
import SearchIcon from "../Icons/SearchIcon";

export default function SearchBar(): JSX.Element {
    function performSearch() {
        
    }

    return (
            <form 
                className="search_bar_container"
            >
                <button type="submit">
                    <SearchIcon height="32px" width="32px" color="#0ea6fe" />
                </button>

                <input 
                    type="text"
                    name="searchInput"
                    placeholder="Buscar pokemon"
                    autoComplete="off"
                />
            </form>
    )
}