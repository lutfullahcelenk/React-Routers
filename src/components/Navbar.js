import React from 'react';
import {Link, NavLink, withRouter} from 'react-router-dom';

const Navbar = (props) => {
    console.log(props)
    // setTimeout(() => {
    //     props.history.push("./about")
    //   },6000)
    
    return (
        <nav className="ui raised very padded segment">
            <button className="ui teal inverted segment" >Lütfullah ÇELENK</button>
            <div className="ui right floated header">
                <button className="ui button"> <Link to="/"> Home</Link></button>
                <button className="ui button"> <NavLink to="/about"> About</NavLink></button>
                <button className="ui button"> <NavLink to="/contact"> Contact</NavLink></button>
            </div>
        </nav>
    )
}

export default withRouter(Navbar);
