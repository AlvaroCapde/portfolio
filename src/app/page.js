'use client'
import {useCallback, useState} from "react";
import {LoadingScreen} from "@/Components/LoadingScreen";

export default function Home() {
    const [loading, setLoading] = useState(false)
    const [result, setResult] = useState(undefined)
    const beginLoading = useCallback(() => {
            setResult(undefined)
            const stateArray = ['success', 'error']
            setLoading(true)
            setTimeout(() => {
                setResult(stateArray[Math.floor(Math.random() * stateArray.length)])
            },3000)
        }
    , [setLoading])

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <div className="">
        {loading ?
            result ?
                <div className='flex flex-col items-center justify-center space-y-10'>
                    <div className={`text-5xl font-bold ${result === 'success'? 'text-green-700': 'text-red-600'}`}>{result === 'success' ? 'Resumes loaded with success!' : 'Failed to load resumes'}</div>
                    <button onClick={beginLoading} className='bg-slate-500  rounded-full px-6 py-4 text-white font-bold'>Reload</button>
                </div>:
                <LoadingScreen/>
            :
            <button onClick={beginLoading} className='bg-slate-500  rounded-full px-6 py-4 text-white font-bold'>Start loading the best resumes</button>
        }
      </div>
    </main>
  )
}
