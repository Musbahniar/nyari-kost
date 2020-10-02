import React, { Component } from "react";
import { Link } from "react-router-dom";

import Judul from "./Judul";
import kotaBandung from '../images/bandung.png'
import kotaJakarta from '../images/jakarta.png'
import kotaJogja from '../images/jogja.png'

export default class FeaturedRooms extends Component {
  state = {
    kota: [
      {
        image: <img src={kotaBandung} alt="Kota Bandung" />,
        cari: <Link to="/kota/bandung" className="btn-primary room-link">Mulai Cari</Link>,
        namakota: "Bandung"
      },
      {
        image: <img src={kotaJakarta} alt="Kota Jakarata" />,
        cari: <Link to="/kota/jakarta" className="btn-primary room-link">Mulai Cari</Link>,
        namakota: "Jakarta"
      },
      {
        image: <img src={kotaJogja} alt="Kota Jakarata" />,
        cari: <Link to="/kota/jogja" className="btn-primary room-link">Mulai Cari</Link>,
        namakota: "Yogyakarta"
      }
    ]
  }
  render() {
    return (
      <section className="featured-rooms">
        <Judul judul="Cari di Kota" />
        <div className="featured-rooms-center">
          {this.state.kota.map(item => {
            return (
              <article key={item.namakota} className="room">
                <div className="img-container">
                  {item.image}
                  {item.cari}
                </div>
                <p className="room-info">{item.namakota}</p>
              </article>
            )
          })}
        </div>
      </section>
    );
  }
}
