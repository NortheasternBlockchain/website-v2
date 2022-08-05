import React, { useState, useEffect } from 'react'; // required for Gatsby
import Container from 'react-bootstrap/esm/Container';
import HomePageParticles from '../components/HomePageParticles copy';
import { AppLayout } from '../layouts/AppLayout';

function Home() {
    const [firstLoadDone, setFirstLoadDone] = useState(false);

    useEffect(() => {
        // sessionStorage.getItem('firstLoad') && setFirstLoadDone(true);
        // sessionStorage.setItem('firstLoad', 1);
    }, []);

    let animationsFinished = 0;
    const onAnimationEnd = () => {
        animationsFinished < 1 && setFirstLoadDone(true);
        animationsFinished += 1;
    };

    return (
        <>
            {/* <HomePageParticles
                onAnimationEnd={onAnimationEnd}
            ></HomePageParticles>
            {firstLoadDone && ( */}
            <AppLayout className="home-page">
                <Container fluid>
                    <section
                        style={{
                            textAlign: 'left',
                            minHeight: 'calc(100vh - 72.1625px)', // to account for nav bar
                        }}
                    >
                        <HomePageParticles></HomePageParticles>
                        <div
                            style={{
                                position: 'absolute',
                                top: '30%',
                                left: '5vw',
                            }}
                        >
                            <h1>Northeastern Blockchain</h1>
                            <h4>
                                Advancing Blockchain Education, Development, and
                                Research
                            </h4>
                        </div>
                    </section>
                    <section id="about" style={{ minHeight: '100px' }}>
                        <h3>About</h3>
                    </section>
                    <section id="about" style={{ minHeight: '100px' }}>
                        <h3>Test</h3>
                    </section>
                </Container>
            </AppLayout>
            {/* )} */}
        </>
    );
}

export default Home;
