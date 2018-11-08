import React from 'react';

class Header extends React.Component {

    render() {
        return (
            <header>
                <div className="logo">netflixroulette</div>
                <div>FIND YOUR MOVIE </div>

                <div className="search-bar">
                    <div className="movie-name">
                        <input className="movie-title" />
                    </div>
                    <div className="lfloat search-filter" >
                        <span>SEARCH BY</span>
                        <span className="search-by">
                            <a>TITLE</a>
                            <a>GENDER</a>
                        </span>
                    </div>
                    <div className="rfloat">
                           <label> SEARCH </label>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;