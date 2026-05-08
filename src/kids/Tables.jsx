import React, { useState } from 'react'

function Tables() {
    const [num, setNum] = useState("");

    const multiplier = [1,2,3,4,5,6,7,8,9,10];

    function handleChange(e) {
        const val = e.target.value

        setNum(val === "" ? "" : Number(val));
    }

  return (
    <div className=' min-h-screen p-3 pt-15 flex items-start justify-center bg-linear-to-b from-cyan-800 to-cyan-900'>

        <div className=' p-5 w-full max-w-100 flex flex-col items-center gap-5 rounded-2xl bg-linear-to-b from bg-cyan-200 to-cyan-300 shadow-xl'>

            <h1 className=' text-2xl font-bold border-b-2 text-slate-600'>TABLE GENERATOR</h1>

            <div className=' flex flex-col items-center gap-5'>

                <input
                    type='number'
                    value={num}
                    placeholder='Enter a number (e.g. 2)'
                    onChange={handleChange}
                    className='numInput w-full py-2 px-4 text-xl font-bold text-orange-600 rounded-xl bg-linear-to-b from-cyan-50 to-slate-200 shadow-md focus:outline-none placeholder:text-slate-500 placeholder:font-semibold'
                />

                <div className=' w-full mb-3 p-5 space-y-3 rounded-xl bg-linear-to-b from-cyan-50 to-slate-200 shadow-md'>
                    {num > 0 ? (
                        multiplier.map((m) => (
                            <p key={m} className=' text-xl font-bold border-b border-cyan-300'>
                                <span className=' text-orange-600'>{num}</span> <span className=' text-slate-600'>x</span> <span className=' text-blue-500'>{m}</span> = <span className=' text-orange-500'>{num*m}</span>
                            </p>
                        ))
                    ) : (
                        <p className=' animate-pulse text-red-600'>
                Enter a number to generate it's table.
            </p>
                    ) }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Tables