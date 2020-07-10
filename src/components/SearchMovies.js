import React from 'react';

 function SearchMovies() {
    return(
        <form className="form">
            <label htmlFor="query" className="Label">Movie name</label>
                <input type="text" className="input" name="query" placeholder=" e.g Jurassic park" />
                <button type="submit" className="button"> Search </button>
            
        </form>
    )
}

export default SearchMovies;