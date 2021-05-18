import React from 'react'

const Search = () => {
  return (
    <form className="search" role="search" aria-label="Busca tu película favorita" id="search-form">
      <input className="search-input" type="search" placeholder="Busca tu película favorita" />
      <button className="search-button" aria-label="Buscar">
        <i className="icon-search" aria-hidden="true"></i>
      </button>
    </form>
  )
}

export default Search
