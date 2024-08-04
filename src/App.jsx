import './App.css'
import FoodDetail from './components/FoodDetail'
import Homepage from './components/Homepage'
import LoginPage from './components/LoginPage'
import MainFooter from './components/MainFooter'
import MainNav from './components/MainNav'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignupPage from './components/SignupPage'

function App() {



  return (
    <BrowserRouter>
      <MainNav />
      <Routes>
        <Route exact path='/' element={<Homepage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignupPage />} />
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
