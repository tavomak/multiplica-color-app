import React from 'react';
import ColorCard from './ColorCard'
import { useFetchData } from '../../Context'

const FetchComponent = () => {
  const {
    dataFetch,
    isLoading
  } = useFetchData()

  if (isLoading) return 'Loading'

  console.log(dataFetch)

  return (
    <>
      {
        dataFetch.data.map(d => (
          <ColorCard key={d.id} color={d.color} year={d.year} name={d.name} pantone={d.pantone} />
        ))
      }
    </>
  )
}


export default FetchComponent