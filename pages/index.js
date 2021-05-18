import React from 'react'

import app from '../src/utils/app'
import BannerSlider from '../src/components/BannerSlider'
import MovieList from '../src/components/MovieList'

const Home = () => {
  return (
    <>
      <main className="main">
        <BannerSlider />
        <MovieList />
      </main>
    </>
  )
}

export default Home
