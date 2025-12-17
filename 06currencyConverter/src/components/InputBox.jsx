import React,{useId} from "react";
function InputBox({
    label,
    amount,
    onCurrencyChange,
    onAmountChange,
    currencyOption=[],
    setCurrency="usd",
    amountDisabled=false,
    currencyDisabled=false,
    className="",


}){
    const amountInputId=useId()
    return(
    <>
    <div  className={`w-full h-28 flex justify-around p-2 rounded-lg bg-white shadow-stone-400 ${className}`}>
        <div className="w-1/2 h-full ">
           <label className="text-sm text-gray-600" htmlFor={amountInputId}>{label}</label><br />
           <input 
           id={amountInputId}
           className=" text-md text-black mt-3 "
           type="number"
           placeholder="Amount" 
           value={amount}
           disabled={amountDisabled}
           onChange={(e)=>onAmountChange && onAmountChange(Number(e.target.value))}
            />
        </div>
        <div className="w-1/2 h-full text-right">
            <p className="text-sm text-gray-600">Currency</p><br />
            <select 
              className="rounded "
              value={setCurrency}
              disabled={currencyDisabled}
              onChange={(e)=>onCurrencyChange && onCurrencyChange(e.target.value) }
            >
                {currencyOption.map((currency)=>(
                    <option key={currency} value={currency}>{currency}</option>

                ))}
            </select>

        </div>
    </div>
    </>)

}
export default InputBox;