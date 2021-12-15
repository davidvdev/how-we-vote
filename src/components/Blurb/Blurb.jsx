import { Link } from 'react-router-dom'
import Nav from '../Nav'

import './Blurb.css'


const Blurb = () => {
    return(
        <main className="Blurb">
            <h1>Everyone Has a Voice</h1>
            <h2>Learn how people around the world vote</h2>
            <Nav className="voting-systems"/>
        </main>
    )
}

export default Blurb