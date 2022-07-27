import Container from 'react-bootstrap/esm/Container';
import HomePageParticles from '../components/HomePageParticles';
import { DefaultLayout } from '../layouts/DefaultLayout';

function Home() {
    return (
        <DefaultLayout>
            <Container fluid>
                <section
                    style={{ minHeight: 'calc(100vh - 72.1625px)' }}
                ></section>
                <section id="about" style={{ minHeight: '100vh' }}>
                    About
                </section>
            </Container>
        </DefaultLayout>
    );
}

export default Home;
