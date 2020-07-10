import React from 'react';

 function SearchMovies() {
    return(
        <form className="form">
            <label htmlFor="query" className="Label">
                <input type="text" name="query" placeholder="Search here ..." />
            </label>
        </form>
    )
}

export default SearchMovies;