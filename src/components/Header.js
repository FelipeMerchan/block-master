import React from 'react'

import Navigation from './Navigation'
import Search from './Search'

const Header = () => {
  return (
    <header className="header" aria-label="Barra superior y menú del usuario">
      <figure className="header-logo">
        <img
          src="https://res.cloudinary.com/dy1xcx7kw/image/upload/v1621231618/block-master/logo-block-master_2x_iwg5rq.png"
          width="106"
          height="64"
          alt="Logo de Block Master"
          title="Logo de Block Master"
        />
      </figure>
      <Navigation />
      <Search />
    </header>
  )
}

export default Header
