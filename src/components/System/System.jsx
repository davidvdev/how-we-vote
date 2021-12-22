import './System.css'
import Ballot from '../Ballot/Ballot'

const System = ({system}) => {

    return(
        <main>
            <h2>{system.name}</h2>
            <h3>What is {system.name} Voting?</h3>
            <p>{system.description}</p>


            <h3>data vis</h3>
            {/* data vis of its popularity */}

            {/* sample ballot component */}
            <Ballot />
            
            <h3>What Countries use {system.name} Voting?</h3>
            <ul className="countries">
                {system.countries.map((country, index) => <li key={index}>{country}</li>)}
            </ul>
            <h4>Want to Learn More?</h4>
            <a href={system.wiki}>Get an overview from Wikipedia.</a>
            {/* related links to continued learning? */}
        </main>
    )
}

export default System