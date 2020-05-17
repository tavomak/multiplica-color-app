import React from 'react';
import ColorCard from './ColorCard'
import { useFetchData } from '../../Context'

const FetchComponent = () => {
  const {
    dataFetch,
    isLoading
  } = useFetchData()

  if (isLoading) return 'Loading'
  return (
    <>
      {
        dataFetch.data.map(d => (
          <ColorCard key={d.id} color={d.color} year={d.year} name={d.name} pantone={d.pantone_value} />
        ))
      }
    </>
  )
}


export default FetchComponent