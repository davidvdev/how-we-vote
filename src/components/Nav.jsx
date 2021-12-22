import {Link} from 'react-router-dom'
import systems from '../data/systems.json'


const Nav = ({className, handleClick}) => {

    console.log(systems)

    return(
        <ul className={className}>
            {
                systems.map((system) => {
                    return(
                        <Link 
                            to={"/"+ system.name} 
                            key={system.name}
                            onClick={() => handleClick()}
                        >
                            <li>
                                {system.name} Voting
                            </li>
                        </Link>
                    )
                })
            }
        </ul>
    )
}

export default Nav