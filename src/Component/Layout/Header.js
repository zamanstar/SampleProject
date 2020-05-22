import React from 'react';
// import {Link} from 'react-router-dom';
import {NavLink} from 'react-router-dom';

function Header(){

    return (
    <header>
        <div className="navbar navbar-expand-md navbar-dark bg-dark shadow-sm">
            <div className="container d-flex justify-content-between">
                <a href="bitkala.ir" className="navbar-brand d-flex align-items-center">
                <strong>BitKala</strong>
                </a>
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        {/* <a className="nav-link" href="/">Home</a> */}   
                        {/* <NavLink className="nav-link" to="/" exact>Home</NavLink> */}
                        {/* inja agar stylet torie ke jaye active ebarate dige yee hast ke bayad estefade bashe intori behesh migim */}
                        {/* <NavLink className="nav-link" to="/" activeClassName="selected" exact>Home</NavLink> */}
                        {/* dar inja mituni kolan styli ke mikhay moghe select shodan bebini dasti bedi */}
                        <NavLink className="nav-link" to="/" exact activeStyle={{
                            color : 'red'
                        }}>Home</NavLink>

                    </li>
                    <li className="nav-item">
                        {/* <a className="nav-link" href="/about">About</a> */}
                        {/* <Link className="nav-link" to="/about">About</Link> */}
                        <NavLink className="nav-link" to={{
                            pathname : '/about',
                            search : '?name=hesam',
                            hash : '#mypage'
                        }}>About</NavLink>
                    </li> 
                    <li className="nav-item">
                        {/* <a className="nav-link" href="/contact">Contact</a> */}
                        {/* <Link className="nav-link" to="/contact">Contact</Link> */}
                        {/* <Link className="nav-link" to={location => console.log(location)}>Contact</Link> */}
                        <NavLink className="nav-link" to={location => `/contact${location.search}`}>Contact</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </header>
    )
}

export default Header;