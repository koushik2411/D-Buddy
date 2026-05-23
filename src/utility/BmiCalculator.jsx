import { useState } from "react";

function BmiCalculator() {

    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");
    const [display, setDisplay] = useState(null);
    const [remark, setRemark] = useState("");
    const [color, setColor] = useState("");

    const calculateBmi = () => {
        if (height && weight) {
            let h = Number(height)/100;
            let w = Number(weight);

            let result = (w/(h*h));

            setDisplay(result.toFixed(1));

            if (result > 0 && result < 18.5) {
                setRemark("Underweight")
                setColor("text-yellow-500")
            } else if (result >= 18.5 && result <= 24.9) {
                setRemark("Normal")
                setColor("text-green-600")
            } else if (result >= 25.0 && result <= 29.9) {
                setRemark("Overweight")
                setColor("text-amber-500")
            } else if (result >= 30.0 && result <= 34.9) {
                setRemark("Obese II")
                setColor("text-orange-600")
            } else if (result >= 35.0 && result >= 39.9) {
                setRemark("Obese III")
                setColor("text-red-500")
            } else {
                setRemark("Visit a doctor ASAP.")
                setColor("text-red-600")
            }
        } else {
            alert("Enter height and weight to calculate BMI.")
        }
    }

  return (
    <div className=" p-3 pt-15 flex items-start justify-center bg-slate-200 dark:bg-black/40 w-full min-h-screen">

      <div className=" p-1 w-full max-w-100 flex flex-col items-center gap-5 bg-slate-200 text-slate-800 dark:bg-slate-900 dark:text-slate-200 border rounded-2xl shadow-xl">

        <h1 className=' w-full px-2 py-4 text-2xl font-semibold bg-linear-to-b from-slate-600 to-slate-800 rounded-t-2xl text-center text-slate-200'>BMI CALCULATOR</h1>

        <div className=" p-3 w-full flex flex-col gap-3">

          <div className=" flex flex-col gap-1">
            <label>Enter your height</label>
            <input 
                type="number"
                onChange={(e)=> setHeight(e.target.value)}
                placeholder="in cm (e.g. 150cm)"
                className="numInput border p-2 rounded outline-none"           
            />
          </div>

          <div className=" flex flex-col gap-1">
            <label>Enter your weight</label>
            <input
                type="number"
                onChange={(e)=> setWeight(e.target.value)}
                placeholder="in kg (e.g. 50kg)"
                className="numInput border p-2 rounded outline-none"
            />
          </div>

          <button onClick={calculateBmi} className=" mt-3 p-2 bg-linear-to-b from-slate-500 to-slate-700 rounded-lg text-slate-200 active:scale-[0.98]">Calculate BMI</button>

          <div className=" mt-3 w-full flex flex-col items-center gap-1">
            <h1 className={`${color} text-2xl font-bold`}>{display}</h1>
            <h2 className={`${color} text-lg font-semibold`}>{remark}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BmiCalculator;
