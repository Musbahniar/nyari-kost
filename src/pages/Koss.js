import React from 'react'
import { Link } from "react-router-dom";
import Jumbotron from '../components/Jumbotron'
import Banner from '../components/Banner'
import KossContainer from '../components/KossContainer';

const Koss = () => {
  return (
    <>
      <Jumbotron jumbotron="roomsHero">
        <Banner title="myKost">
        <Link to="/" className="btn-primary">
            kembali ke beranda
          </Link>
        </Banner>
      </Jumbotron>
      <KossContainer />
    </>
  )
}

export default Koss
