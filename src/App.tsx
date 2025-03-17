import { useState } from 'react'
import './App.css'
import Background from './components/page/Background'
import Footer from './components/page/Footer'
import Header from './components/page/Header'
import Tasks from './components/page/Tasks'

function App() {
  const [lightTheme, setLightTheme] = useState(false)
  const changeTheme = () => setLightTheme(!lightTheme)

  return (
    <div className={`app${lightTheme ? " light" : ""}`}>
      <Header lightTheme={lightTheme} changeTheme={changeTheme} />
      <Background lightTheme={lightTheme} />
      <main>
        <Tasks lightTheme={lightTheme} />
      </main>
      <Footer />
    </div>
  )
}

export default App
