
import React, { Component } from "react";
import defaultBcg from '../images/room-1.jpg'
import Jumbotron from '../components/Jumbotron'
import Banner from '../components/Banner'
import { Link } from "react-router-dom";
import { KossContext } from '../utility/context';

export default class Kotas extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      kota: this.props.match.params.kota,
      defaultBcg: defaultBcg
    }
  }

  static contextType = KossContext;

  render() {
    const { getKosKota } = this.context;
    const kos = getKosKota(this.state.kota);
    // console.log('kos kota:', kos);
    if(kos.length === 0) {
      return (
        <div className="error">
          <h3>Data Kostan Tidak Ditemukan ...</h3>
          <Link to="/" className="btn-primary">
            Beranda
          </Link>
        </div>
      )
    }

    return (
      <>
        <Jumbotron>
          <Banner title={this.state.kota}>
            <Link to="/" className="btn-primary">
              kembali ke beranda
            </Link>
          </Banner>
        </Jumbotron>
        <section className="kosslist">
          <div className="kosslist-center">
            {kos.map(item => {
              return (
                <article className="room" key={item.id}>
                  <div className="img-container">
                    <img src={item.images[0]} alt=""/>
                    <Link to={`/koss/${item.slug}`} className="btn-primary room-link">
                      detail
                    </Link>
                  </div>
              <p className="room-info">{item.nama}</p>
                </article>
              ) 
            })}
          </div>    
        </section>
      </>
    );
  }
}
