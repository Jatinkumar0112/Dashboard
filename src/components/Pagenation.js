import {useContext,useRef} from 'react'
import submitIcon from '../assets/submit-icon.svg'

import paginationArrow from "../assets/pagination-arrow.svg";
import { CryptoContext } from '../context/CryptoContext';

const PerPage = () =>{
    const {setPerPage} = useContext(CryptoContext)
    const inputRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        let val = inputRef.current.value;
        if(val !== 0){
            setPerPage(val);
        }
    }

    return(
         <form className='relative flex items-center font-nunito mr-12' onSubmit={handleSubmit} >
    <label htmlFor='perpage'>Per Page</label>
    <input type='number' min={1} max={250} name='currency' ref={inputRef} placeholder='10' className='w-16 rounded bg-gray-200 placeholder:text-gray-200 pl-2 required outline-0 border border-transparent focus:border-fuchsia' />
    <button type='submit' className='ml-1 cursor-pointer'>
      <img src={submitIcon} alt='submit' />
    </button>
   </form>)
}

const Pagination = () =>{

   
    let {page, setPage, totalPages,perPage,cryptoData} = useContext(CryptoContext);

    const TotalNumber = Math.ceil(totalPages/perPage)
    console.log(TotalNumber);

    
    const next = () =>{
        if(page === TotalNumber){
            return null;
        }else{
            setPage(page + 1);
        }
    }

    const prev = () =>{
        if(page === 1){
            return null;
        }else{
            setPage(page - 1);
        }
    }

    const multiStepNext = () =>{
        if(page+3 >= TotalNumber){
            setPage(TotalNumber - 1);
        }else{
            setPage(page + 3)
        }
    }
    const multiStepPrev = () =>{
        if(page-3 <= 1){
            setPage(TotalNumber + 1);
        }else{
            setPage(page - 2);
        }
    }

   if(cryptoData && cryptoData.length >= perPage){

    return(
        <div className="flex items-center justify-end text-sm">
            <PerPage/>
            <ul className="flex items-center justify-end text-sm">
                <li className="flex item-center">
                    <button className="outline-0 hover:text-fuchsia w-8" onClick={prev}>
                        <img className='w-full h-auto rotate-180' src={paginationArrow} alt="left"/>
                    </button>
                </li>
                {
                    (page +1 === TotalNumber || page === TotalNumber)?
                    <li><button onClick={multiStepPrev} className="outline-0 hover:text-fuchsia rounded-full w-8 flex items-center justify-center text-lg">...</button></li>
                    :null
                }
                {
                    (page -1 !== 0)?
                    <li><button onClick={prev} className="outline-0 hover:text-fuchsia rounded-full w-8 flex items-center justify-center text-lg bg-gray-200 mx-1.5">{page-1}</button></li>
                    :null
                }
                <li><button disabled className="outline-0 rounded-full w-8 flex items-center justify-center text-lg bg-fuchsia text-gray-300 mx-1.5">{page}</button></li>
                {
                    ( page+1 !== TotalNumber && page !== TotalNumber)?
                    <li><button onClick={next} className="outline-0 hover:text-fuchsia rounded-full w-8 flex items-center justify-center text-lg">{page + 1}</button></li>
                    :null
                }
               
                
                {
                    page+1 !== TotalNumber && page !== TotalNumber?(
                        <li><button onClick={multiStepNext} className="outline-0 hover:text-fuchsia rounded-full w-8 flex items-center justify-center text-lg">...</button></li>

                    ):null
                }
                {page !== TotalNumber?(
                    <li>
                    <button className="outline-0 rounded-full w-8 flex items-center justify-center text-lg bg-fuchsia text-gray-300 mx-1.5" onClick={()=>setPage(TotalNumber)}>
                            {TotalNumber}
                        </button>
                    </li>
                ):null}
                <li>
                    <button className="outline-0 hover:text-fuchsia w-8" onClick={next}>
                            <img className='w-full h-auto' src={paginationArrow} alt="right"/>
                        </button>
                    </li>
            </ul>
        </div>
    )
   }else{
    return null;
   }
}
export default Pagination;