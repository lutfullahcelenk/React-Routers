import React from 'react'

const Navbar = () => {
    return (
        <nav className="ui raised very padded segment">
            <a className="ui teal inverted segment">Gloria</a>
            <div className="ui right floated header">
                <button className="ui button">Home</button>
                <button className="ui button">About</button>
                <button className="ui button">Contact</button>
            </div>
        </nav>
    )
}

export default Navbar;
