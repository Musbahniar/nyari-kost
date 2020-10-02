import React from 'react'
import { Link } from 'react-router-dom'
import Jumbotron from '../components/Jumbotron'
import Banner from '../components/Banner'

const Error = () => {
  return (
    <>
      <Jumbotron>
        <Banner
          title="404"
          subtitle="Halaman yang dicari tidak ditemukan"
        >
          <Link to="/" className="btn-primary">back</Link>
        </Banner>
      </Jumbotron>
    </>
  )
}

export default Error
