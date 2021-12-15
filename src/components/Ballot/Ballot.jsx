import { useState, useRef } from "react";
import './Ballot.css'

const Ballot = () => {

    const [vote, setVote] = useState(null)

    const options = [
        {
            abbr: 'op1',
            name: 'Option 1'
        },
        {
            abbr: 'op2',
            name: 'Option 2'
        },
        {
            abbr: 'op3',
            name: 'Option 3'
        },
        {
            abbr: 'op4',
            name: 'Option 4'
        },
        {
            abbr: 'op5',
            name: 'Option 5'
        },
    ]

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(vote)
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
            {options.map(item => {
                return(
                    <li>
                        <input 
                            type="radio" 
                            id={item.abbr} 
                            name="ballot" 
                            value={item.name}
                            onChange={handleChange}    
                        />
                        <label for={item.abbr}>{item.name}</label>
                    </li>
                )
            })}
                </ul>
                <input type="submit" value="Submit my Ballot!"/>
            </form>
        </div>
    )
}

export default Ballot
