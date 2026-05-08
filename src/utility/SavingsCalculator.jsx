import React, { useEffect, useState } from 'react'

function SavingsCalculator() {

    const [months, setMonths] = useState(0);
    const [message, setMessage] = useState("");
    const [goal, setGoal] = useState("");
    const [current, setCurrent] = useState("");
    const [contribution, setContribution] = useState("");
    const [bar, setBar] = useState("");

    const calculate = ()=> {
        let savingsGoal = Number(goal);
        let currentSavings = Number(current);
        let monthlyContribution = Number(contribution);

        if(savingsGoal > 0 && monthlyContribution > 0) {

            let remainingAmount = (savingsGoal - currentSavings);
            let monthsLeft = Math.ceil( remainingAmount/ monthlyContribution);

            let progressPercent = Math.min((currentSavings / savingsGoal) * 100);
    
            if (progressPercent >= 0 && progressPercent <= 100) {
                setBar(progressPercent)
            } else if (progressPercent > 100) {
                setBar(100)
            }

            if (currentSavings >= savingsGoal) {
                setMessage("Congratulations, you've reached your goal !")
                setMonths(0)
            } else {
                setMonths(monthsLeft)
                setMessage(`Keep nurturing, you'll be achieving your goal in ${monthsLeft} months.`)
            } 

        } else {
            setMessage("Please enter the details to calculate.")
        } 
    }

  return (
    <div 
      className=' w-full min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat'
    //   style={{backgroundImage: "url(https://res.cloudinary.com/dcfjexbss/image/upload/v1756029923/heating-costs-4164538_w6inqy.jpg)"}}
    >

        <div className=' p-3 min-h-screen w-full flex items-center justify-center backdrop-blur-xs'>
            <div className=' w-full max-w-150 p-3 flex flex-col gap-4 rounded-lg bg-slate-200/65 backdrop-blur-2xs shadow-xl'>

           <div className=' px-2 py-3 flex flex-col items-center gap-2 bg-linear-to-b from-slate-600 to-slate-800 rounded-t-lg text-center text-slate-200'>

                <h1 className=' text-2xl font-semibold pb-1 border-b'>
                    SAVINGS CALCULATOR
                </h1>

                <p className=' text-xs'>
                    Calculate how much money you are saving and how long you have to save to reach your goal.
                </p>
           </div>

            <div className=' px-2 py-3 md:p-3 flex gap-1 rounded-lg bg-slate-200/50'>

               <div className=' w-full p-2 flex flex-col gap-3 items-center rounded-lg bg-slate-400/40'>

                    <input
                        type='number'
                        placeholder='Savings Goal'
                        value={goal}
                        onChange={(e)=> setGoal(e.target.value)}
                        className='numInput w-full text-sm py-1 px-2 bg-slate-200/70 rounded outline-none placeholder:text-xs'
                    />

                    <input
                        type='number'
                        placeholder='Current Savings'
                        value={current}
                        onChange={(e)=> setCurrent(e.target.value)}
                        className='numInput w-full text-sm py-1 px-2 bg-slate-200/70 rounded outline-none placeholder:text-xs'
                    />

                    <input
                        type='number'
                        placeholder='Monthly Contribution'
                        value={contribution}
                        onChange={(e)=> setContribution(e.target.value)}
                        className='numInput w-full text-sm py-1 px-2 bg-slate-200/70 rounded outline-none placeholder:text-xs'
                    />

                    <button onClick={calculate} className=' w-full py-1 px-2 rounded bg-linear-to-b from-slate-500 to-slate-700 text-slate-200 active:scale-[0.98]'>
                        Calculate
                    </button>
               </div>

                <div className=' w-full p-2 flex flex-col items-center justify-center text-xs rounded-r'>
                    
                    <div className=' w-full h-2'>
                        <div 
                          className=" bg-linear-to-b from-lime-400 to-lime-500 rounded-full h-full transition"
                          style={{width: `${bar}%`}}
                        ></div>
                    </div>

                    <p className=' p-1'>
                        {message || "Enter the details to see your progress."}
                    </p>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default SavingsCalculator