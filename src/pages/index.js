import React from 'react'; // required for Gatsby
import Container from 'react-bootstrap/esm/Container';
import HomePageParticles from '../components/HomePageParticles';
import { AppLayout } from '../layouts/AppLayout';

function Home() {
    return (
        <AppLayout>
            <Container fluid>
                <section
                    style={{ minHeight: 'calc(100vh - 72.1625px)' }}
                ></section>
                <section id="about" style={{ minHeight: '100vh' }}>
                    <h3>About</h3>
                </section>
            </Container>
        </AppLayout>
    );
}

export default Home;
