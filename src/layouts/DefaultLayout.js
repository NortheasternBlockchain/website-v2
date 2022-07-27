import React from 'react';
import Stack from 'react-bootstrap/Stack';
import NavBar from '../components/NavBar';

import '../styles/DefaultLayout.css';

export const DefaultLayout = ({ children }) => {
    return (
        <Stack
            className="default-layout"
            style={{
                width: '100%',
                height: '100%',
                position: 'fixed',
                overflowY: 'auto',
            }}
        >
            <NavBar />
            <Stack direction={'vertical'} align={'center'}>
                {children}
            </Stack>
        </Stack>
    );
};
