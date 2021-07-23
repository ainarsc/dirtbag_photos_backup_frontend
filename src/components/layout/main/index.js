import React from 'react';
import styled from 'styled-components';


export default Main => {

    return (
        <Wrapper>
            Content
        </Wrapper>
    )
}

const Wrapper = styled.div`
    /* background-color: ${({theme}) => theme.primaryDark}; */
    height: 91vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`
