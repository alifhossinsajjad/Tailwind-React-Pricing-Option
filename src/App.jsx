
import { Suspense } from 'react'
import './App.css'
import DaisyNav from './component/DaisyNav/DaisyNav'
import NavBar from './component/NavBar/NavBar'
import PricingOPtions from './component/PricingOptions/PricingOPtions'


const pricingPromise = fetch('/PricingData/PricingData.json').then(res => res.json())



function App() {
  

  return (
    <>
     
      <header>
      <NavBar/>

        {/* <DaisyNav/> */}
      </header>
      


      <main>
        <Suspense fallback={<span className="loading loading-spinner loading-xl justify-center items-center "></span>}>
          <PricingOPtions pricingPromise ={pricingPromise}/>
        </Suspense>
      </main>
    </>
  )
}

export default App
