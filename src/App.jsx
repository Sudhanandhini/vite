import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeaderPage from  './components/common/Header/HeaderPage'
import FooterPage from './components/common/Footer/FooterPage'





function App() {
  const [count, setCount] = useState(0)


  return (
    <>
    <HeaderPage />
    <FooterPage />
    </>
  )
}

export default App
