import { useState } from "react";
import { VictoryChart, VictoryBar } from 'victory'
import './Ballot.css'

const Ballot = () => {

    const [options, setOptions] = useState([
        {
            abbr: 'op1',
            name: 'Option 1',
            votes: 1
        },
        {
            abbr: 'op2',
            name: 'Option 2',
            votes: 1
        },
        {
            abbr: 'op3',
            name: 'Option 3',
            votes: 1
        },
        {
            abbr: 'op4',
            name: 'Option 4',
            votes: 1
        },
        {
            abbr: 'op5',
            name: 'Option 5',
            votes: 1
        },
    ])

    const [vote, setVote] = useState(null)
    const [showResults, setShowResults] = useState(false)
    const [submissionCount, setSubmissionCount] = useState(0)


    const handleSubmit = (event) => {
        event.preventDefault()
        setSubmissionCount(2)
        options.find(op => op.abbr == vote.abbr).votes++
        setOptions([...options])
        setShowResults(true)

    }

    const handleChange = (event) => {
        submissionCount < 1 ? setSubmissionCount(1) : setSubmissionCount(submissionCount) 
        setVote({
            abbr: event.target.id,
            name: event.target.value,
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
                { submissionCount == 1 &&
                    <input type="submit" value="Submit my Ballot!" />

                }
                { submissionCount > 1 &&
                    <input type="submit" value="Vote Cast!" disabled/>

                }
                { submissionCount < 1 &&
                    <input type="submit" value="Select an Option" disabled/>

                }
            </form>
            { showResults &&
            <div className="results">
                <VictoryChart domainPadding={20} >
                    <VictoryBar
                        data={options}
                        x="name"
                        y="votes"
                    />
                </VictoryChart>
            </div>
            }
        </div>
    )
}

export default Ballot
