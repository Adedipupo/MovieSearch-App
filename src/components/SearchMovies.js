import React from 'react';

function SearchMovies() {

     const searchMovies = async (e) => {
          e.preventDefault();
         console.log("submitting!!!!1");

         const url = `https://api.themoviedb.org/3/search/movie?api_
                    key=5dcf7f28a88be0edc01bbbde06f024ab&language=en-US&query=${query}
                    &page=1&include_adult=false`;

     }

    return(
        <form className="form" onSubmit={searchMovies}>
            <label className="label" htmlFor="query">Movie Name</label>
            <input className="input" type="text" name="query"
                placeholder="i.e. Jurassic Park" />
            <button className="button" type="submit">Search</button>
        </form>
    )
}
export default SearchMovies;