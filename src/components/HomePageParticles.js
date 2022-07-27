import '../styles/particles.scss';

const particles = () => {
    let cs = [];
    for (let i = 0; i < 130; i++) {
        cs.push(<div className="c"></div>);
    }
    return cs;
};

function HomePageParticles() {
    return (
        <div>
            <img
                className="logo"
                src="/images/logo.png"
                alt="Northeastern Blockchain logo"
            ></img>
            <div className="wrap">{particles()}</div>
        </div>
    );
}

export default HomePageParticles;
