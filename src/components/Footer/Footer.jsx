import './Footer.css'

const Footer = () => {

    const citeLink = "https://en.wikipedia.org/wiki/Electoral_system"

    return(
        <footer className="Footer">
            <a href={citeLink} target="_blank">Learn more about Voting Systems</a>
            <p><small>Made with ❤️ by David Vogel</small></p>
        </footer>
    )
}

export default Footer