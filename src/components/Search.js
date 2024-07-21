import React, { useState } from 'react'
import { useContext } from 'react';
import searchIcon from "../assets/search-icon.svg"
import { CryptoContext } from '../context/CryptoContext';
import debounce from 'lodash.debounce';

const SearchInput = ({handleSearch})=>{
  // eslint-disable-next-line 
  const [searchText,setseachText] = useState("");
  let {searchData, setCoinSearch, setsearchData} = useContext(CryptoContext)
  let handleInput = (e) =>{
    e.preventDefault()
    let query = e.target.value
    setseachText(query)
    handleSearch(query)
   
    console.log(query)

  }

  let handleSubmit = (e) =>{
    e.preventDefault()
    handleSearch(searchText)
  }

  const selectionCoin = (coin) => {
    setCoinSearch(coin)
    setseachText("")
    setsearchData()

  }

  return(
    <>
    <form className='w-96 relative flex items-center ml-7 font-nunito' onSubmit={handleSubmit}>
        <input onChange={handleInput} value={searchText} type="text" name="search" className='w-full rounded bg-gray-100 placeholder:text-gray-300 required outline-0 border-transparent pl-2 border focus:border-fuchsia' placeholder='search here...' />
        <button type="submit" className='absolute right-1 cursor-pointer'>
            <img src={searchIcon} alt="serach"className='w-full h-auto' />
        </button>
      
    </form>
    {
      searchText.length > 0 ? 
      <ul className='absolute top-11 right-0 w-96 h-96 rounded overflow-x-hidden py-2 bg-gray-200 bg-opacity-60 backdrop-blur-md scrollvar-thin scrollbar-thumb-gray-100 scrollbar-track-gray-200'>
        {
          searchData ?
          searchData.map(coin =>{return <li className='flex items-center ml-4 cursor-pointer my-2' key={coin.id} onClick={()=>selectionCoin(coin.id)}>
            <img className="w-[1rem] h-[1rem] mx-1.5" src = {coin.thumb} alt={coin.name} />
            <span>{coin.name}</span>
          </li> })
          :<div className='w-full h-full flex justify-center items-center'>
            <div className='w-8 h-8 border-4 border-fuchsia rounded-full border-b-gray-200 animate-spin' role='status'>
              
            </div>
            <span>Searching....</span>
          </div>
        }

      </ul>
      :null
    }
    </>
  )
}


const Search = () => {
   
   
  let {getSearchResult} = useContext(CryptoContext)

  const debouceFunc = debounce(function(val) {
    getSearchResult(val)

  },2000)

  
  return (
    <div className='relative'>
    <SearchInput handleSearch = {debouceFunc}/>
    
    
    </div>
  )
}

export default Search
