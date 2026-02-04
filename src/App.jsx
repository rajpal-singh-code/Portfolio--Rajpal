import { useState } from 'react'
import './index.css';
import Navigation from './Component/Navigation'
import Routing from './utils/Routing';
import Popup from './Component/Popup';


function App() {
  let [showmodel, setShowmodel] = useState(false);

  return (
    <>
      <div className='sm:px-42 px-7 pt-16 bg-[#0A0A0A]'>
          {showmodel && <Popup setShowmodel ={setShowmodel} />}
         <Navigation setShowmodel={setShowmodel}/>
         <Routing/>
      </div>
  
    </>
  )
}

export default App
