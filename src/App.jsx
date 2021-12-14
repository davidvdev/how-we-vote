// import libraries
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

// import stylesheets
import './App.css'

// import components
import Banner from './components/Banner/Banner'
import Blurb from './components/Blurb/Blurb'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <Router>
        <div className="App">
        <Banner />
        <Routes>

          <Route exact path="/" element={
            <>
              <Blurb />
            </>
            }/>

          <Route path="/plurality" element={
            <div>
              Plurality
            </div>
          }/>
          <Route path="/majoritarian" element={
            <div>
              Majoritarian
            </div>
          }/>
          <Route path="/proportional" element={
            <div>
              Proportional
            </div>
          }/>
          <Route path="/mixed" element={
            <div>
              Mixed
            </div>
          }/>

        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
