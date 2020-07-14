import React from 'react';

function SearchMovies() {

     const searchMovies = async (e) => {
          e.preventDefault();
         console.log("submitting!!!!1");

         const query = "Jurassic park"; 

         const url = `https://api.themoviedb.org/3/movie/550?
                    api_key=fa2fa335b93284c5277907e139256806ab&language=en-US&query=${query}
                    &page=1&include_adult=false`;

           const res = await fetch(url);
           const data = await (res.json);
           console.log(data);

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