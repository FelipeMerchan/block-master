import React from 'react'

import TextLink from './TextLink'

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul>
        <li>
          <TextLink
            url="/"
            content="Todas"
          />
        </li>
        <li>
          <TextLink
            url="/"
            content="Más valoradas"
          />
        </li>
        <li>
          <TextLink
            url="/"
            content="Menos valoradas"
          />
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
