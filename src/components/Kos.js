import React from 'react'
import { Link } from 'react-router-dom'

import { memo } from 'react'

const Kos = memo (({ kos }) => {
  const { nama, slug, images, kota } = kos;
  // console.log(nama);
  return (
    <article className="room">
      <div className="img-container">
        <img src={images[0]} alt="kost" />
        <div className="price-top">
          <h6>{kota}</h6>
        </div>
        <Link to={`/koss/${slug}`} className="btn-primary room-link">
          detail
        </Link>
      </div>
  <p className="room-info">{nama}</p>
    </article>
  )
})

export default Kos
