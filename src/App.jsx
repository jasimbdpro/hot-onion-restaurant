import './App.css'
import FoodDetail from './components/FoodDetail'
import Homepage from './components/Homepage'
import MainFooter from './components/MainFooter'
import MainHeader from './components/MainHeader'
import MainNav from './components/MainNav'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {



  return (
    <BrowserRouter>
      <MainNav />
      <Routes>
        <Route exact path='/' element={<Homepage />} />
        <Route path='/breakfast' element={<Homepage />} />
        <Route path='/lunch' element={<Homepage />} />
        <Route path='/dinner' element={<Homepage />} />
        <Route path='/food/:foodName' element={<FoodDetail />} />
      </Routes>
      <MainFooter />
    </BrowserRouter>
  )
}

export default App
