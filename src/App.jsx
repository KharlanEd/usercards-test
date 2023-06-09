
import './App.css'
import {Routes,Route} from 'react-router-dom'
import Home from './Pages/Home'
import Tweets from './Pages/Tweets'





function App() {
  

  return (
    <>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tweets" element={<Tweets/>} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  )
}

export default App
