import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer'
import Register from './components/Register'
import Login from './components/Login'
import Cart from './components/Cart'


function App() {
   const [view, setView] = useState('login')
  return (
    <>
      <Navbar setView={setView} />
      {/* <Home /> */} 
      {/* view === 'login' && <Login />*/}
      {/*view === 'register' && <Register />*/}
      {<Cart />}
      <Footer />
    </>
  )
}

export default App