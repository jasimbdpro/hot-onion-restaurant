import './App.css'
import Homepage from './components/Homepage'
import MainFooter from './components/MainFooter'
import MainHeader from './components/MainHeader'
import MainNav from './components/MainNav'
import { BrowserRouter } from 'react-router-dom'

function App() {



  return (
    <BrowserRouter>

      <MainNav />
      <MainHeader />
      <Homepage />
      <h3>hleoodddddddd</h3>
      <MainFooter />
    </BrowserRouter>
  )
}

export default App
