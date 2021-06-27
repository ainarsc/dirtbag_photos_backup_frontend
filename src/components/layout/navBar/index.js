import React from 'react';
import { Link } from "gatsby"
import styled from 'styled-components'

export default () => {
    //Brand section
    const BRAND = 'AC PHOTO',
    //Link names
     NAV_LINK_NAME_1 = 'LINK 1',
     NAV_LINK_NAME_2 = 'LINK 2',
     NAV_LINK_NAME_3 = 'LINK 3',
     //Links
     LINK_1 = '/',
     LINK_2 = '/',
     LINK_3 = '/'

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
            </StyledList>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    background-color: ${({theme}) => theme.primaryDark};
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
        color: #dfe6e9;
        text-transform: uppercase;
        font-weight: 600;
        border-bottom: 2px solid transparent;
        margin: 0 1.5rem;
        transition: all 300ms linear 0s;
        text-decoration: none;
        cursor: pointer;
        /* &.active {
        color: ${({ theme }) => theme.secondaryLight}};
        border-bottom: 2px solid ${({ theme }) => theme.secondaryDark}; */
    }
    
    
`
const StyledLink = styled(Link)`
    color: ${({ theme }) => theme.secondaryLight};
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
    color: ${({ theme }) => theme.themeColors.main};
    font-weight: 700;
    letter-spacing: 1.6px;`