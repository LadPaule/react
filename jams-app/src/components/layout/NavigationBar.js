import React from 'react'

function NavigationBar() {
    return (
        <div>
            <nav className="navbar navbar-light bg-dark mb-5">
                <div className="container">
                    <div className="navbar-header">
                        <a className="navbar-brand text-white text-lg brand-text" href="#">
                            Jams info
                        </a>
                    </div>
                    <ul className="navbar-nav ml-auto text-light d-inline-block">
                        <li className="nav-item d-inline-block mr-4">
                            <i className="fas fa-music fa-2x" id="music-icon" />
                        </li>
                        <li className="nav-item d-inline-block mr-4">
                            <i className="fab fa-react fa-3x" id="react-logo" />
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default NavigationBar
