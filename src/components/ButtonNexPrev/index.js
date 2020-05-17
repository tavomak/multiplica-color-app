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
            <button className={(isPage === 1) ? 'btn btn-secondary ico-next' : 'btn btn-secondary ico-prev'} onClick={handleChangePage}>{(isPage === 1) ? 'Siguiente' : 'Anterior'}</button>
        </div>
    )
}

export default ButtonNextPrev;