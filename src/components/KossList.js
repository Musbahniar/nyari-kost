import React from 'react'
import Kos from './Kos'


const KossList = ({ koss }) => {
  if(koss.length === 0) {
    return (
      <div className="empty-search">
        <h3>Tidak ditemukan data yang sesuai dengan parameter</h3>
      </div>
    )
  }
  // console.log(koss);

  return (
    <section className="kosslist">
      <div className="kosslist-center">
        {koss.map(item => {
          return <Kos key={item.id} kos={item} />
        })}
      </div>    
    </section>
  )
}

export default KossList
