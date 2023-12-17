import React from 'react';
import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg"

import styles from "./Search.module.css"

function Search() {
    return (
        <div className={styles.searchContainer}>
            <input
                type="text"
                placeholder="Search..."
                className={styles.searchInput}
            />
            <button type="button" className={styles.searchButton}>
                <SearchIcon stroke='rgba(255, 255, 255, 0.6)' />
            </button>
        </div>
    )
}

export default Search