import React, { useState, useEffect, useContext } from 'react'

const API_URL= 'https://reqres.in/api/colors/'
const ContextFetch = React.createContext()

const FetchProvider = ({ children }) => {
  const [isPage, setIsPage] = useState(1)
  const [dataFetch, setDataFecth] = useState({ data: [] })
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const getFetch = () => {
      setIsLoading(true)
      fetch(`${API_URL}?page=${isPage}`)
      .then(res => res.json())
      .then(data => {
        const dat = data.data;
        setDataFecth({ data: dat })
        setIsLoading(false)
      })
    }

    getFetch()
  }, [isPage])

  const value = {
    dataFetch,
    isLoading,
    isPage,
    setIsPage
  }

  return (
    <ContextFetch.Provider value={value}>
      {children}
    </ContextFetch.Provider>
  )
}

const useFetchData = () => useContext(ContextFetch)

export {
  FetchProvider,
  useFetchData
}