import React from 'react'
import { withKossConsumer } from '../utility/context'
import Loading from '../components/Loading'
import KossList from './KossList';
import KossFilter from './KossFilter'

function KossContainer({ context }) {

  const { loading, koss, hasilFilter } = context;
  console.log('koss',koss);
  console.log('filter',hasilFilter);
  if(loading) {
    return <Loading />
  }

  return (
    <>
    <KossFilter koss={koss} />
    <KossList koss={hasilFilter}/>
    </>
  )
}

export default withKossConsumer(KossContainer);
