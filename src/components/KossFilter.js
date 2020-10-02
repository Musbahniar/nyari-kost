import React from 'react'
import { useContext } from 'react'
import { KossContext } from '../utility/context'

import Title from '../components/Title'

// get unique semua data
const getUnique = (items, value) => {
  return [ ...new Set(items.map(item => item[value]))];
}

const KossFilter = ({ koss }) => {
  const context = useContext(KossContext);
  const {
    handleChange,
    kota,
    // kapasitas,
    harga,
    hargaMin,
    hargaMax,
    sarapan,
    hewan,
    penghuni
  } = context

  // get unique kota
  let kotas = getUnique(koss, "kota");
  kotas = ["all", ...kotas];
  // map to jsx
  kotas = kotas.map((item, index) => (
    <option key={index} value={item}>
      {item}
    </option>
  ))
  // console.log(kotas);

  //get unique penghuni
  let penghunis = getUnique(koss, "penghuni");
  penghunis = ["pilih", ...penghunis];
  penghunis = penghunis.map((item, index) => (
    <option key={index} value={item}>
      {item}
    </option>
  ))

  return (
    <section className="filter-container">
      <Title title="Cari Kost-an"></Title>
      <form className="filter-form">
        {/* filter kota */}
        <div className="form-group">
          <label htmlFor="kota">Kota</label>
          <select
            name="kota"
            id="kota"
            onChange={handleChange}
            className="form-control"
            value={kota}
          >
            {kotas}
          </select>
        </div>

        {/* filter penghuni */}
        <div className="form-group">
          <label htmlFor="penghuni">Penghuni</label>
          <select
            name="penghuni"
            id="penghuni"
            onChange={handleChange}
            className="form-control"
            value={penghuni}
          >
          {penghunis} 
          </select>
        </div>

        {/* filter harga */}
        <div className="form-group">
          <label htmlFor="harga">Harga perBulan Rp{harga}</label>
          <input
            type="range"
            name="harga"
            min={hargaMin}
            max={hargaMax}
            id="harga"
            value={harga}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        {/* end filter harga*/}

        {/* tambahan fasilitas */}
        <div className="form-group">
          <div className="single-extra">
            <input
              type="checkbox"
              name="sarapan"
              id="sarapan"
              checked={sarapan}
              onChange={handleChange}
            />
            <label htmlFor="sarapan">Sarapan Pagi</label>
          </div>
          <div className="single-extra">
            <input
              type="checkbox"
              name="hewan"
              id="hewan"
              checked={hewan}
              onChange={handleChange}
            />
            <label htmlFor="hewan">Hewan Peliharaan</label>
          </div>
        </div>
        {/* end tambahan fasilitas */}
      </form>
    </section>
  )
}

export default KossFilter;
