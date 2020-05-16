import React from 'react';
import { useFetchData } from '../../Context'


const ButtonNextPrev = () => {
    const {
        isPage,
        setIsPage
      } = useFetchData()

      const handleChangePage = () => {
        if (isPage === 1) {
          setIsPage(isPage + 1)
        } else {
          setIsPage(1)
        }
      }
    return (
        <div>
            <div>Página actual: {isPage}</div>
            <button onClick={handleChangePage}>siguiente</button>
        </div>
    )
}

export default ButtonNextPrev;