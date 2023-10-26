import React from 'react';

import './header.css'

const Header = ({ children }) => {
    return (
        <header>
            <nav>
                {children}
            </nav>
        </header>
    )
}

export default Header;