// import libraries
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// import stylesheets
import './App.css'

// import json data
// This data is also imported in the Nav component, make appropriate changes in both locations if necessary
import systems from './data/systems.json'

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
          {
            systems.map(system => {
              return(
                <Route path={"/"+ system.name} key={system.name} element={
                  <System 
                    system={system}
                  />
                }/>
              )
            })
          }
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
