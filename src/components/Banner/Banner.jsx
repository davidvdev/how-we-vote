import { useState } from 'react'
import { Link } from 'react-router-dom'
import Nav from '../Nav'
import './Banner.css'

const Banner = ({systems}) => {

    const [navDrawer, setNavDrawer] = useState(false)

    const toggleDrawer = () => {
        setNavDrawer(!navDrawer)
    }

    return(
        <header className="Banner">
            <div className="mainBanner">
                <Link to="/">
                    <h1 className="logo">How We Vote</h1>
                </Link>
                <div 
                    role="button"
                    className={ navDrawer?
                    "hamburger ham-eleven" :
                    "hamburger ham-eleven is-active"
                    }
                    onClick={() => toggleDrawer()}
                    >
                    <svg viewBox="0 0 100 80" width="40" height="40">
                        <rect></rect>
                        <rect></rect>
                        <rect></rect>
                    </svg>
                </div>
            </div>
            <div 
                className={navDrawer? 
                "subBanner visible" : 
                "subBanner invisible"}>
                <nav>
                    <Nav className="nav" systems={systems} handleClick={toggleDrawer}/>
                </nav>
            </div>
        </header>
    )
}

export default Banner