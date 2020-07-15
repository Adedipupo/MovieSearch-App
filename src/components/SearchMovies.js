import React,{useState} from "react";

function SearchMovies() {

  const [query, setQuery] = useState('');
  const [movie, setMovie] = useState('');

  const searchMovies = async (e) => {
    e.preventDefault();

    const lur = `https://api.themoviedb.org/3/movie/550?api_key=fa2fa335b93284c5277907e139256806&language=en-US&query=${query}&page=1&include_adult=false`;

    try{
      const res = await fetch(lur);
      const data = await res.json();
      console.log(data);
    }catch(err){
      console.error(err);
    }

  };


  return (
    <form className="form" onSubmit={searchMovies}>
      <label className="label" htmlFor="query">
        Movie Name
      </label>
      <input
        className="input"
        type="text"
        name="query"
        placeholder="i.e. Jurassic Park"
        value={query}
        onChange={(e)=>setQuery(e.target.value)}
      />
      <button className="button" type="submit">
        Search
      </button>
    </form>
  );
}
export default SearchMovies;
