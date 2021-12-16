import './System.css'
import Ballot from '../Ballot/Ballot'

const System = ({sysName}) => {

    return(
        <main>
            <h2>{sysName}</h2>
            <h3>What is {sysName} Voting?</h3>
            {/* explanation of the system */}

            <h3>What Countries use {sysName} Voting?</h3>
            {/* what countries use it */}

            <h3>data vis</h3>
            {/* data vis of its popularity */}

            {/* sample ballot component */}
            <Ballot />
            

            {/* related links to continued learning? */}
        </main>
    )
}

export default System