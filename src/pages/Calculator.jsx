import React, { useState } from 'react'

function Calculator() {
    const [display,setDisplay] = useState("");

    // Buttons
    const handleClick = (value) => {
        setDisplay(display + value);
    }

    // Clear
    const clearDisplay = () => {
        setDisplay("");
    }

    // Cancel
    const cancel = () => {
        setDisplay(display.slice(0, -1))
    }

    // Square root
    const sqRoot = () => {
        setDisplay(Math.sqrt(display).toFixed(3))
    }

    // Result
    const solve = () => {
        let result = eval(display);

        setDisplay(String(result));
    }

  return (
    <div className=' min-h-screen p-3 pt-15 flex items-start justify-center bg-slate-200 dark:bg-black/40 dark:text-slate-100'>

        <div className=' p-3 w-[96%] max-w-90 flex flex-col items-center gap-5 rounded-3xl bg-linear-to-b from-slate-400/70 to-slate-400 dark:bg-linear-to-b dark:from-slate-700/85 dark:to-slate-700/60 shadow-xl'>

            <h1 className=' my-1 text-2xl font-semibold border-b-2'>CALCULATOR</h1>

            <div className=' w-full flex flex-col items-center gap-5'>

                <div className=' w-[96%] py-4 px-2.5 text-4xl font-semibold text-end rounded-lg overflow-x-auto bg-slate-100 text-slate-800'>{display || "0"}</div>

                <div className=' w-full'>

                   <div className='btnDivs'>
                        <button className='calcBtns' onClick={clearDisplay}>AC</button>
                        <button className='calcBtns' onClick={cancel}>C</button>
                        <button className='calcBtns' onClick={()=> handleClick("%")}>%</button>
                        <button className='calcBtns' onClick={()=> handleClick("/")}>/</button>
                    </div>

                    <div className='btnDivs'>
                        <button className='calcBtns' onClick={()=> handleClick("7")}>7</button>
                        <button className='calcBtns' onClick={()=> handleClick("8")}>8</button>
                        <button className='calcBtns' onClick={()=> handleClick("9")}>9</button>
                        <button className='calcBtns' onClick={()=> handleClick("*")}>x</button>
                    </div>

                    <div className='btnDivs'>
                        <button className='calcBtns' onClick={()=> handleClick("4")}>4</button>
                        <button className='calcBtns' onClick={()=> handleClick("5")}>5</button>
                        <button className='calcBtns' onClick={()=> handleClick("6")}>6</button>
                        <button className='calcBtns' onClick={()=> handleClick("-")}>-</button>
                    </div>

                    <div className='btnDivs'>
                        <button className='calcBtns' onClick={()=> handleClick("1")}>1</button>
                        <button className='calcBtns' onClick={()=> handleClick("2")}>2</button>
                        <button className='calcBtns' onClick={()=> handleClick("3")}>3</button>
                        <button className='calcBtns' onClick={()=> handleClick("+")}>+</button>
                    </div>

                    <div className='btnDivs mb-1.5'>
                        <button className='calcBtns' onClick={()=> handleClick("0")}>0</button>
                        <button className='calcBtns' onClick={sqRoot}>&radic;</button>
                        <button className='calcBtns' onClick={()=> handleClick(".")}>.</button>
                        <button id='equalBtn' className='calcBtns' onClick={solve}>=</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Calculator