import React, { useState } from 'react'

function Tables() {
    const [num, setNum] = useState("");

    const multiplier = [1,2,3,4,5,6,7,8,9,10];

    function handleChange(e) {
        const val = e.target.value

        setNum(val === "" ? "" : Number(val));
    }

  return (
    <div className=' p-3 pt-15 flex items-start justify-center'>

        <div className=' border p-5 w-full max-w-100 flex flex-col items-center gap-5 rounded-xl'>

            <h1 className=' text-2xl font-semibold border-b-2'>TABLE GENERATOR</h1>

            <div className=' flex flex-col items-center gap-5'>

                <input
                    type='number'
                    value={num}
                    placeholder='Enter a number (e.g. 2)'
                    onChange={handleChange}
                    className='numInput border w-full py-2 px-4 text-xl font-semibold rounded focus:outline-none'
                />

                <div className=' border w-full p-5 space-y-2 rounded'>
                    {num > 0 ? (
                        multiplier.map((m) => (
                            <p key={m} className=' text-xl'>
                                {num} x {m} = <span className=' font-semibold'>{num*m}</span>
                            </p>
                        ))
                    ) : (
                        <p>
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