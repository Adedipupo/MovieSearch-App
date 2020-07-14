import React from 'react';

export default searchMovies() {
     const searchMovies = async () => {
         console.log("submitting!!!!1")
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