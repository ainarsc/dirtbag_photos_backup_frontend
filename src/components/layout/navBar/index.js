import React, {useState} from 'react';
import styled from 'styled-components'
import MenuIcon from './menuIcon'
import SideBar from './menu'



export default () => {
    //Sidebar state
    const [isVisible, setVisibility] = useState(false)
    //Brand section
    const BRAND = 'AC PHOTO'

    return (
        <Wrapper>
            <Brand>{BRAND}</Brand> 
            <MenuIcon isVisible={isVisible} handleVisibility={setVisibility}/>
            {isVisible && <SideBar isVisible={[isVisible, setVisibility]}/>}
        </Wrapper>
    );
}

const Wrapper = styled.div`
    background-color: ${({theme}) => theme.transparant};
    height: 6vh;
    display: flex;
    align-items: center;
    justify-content: space-around;
`

const Brand = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: 20px;
    flex: 1;
    color: ${({ theme }) => theme.primaryLight};
    font-family: 'Zen Tokyo Zoo', cursive;
    letter-spacing: 1.6px;`