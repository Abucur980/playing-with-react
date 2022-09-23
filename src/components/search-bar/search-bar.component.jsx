// import { Component } from "react";
import "./search-bar.styles.css";

const SearchBar = ({onChangeHandler, placeholder}) => {
    return (
        <input 
            className={`search-box`}
            type='search' 
            placeholder={placeholder} 
            onChange={onChangeHandler}
        />
    )
}

export default SearchBar;