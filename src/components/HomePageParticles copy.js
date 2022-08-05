import React from 'react';

import '../styles/particles2.scss';

const particles = () => {
    let cs = [];
    for (let i = 0; i < 130; i++) {
        cs.push(<div key={i} className="c"></div>);
    }
    return cs;
};

function HomePageParticles({ onAnimationEnd }) {
    return (
        <div>
            <div className="wrap">{particles()}</div>
        </div>
    );
}

export default HomePageParticles;
