import React from 'react';
import { Link } from "gatsby"
import styled from 'styled-components'


export default () => {
    //Brand section
    const BRAND = 'AC PHOTO',
    //Link names
     NAV_LINK_NAME_1 = 'Home',
     NAV_LINK_NAME_2 = 'Portfolio',
     NAV_LINK_NAME_3 = 'About',
     NAV_LINK_NAME_4 = 'Contact',
     //Links
     LINK_1 = '/',
     LINK_2 = '/portfolio',
     LINK_3 = '/about',
     LINK_4 = '/contact'


    return (
        <Wrapper>
            <Brand>{BRAND}</Brand> 
            <StyledList>
                <ListItem>
                    <StyledLink exact activeClassName="active" to={LINK_1}>{NAV_LINK_NAME_1}</StyledLink>
                </ListItem>
                <ListItem>
                    <StyledLink activeClassName="active" to={LINK_2}>{NAV_LINK_NAME_2}</StyledLink>
                </ListItem>
                <ListItem>
                    <StyledLink activeClassName="active" to={LINK_3}>{NAV_LINK_NAME_3}</StyledLink>
                </ListItem>
                <ListItem>
                    <StyledLink activeClassName="active" to={LINK_4}>{NAV_LINK_NAME_4}</StyledLink>
                </ListItem>
            </StyledList>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    background-color: ${({theme}) => theme.transparant};
    height: 5vh;
    display: flex;
    align-items: center;
    justify-content: space-around;
`
const StyledList = styled.ul`
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: row;
    flex: 2;
    text-align: center;
    list-style: none; 
`
const ListItem = styled.li`
    display: flex;
    justify-content: center;
    flex: 1;
    & a {
        font-family: 'Zen Tokyo Zoo', cursive;
        color: #dfe6e9;
        text-transform: uppercase;
        font-weight: 300;
        border-bottom: 2px solid transparent;
        margin: 0 1.5rem;
        transition: all 300ms linear 0s;
        text-decoration: none;
        cursor: pointer;
        &.active {
        color: ${({ theme }) => theme.themeColors.alternative}};
    }
    
    
`
const StyledLink = styled(Link)`
    color: ${({ theme }) => theme.themeColors.alternative};
    text-decoration: none;
    font-weight: 600;
    padding: 5px;
    width: 100%;
    &:hover {
      color: ${({ theme }) => theme.themeColors.alternative};
    }
    
`
const Brand = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: 20px;
    flex: 2;
    color: ${({ theme }) => theme.primaryLight};
    font-family: 'Zen Tokyo Zoo', cursive;
    letter-spacing: 1.6px;`