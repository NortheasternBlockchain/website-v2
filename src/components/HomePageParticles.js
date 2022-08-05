import React, { useState } from 'react';

import logo from '../images/logo.png';

import '../styles/particles.scss';

const particles = () => {
    let cs = [];
    for (let i = 0; i < 130; i++) {
        cs.push(<div key={i} className="c"></div>);
    }
    return cs;
};

function HomePageParticles({ onAnimationEnd }) {
    return (
        <div onAnimationEnd={() => onAnimationEnd()}>
            <img
                className="logo"
                src={logo}
                alt="Northeastern Blockchain logo"
            ></img>
            <div className="wrap">{particles()}</div>
        </div>
    );
}

export default HomePageParticles;
