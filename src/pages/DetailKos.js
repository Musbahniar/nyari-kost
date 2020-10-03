import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { KossContext } from '../utility/context'

import Jumbotron from '../components/Jumbotron'
import Banner from '../components/Banner'

export default class DetailKos extends Component {
  constructor (props) {
    super(props);
    // console.log(this.props);
    this.goBack = this.goBack.bind(this);
    this.state = {
      slug: this.props.match.params.slug
    }
  }

  goBack(){
    this.props.history.goBack();
  }
  static contextType = KossContext;

  render() {
    const { getRoomDetail } = this.context;
    const kosDetail = getRoomDetail(this.state.slug);
    // console.log(kosDetail);
    if(!kosDetail) {
      return (
        <div className="error">
          <h3> no such room could be found...</h3>
          <Link to="/" className="btn-primary">
            Kembali ke Beranda
          </Link>
        </div>
      )
    }

    const {
      kota,
      nama,
      keterangan,
      alamat,
      telp,
      harga,
      akses,
      sarapan,
      penghuni,
      fasilitas,
      images
    } = kosDetail;
    const [...defaultImages] = images;

    return (
      <>
        <Jumbotron>
          <Banner title={nama} subtitle={kota}>
            {/* <Link to={this.goBack} className="btn-primary">
              back
            </Link> */}
            <button onClick={this.goBack} className="btn-primary">Go Back</button>
          </Banner>
        </Jumbotron>
        <section className="single-room">
          <div className="single-room-images">
            {defaultImages.map((item, index) => (
              <img key={index} src={item} alt={nama} />
            ))}
          </div>
          <div className="single-room-info">
            <article className="desc">
              <h3>details</h3>
              <p>{keterangan}</p>
            </article>
            <article className="info">
              <h3>info</h3>
              <h6>Harga : Rp {harga} / perbulan</h6>
              <h6>Alamat : {alamat}</h6>
              <h6>Kontak : {telp}</h6>
              <h6>
                Akses :
                {akses ? '24 Jam' : 'Terbatas'}
              </h6>
              <h6>Untuk : {penghuni}</h6>
              <h6>{sarapan && "Gratis Sarapan Pagi"}</h6>
            </article>
          </div>
        </section>
        <section className="room-extras">
          <h6>Fasilitas </h6>
          <ul className="extras">
            {fasilitas.map((item, index) => (
              <li key={index}>- {item}</li>
            ))}
          </ul>
        </section>
      </>
    )
  }
}
