import './App.css'
import Background from './components/page/Background'
import Footer from './components/page/Footer'
import Header from './components/page/Header'
import Tasks from './components/page/Tasks'

function App() {
  return (
    <div className='app'>
      <Header />
      <Background />
      <main>
        <Tasks />
      </main>
      <Footer />
    </div>
  )
}

export default App
