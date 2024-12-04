import './Detail.css'

function Detail(props) {
    return (
        <div>
            <a>&raquo Go Back</a>
            <img src={`https://image.tmdb.org/t/p/w500${props.poster_path}`} alt={poster} />
            <h1>{props.original_title}</h1>
            <p>{props.release_date}</p>
            <p>{props.overview}</p>
        </div>
    )
}

export default Detail;