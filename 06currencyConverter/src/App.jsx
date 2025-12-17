import { useState } from 'react'
import InputBox from './components/inputBox'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {
  const [amount,setAmount]=useState(0);
  const [to,setTo]=useState('usd');
  const [from,setFrom]=useState('usd');
  const [convertedAmount,setConvertedAmount]=useState(0);
  const currencyInfo=useCurrencyInfo(from);
  const options=Object.keys(currencyInfo);

  console.log("Data coming from hook:", currencyInfo); 
  console.log("Options list:", options);



  const convert=()=>{
    setConvertedAmount(amount*currencyInfo[to])
  }
const swap=()=>{
  setTo(from)
  setFrom(to)
  setConvertedAmount(amount)
  setAmount(convertedAmount)
}

const clear=()=>{
  setAmount(0)
  setConvertedAmount(0)
}

  return (
    <><div className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat'
      style={{backgroundImage:`url('https://plus.unsplash.com/premium_photo-1681487767138-ddf2d67b35c1?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y3VycmVuY3klMjBleGNoYW5nZXxlbnwwfHwwfHx8MA%3D%3D')`}}
    >
      <div className='w-full max-w-md bg-white/30 rounded-2xl backdrop-blur-xl mx-auto shadow-lg border-gray-300 p-5' >
          <form onSubmit={(e)=>{
            e.preventDefault();
            convert()}

          }>
            <InputBox
            label="From"
            amount={amount}
            onAmountChange={(amount)=>setAmount(amount)}
            currencyOption={options}
            onCurrencyChange={(currency)=>setFrom(currency)}
            setCurrency={from}
            className='my-1'
            />
            <div className='relative w-full h-0.5'>
            <button
             type='button'
             onClick={()=>swap()}
             className=' bg-blue-400 text-amber-100 absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-mdpx-2 py-0.5'>
              swap
            </button></div>
            <InputBox
            label="To"
            amount={convertedAmount}
            currencyOption={options}
            onCurrencyChange={(currency)=>setTo(currency)}
            setCurrency={to}
            amountDisabled
            className='my-1'
            />
            <div className='w-full flex gap-2'>
            <button 
              type="submit" 
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg shadow-lg"
              >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
              
              <button  
              className='w-15 bg-blue-600 text-white  py-3 rounded-lg shadow-lg'
              onClick={()=>clear()}
              >
                  Clear
                </button>      

             </div>       
          </form>
      </div>
    </div>
      
    </>
  )
}

export default App
