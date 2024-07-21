import { createContext, useLayoutEffect, useState } from "react";



// create context object
export const CryptoContext = createContext({});

//create the provider component
export const CryptoProvider = ({children}) => {
    const [cryptoData, setCryptoData] = useState();
    const [searchData, setsearchData] = useState();
    const [coinSearch, setCoinSearch] = useState("");
    const [coinData, setCoinData] = useState("");
// eslint-disable-next-line
    const [currency, setCurrency] = useState("usd")
    const [sortBy,setSortBy] = useState("market_cap_desc")
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(250);
    const [perPage, setPerPage] = useState(10);

    // eslint-disable-next-line
    // const getCoinData = async()=>{
    //     try{
    //         const data = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${coinSearch}&order=market_cap_desc&per_page=10&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d`).then(res =>res.json()).then(json => json)
    //         // console.log(data)
    //         setCryptoData(data)

    //     }catch(error){
    //         console.console.log(error);
    //     }
    // }

    const getCoinData = async(coinid)=>{
      
        try{
            // console.log(currency)
            const data = await fetch(`https://api.coingecko.com/api/v3/coins/${coinid}?tickers=false&market_data=true&community_data=false&developer_data=true&sparkline=false`).then(res =>res.json()).then(json => json)
            console.log(data)
            setCoinData(data)

        }catch(error){
            console.console.log(error);
        }
    }

    const getCryptoData = async()=>{
        try{
            // console.log(currency)
            const data = await fetch(`https://api.coingecko.com/api/v3/coins/list`).then(res =>res.json()).then(json => json)
            // console.log(data)
            setTotalPages(data.length)
            
        }catch(error){
            console.log(error);
        }
        try{
            // console.log(currency)
            const data = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&ids=${coinSearch}&order=${sortBy}&per_page=${perPage}&page=${page}&sparkline=false&price_change_percentage=1h%2C24h%2C7d`).then(res =>res.json()).then(json => json)
            // console.log(data)
            setCryptoData(data)

        }catch(error){
            console.console.log(error);
        }
    }
    
    const getSearchResult = async(query)=>{

        try{
            const data = await fetch(`https://api.coingecko.com/api/v3/search?query=${query}`).then(res =>res.json()).then(json => json)
            // console.log(data)
            setsearchData(data.coins)
            

        }catch(error){
            console.console.log(error);
        }
    }
    const resetFunction = () =>{
        setPage(1);
        setCoinSearch("")
    }
    
    useLayoutEffect(() =>{
        getCryptoData()
        // eslint-disable-next-line
    },[coinSearch,currency,sortBy,page,perPage])
    return(
        // eslint-disable-next-line 
        <CryptoContext.Provider value={{cryptoData,searchData,getSearchResult,setCoinSearch,setCurrency,setsearchData, currency,sortBy,setSortBy,page,setPage,totalPages,setTotalPages,resetFunction,perPage,setPerPage,getCoinData,coinData,searchData}}>
            {children}
        </CryptoContext.Provider>
    )
}