import './Genre.css'
import {useEffect, useState} from "react";
import axios from "axios";
// import { Link } from "react-router-dom";

function Genre(){
    const [movies, setMovies] = useState([])
    const [genre, setGenre] = useState('28')

    useEffect(() => {
        (async function getMovies() {
            const response = await axios.get(
                `https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_TMDB_KEY}&with_genres=${genre}`
            );
            setMovies(response.data.results);
        })();
    }, [genre]);

    console.log(movies)
    console.log(genre)

    return(
        <div>
            <div className="genre-parent">
                <div className="gdiv1"><button autoFocus onClick={() => setGenre('28')} id="genre">Action</button></div>
                <div className="gdiv2"><button onClick={() => setGenre('10752')} id="genre">War</button></div>
                <div className="gdiv3"><button onClick={() => setGenre('878')} id="genre">Sci-Fi</button></div>
                <div className="gdiv4"><button onClick={() => setGenre('14')} id="genre">Fantasy</button></div>
                <div className="gdiv5"><button onClick={() => setGenre('80')} id="genre">Crime</button></div>
                <div className="gdiv6"><button onClick={() => setGenre('53')} id="genre">Thriller</button></div>
                <div className="gdiv7"><button onClick={() => setGenre('27')} id="genre">Horror</button></div>
                <div className="gdiv8"><button onClick={() => setGenre('35')} id="genre">Comedy</button></div>
                <div className="gdiv9"><button onClick={() => setGenre('16')} id="genre">Animation</button></div>
                <div className="gdiv10"><button onClick={() => setGenre('36')} id="genre">History</button></div>
                <div className="gdiv11"><button onClick={() => setGenre('37')} id="genre">Western</button></div>
                <div className="gdiv12"><button onClick={() => setGenre('9648')} id="genre">Mystery</button></div>
            </div>
            <div className="MovieParent">
                {movies.length > 19 && (
                    <>
                        <div className="div1">
                            {/*<h2>{movies[0].original_title}</h2>*/}
                            {/*<p>{movies[0].release_date}</p><br/>*/}
                            {/*<p>{movies[0].overview}</p>*/}
                            <img id="genrePoster" src={`https://image.tmdb.org/t/p/w500${movies[0].poster_path}`} alt={"poster"}/>
                        </div>

                        <div className="div2">
                            <img id="genrePoster" src={`https://image.tmdb.org/t/p/w500${movies[1].poster_path}`} alt={"poster"}/>
                        </div>

                        <div className="div3">
                            <img id="genrePoster" src={`https://image.tmdb.org/t/p/w500${movies[2].poster_path}`} alt={"poster"}/>
                        </div>

                        <div className="div4">
                            <img id="genrePoster" src={`https://image.tmdb.org/t/p/w500${movies[3].poster_path}`} alt={"poster"}/>
                        </div>

                        <div className="div5">
                            <img id="genrePoster" src={`https://image.tmdb.org/t/p/w500${movies[4].poster_path}`} alt={"poster"}/>
                        </div>

                        <div className="div6">
                            <img id="genrePoster" src={`https://image.tmdb.org/t/p/w500${movies[5].poster_path}`} alt={"poster"}/>
                        </div>

                        <div className="div7">
                            <img id="genrePoster" src={`https://image.tmdb.org/t/p/w500${movies[6].poster_path}`} alt={"poster"}/>
                        </div>

                        <div className="div8">
                            <img id="genrePoster" src={`https://image.tmdb.org/t/p/w500${movies[7].poster_path}`} alt={"poster"}/>
                        </div>

                        <div className="div9">
                            <img id="genrePoster" src={`https://image.tmdb.org/t/p/w500${movies[8].poster_path}`} alt={"poster"}/>
                        </div>

                        <div className="div10">
                            <img id="genrePoster" src={`https://image.tmdb.org/t/p/w500${movies[9].poster_path}`} alt={"poster"}/>
                        </div>

                        <div className="div11">
                            <img id="genrePoster" src={`https://image.tmdb.org/t/p/w500${movies[10].poster_path}`} alt={"poster"}/>
                        </div>

                        <div className="div12">
                            <img id="genrePoster" src={`https://image.tmdb.org/t/p/w500${movies[11].poster_path}`} alt={"poster"}/>
                        </div>

                        <div className="div13">
                            <img id="genrePoster" src={`https://image.tmdb.org/t/p/w500${movies[12].poster_path}`} alt={"poster"}/>
                        </div>

                        <div className="div14">
                            <img id="genrePoster" src={`https://image.tmdb.org/t/p/w500${movies[13].poster_path}`} alt={"poster"}/>
                        </div>

                        <div className="div15">
                            <img id="genrePoster" src={`https://image.tmdb.org/t/p/w500${movies[14].poster_path}`} alt={"poster"}/>
                        </div>

                        <div className="div16">
                            <img id="genrePoster" src={`https://image.tmdb.org/t/p/w500${movies[15].poster_path}`} alt={"poster"}/>
                        </div>

                        <div className="div17">
                            <img id="genrePoster" src={`https://image.tmdb.org/t/p/w500${movies[16].poster_path}`} alt={"poster"}/>
                        </div>

                        <div className="div18">
                            <img id="genrePoster" src={`https://image.tmdb.org/t/p/w500${movies[17].poster_path}`} alt={"poster"}/>
                        </div>

                        <div className="div19">
                            <img id="genrePoster" src={`https://image.tmdb.org/t/p/w500${movies[18].poster_path}`} alt={"poster"}/>
                        </div>

                        <div className="div20">
                            <img id="genrePoster" src={`https://image.tmdb.org/t/p/w500${movies[19].poster_path}`} alt={"poster"}/>
                        </div>
                    </>
                )}
            </div>
        </div>

    )
}

export default Genre;