import {Link} from 'react-router-dom'


const Nav = ({className, handleClick}) => {

    return(
        <ul className={className}>
            <Link to="/plurality" onClick={() => handleClick()}>
                <li>Plurality Systems</li>
            </Link>
            <Link to="/majoritarian" onClick={() => handleClick()}>
                <li>Majoritarian Systems</li>
            </Link>
            <Link to="/proportional" onClick={() => handleClick()}>
                <li>Proportional Systems</li>
            </Link>
            <Link to="/mixed" onClick={() => handleClick()}>
                <li>Mixed Systems</li>
            </Link>
        </ul>
    )
}

export default Nav