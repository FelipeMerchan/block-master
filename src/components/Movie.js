import React from 'react'

const Movie = ({ recommended = false, image, rate }) => {
  return (
    <article className={`movie ${recommended ? 'is-recommended' : ''}`}>
      <figure className="movie-poster">
        <img
          src={image}
          alt=""
          height=""
          width=""
        />
      </figure>
      <div className="movie-rate">
        <i className="icon-star"></i>
        <span>{rate}</span>
      </div>
    </article>
  )
}

export default Movie
