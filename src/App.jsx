import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Nav from './components/Nav'
import Content from './components/Content'
import Aside from './components/Aside'
function App() {

  return (
    <div className='container'>
      <Header />
      <Nav />
      <div className="inner">
        <Aside />
        <Content />
      </div>
      <Footer />
    </div>
  )
}

export default App
