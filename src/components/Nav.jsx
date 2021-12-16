import {Link} from 'react-router-dom'


const Nav = ({className, handleClick, systems}) => {

    return(
        <ul className={className}>
            {
                systems.map(system => {
                    return(
                        <Link 
                            to={"/"+ system.name} 
                            key={system.name}
                            onClick={() => handleClick()}
                        >
                            <li>
                                {system.name.charAt(0).toUpperCase() + system.name.slice(1)} Voting
                            </li>
                        </Link>
                    )
                })
            }
        </ul>
    )
}

export default Nav