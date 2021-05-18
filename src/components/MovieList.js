import React from 'react'

import Movie from './Movie'

const MovieList = () => {
  return (
    <section className="movieList" aria-labelledby="region2" id="container">
      <div className="wrapper">
        <div className="movieList-content">
          <h1 className="movieList-title" id="region2">Todas las películas</h1>
          <div className="movieList-list">
            <Movie
              recommended={false}
              image="//image.tmdb.org/t/p/w220_and_h330_face/ugZW8ocsrfgI95pnQ7wrmKDxIe.jpg"
              rate="10"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default MovieList
