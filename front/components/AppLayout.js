import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer'
const Wrapper = styled.div`
    width:100%;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    min-height:100vh;
`;


const AppLayout= ({children}) => {
    return (
        <Wrapper>
            <Header />
            {children}
            <Footer />
        </Wrapper>
    );
};

export default AppLayout;