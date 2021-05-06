import React from 'react'
import './stylo.scss';
function Hero({children}) {
    return (
        <div className="hero">
            <div className="hero-body">{children}</div>
        </div>
    )
}

export default Hero
