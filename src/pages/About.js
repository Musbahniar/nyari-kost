import React from 'react'
import { Link } from 'react-router-dom'
import Jumbotron from '../components/Jumbotron'
import Banner from '../components/Banner'

const Error = () => {
  return (
    <>
      <Jumbotron>
        <Banner
          title="About Apps"
          subtitle="Aplikasi untuk memudahkan pencarian data kostan bagi para mahasiswa"
        >
          <Link to="/" className="btn-primary">back</Link>
        </Banner>
      </Jumbotron>
    </>
  )
}

export default Error
