import { useState } from 'react'
import './Banner.css'

const Banner = () => {

    const [navDrawer, setNavDrawer] = useState(false)

    return(
        <header className="Banner">
            <div className="mainBanner">
                <h1 className="logo">How We Vote</h1>
                <div 
                    role="button"
                    className={ navDrawer?
                    "hamburger ham-eleven" :
                    "hamburger ham-eleven is-active"
                    }
                    onClick={() => setNavDrawer(!navDrawer)}
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
                    <ul>
                        <li><a href="#">ITEM</a></li>
                        <li><a href="#">ITEM</a></li>
                        <li><a href="#">ITEM</a></li>
                        <li><a href="#">ITEM</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Banner