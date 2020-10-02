import React from 'react'
import { Link } from "react-router-dom"
import Jumbotron from '../components/Jumbotron'
import Banner from '../components/Banner'
import Layanan from '../components/Layanan'
import Kota from '../components/Kota'

const Home = () => {
  return (
    <>
      <Jumbotron>
        <Banner
          title="Nyari Kost Jadi Gampang"
          subtitle="Cari Kost-an yang tepat buat kamu"
        >
          <Link to="/koss" className="btn-primary">Cari Kost-an</Link>
        </Banner>
      </Jumbotron>
      <Layanan />
      <Kota />
    </>
  )
}

export default Home;