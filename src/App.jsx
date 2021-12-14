// import libraries
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

// import stylesheets
import './App.css'

// import components
import Banner from './components/Banner/Banner'
import Blurb from './components/Blurb/Blurb'
import Footer from './components/Footer/Footer'
import System from './components/System/System'

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
            <System 
              sysName="Plurality"
            />
          }/>
          <Route path="/majoritarian" element={
            <System 
              sysName="Majoritarian"
            />
          }/>
          <Route path="/proportional" element={
            <System 
              sysName="Proportional"
            />
          }/>
          <Route path="/mixed" element={
            <System 
              sysName="Mixed"
            />
          }/>

        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
