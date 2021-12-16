import { useState } from "react";
import { VictoryChart, VictoryBar } from 'victory'
import './Ballot.css'

const Ballot = () => {

    const options = [
        {
            abbr: 'op1',
            name: 'Option 1',
            votes: 3
        },
        {
            abbr: 'op2',
            name: 'Option 2',
            votes: 4
        },
        {
            abbr: 'op3',
            name: 'Option 3',
            votes: 8 
        },
        {
            abbr: 'op4',
            name: 'Option 4',
            votes: 1
        },
        {
            abbr: 'op5',
            name: 'Option 5',
            votes: 2
        },
    ]

    const [vote, setVote] = useState(null)
    const [showResults, setShowResults] = useState(false)


    const handleSubmit = (event) => {
        event.preventDefault()
        setShowResults(true)
        options.find(op => op.abbr == vote.abbr).votes++

    }

    const handleChange = (event) => {
        console.log(event.target.value)
        setVote({
            abbr: event.target.id,
            name: event.target.value
        })
    }

    return(
        <div className="Ballot">
            <form onSubmit={handleSubmit}>
                <ul>
            {options.map((item, index) => {
                return(
                    <li key={index}>
                        <input 
                            type="radio" 
                            id={item.abbr} 
                            name="ballot" 
                            value={item.name}
                            onChange={handleChange}    
                        />
                        <label htmlFor={item.abbr}>{item.name}</label>
                    </li>
                )
            })}
                </ul>
                <input type="submit" value="Submit my Ballot!"/>
            </form>
            { showResults &&
            <VictoryChart domainPadding={20}>
                <VictoryBar
                    data={options}
                    x="name"
                    y="votes"
                />
            </VictoryChart>
            }
        </div>
    )
}

export default Ballot
