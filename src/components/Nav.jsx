import {Link} from 'react-router-dom'


const Nav = ({className}) => {
    return(
        <ul className={className}>
            <Link to="/plurality">
                <li>Plurality Systems</li>
            </Link>
            <Link to="/majoritarian">
                <li>Majoritarian Systems</li>
            </Link>
            <Link to="/proportional">
                <li>Proportional Systems</li>
            </Link>
            <Link to="/mixed">
                <li>Mixed Systems</li>
            </Link>
        </ul>
    )
}

export default Nav