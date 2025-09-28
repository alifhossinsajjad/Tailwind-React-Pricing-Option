
import { Suspense } from 'react'
import './App.css'
import DaisyNav from './component/DaisyNav/DaisyNav'
import NavBar from './component/NavBar/NavBar'
import PricingOPtions from './component/PricingOptions/PricingOPtions'
import ReasultChart from './component/ReasultChart/ReasultChart'
import axios from 'axios'
import MarksChart from './component/MarksChart/MarksChart'




const pricingPromise = fetch('PricingData.json').then(res => res.json())

const marksPromise = axios.get('marksData.json');



function App() {
  

  return (
    <>
     
      <header>
      <NavBar/>

        {/* <DaisyNav/> */}
      </header>
      


      <main>
        <Suspense fallback={<span className=" loading loading-spinner loading-xl justify-center items-center "></span>}>
          <PricingOPtions pricingPromise ={pricingPromise}/>
        </Suspense>


        <Suspense fallback={<span className=" loading loading-spinner loading-xl justify-center items-center "></span>}>
          <MarksChart marksPromise={marksPromise}/>
        </Suspense>
      
        <ReasultChart/>



      </main>
    </>
  )
}

export default App
