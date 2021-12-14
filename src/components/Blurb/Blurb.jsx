import './Blurb.css'


const Blurb = () => {
    return(
        <div className="Blurb">
            <h1>Everyone Has a Voice</h1>
            <h2>Learn how people around the world vote</h2>
            <ul className="voting-systems">
                <li>Plurality Systems</li>
                <li>Majoritarian Systems</li>
                <li>Proportional Systems</li>
                <li>Mixed Systems</li>
            </ul>
        </div>
    )
}

export default Blurb