import React from 'react';
import { Link } from 'react-router-dom'

class Movie extends React.Component {
    render() {
        return (
            <li className="movie">

                    <div>
                        <div className="movie-poster">
                            <img src="" />
                        </div>
                        <div className="movie-descript">
                            <span>props.movie.title</span>
                            <span>props.movie.release_date</span>
                        </div>
                        <div className="movie-genres">
                        props.movie.genres
                        </div>
                    </div>
            </li>
        );
    }
}

export default Movie;