import React from 'react'

import PrimaryButton from './PrimaryButton'

const Banner = ({ movieName, imageMobile, imageTablet, imageDesktop }) => {
  return (
    <article className="banner">
      <figure className="banner-cover">
        <picture>
          <source
            srcSet={imageDesktop}
            media="(min-width: 1023px)"
          />
          <source
            srcSet={imageTablet}
            media="(min-width: 767px)"
          />
          <img
            src={imageMobile}
            alt={movieName}
            title={movieName}
            width="1200"
            height="310"
          />
        </picture>
      </figure>
      <div className="banner-buttonWrapper">
        <PrimaryButton
          label="Ver ahora"
          icon="icon-play"
          content="Ver ahora"
        />
        <PrimaryButton
          variant={true}
          label="Ver después"
          icon="icon-plus"
          content="Ver después"
        />
      </div>
    </article>
  )
}

export default Banner
