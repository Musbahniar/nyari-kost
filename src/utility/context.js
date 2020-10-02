import React, { Component } from "react";
// import items from '../utility/datakost';
import Client from './Contentful'

// Client.getEntries({
//   content_type: "datakost"
// }).then(response => console.log (response.items))

const KossContext = React.createContext();

export default class KossProvider extends Component {
  state = {
    koss: [],
    hasilFilter:[],
    // sortedKoss: [],
    // featuredKoss: [],
    kotaKoss:[],
    loading: true,
    kota: "all",
    penghuni: "pilih",
    kapasitas: 1,
    harga: 0,
    hargaMin: 0,
    hargaMax: 0,
    hewan: false,
    sarapan: false
  };

  getDataContentFull = async () => {
    try {
        let response = await Client.getEntries({
        content_type: "datakost"
      });
      let koss = this.formatData(response.items);
      // let featuredKoss = koss.filter(kos => kos.isfasilitas === true)
      // let kotaKoss = koss.filter(kos => kos.kota)
      let hargaMax = Math.max(...koss.map(item => item.harga));
      let hargaMin = Math.min(...koss.map(item => item.harga));
      this.setState ({
        koss,
        // featuredKoss,
        hasilFilter: koss,
        // sortedKoss: koss,
        loading: false,
        harga: hargaMax,
        hargaMax,
        hargaMin
      });
    } catch (error) {
      console.log(error);
    }
  }
  

  componentDidMount() {
    this.getDataContentFull();
    // let koss = this.formatData(items);
    // // let featuredKoss = koss.filter(kos => kos.isfasilitas === true)
    // // let kotaKoss = koss.filter(kos => kos.kota)
    // let hargaMax = Math.max(...koss.map(item => item.harga));
    // let hargaMin = Math.min(...koss.map(item => item.harga));
    // this.setState ({
    //   koss,
    //   // featuredKoss,
    //   hasilFilter: koss,
    //   // sortedKoss: koss,
    //   loading: false,
    //   harga: hargaMax,
    //   hargaMax,
    //   hargaMin
    // });
  }

  formatData(items) {
    let tempItems = items.map(item => {
      let id = item.sys.id;
      let images = item.fields.images.map(image => image.fields.file.url);

      let kos = { ...item.fields, images, id };
      return kos;
    })
    return tempItems;
  }

  getKosKota = kota => {
    let tempKoss = [...this.state.koss ];
    const kos = tempKoss.filter(kos => kos.kota === kota);
    return kos;
  }

  getRoomDetail = slug => {
    let tempKoss = [...this.state.koss];
    const kos = tempKoss.find(kos => kos.slug === slug);
    return kos;
  }

  handleChange = event => {
    const target = event.target;
    // const value = target.value;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    // console.log(value, name);

    this.setState (
      {
      [name]: value
      },
      this.FilterKos
    )
  }

  FilterKos = () => {
    let {
      koss,
      kota,
      harga,
      sarapan,
      penghuni,
      hewan
    } = this.state;

    let tempKoss = [...koss];
    // transform values
    harga = parseInt(harga);
    // console.log('harga',harga);

    // filter by kota
    if(kota !== "all") {
      tempKoss = tempKoss.filter(kos => kos.kota === kota);
    }
    
    // filter by penghuni
    if(penghuni !== "pilih") {
      tempKoss = tempKoss.filter(kos => kos.penghuni === penghuni);
    }
    
    // filter by harga
    tempKoss = tempKoss.filter(kos => kos.harga <= harga);
    
    //filter by sarapan
    if(sarapan) {
      tempKoss = tempKoss.filter(kos => kos.sarapan === true);
    }

    // filter by hewan periharaan
    if(hewan) {
      tempKoss = tempKoss.filter(kos => kos.hewan === true);
    }

    this.setState({
      hasilFilter: tempKoss
    })
  }

  render() {
    return (
      <KossContext.Provider
        value={{ 
          ...this.state,
          getKosKota: this.getKosKota,
          getRoomDetail: this.getRoomDetail,
          handleChange: this.handleChange
        }}
      >
        {this.props.children}
      </KossContext.Provider>
    )
  }
}

const KossConsumer = KossContext.Consumer;

export { KossProvider, KossConsumer, KossContext};

export function withKossConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <KossConsumer>
        {value => <Component {...props} context={value} />}
      </KossConsumer>
    )
  }
}
