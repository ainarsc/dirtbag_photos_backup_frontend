import React from 'react'
import styled from 'styled-components'

export default function menuIcon() {
    return (
        <Wrapper>
            <Icon id="nav-icon3">
                <Span1></Span1>
                <Span2></Span2>
                <Span3></Span3>
                <Span4></Span4>
            </Icon>
        </Wrapper>
       
    )
}


const Wrapper = styled.div`
    margin: 0;
    padding: 0; 
`
const Icon = styled.div`
    
`
const Span1 = styled.span`
    top: 0px;
    &.open {
        top: 18px;
        width: 0%;
        left: 50%;
    }
`
const Span2 = styled.span`
    top: 18px;
    &.open {
        -webkit-transform: rotate(45deg);
        -moz-transform: rotate(45deg);
        -o-transform: rotate(45deg);
        transform: rotate(45deg);
    }
`
const Span3 = styled.span`
    top: 18px;
    &.open {
        -webkit-transform: rotate(-45deg);
        -moz-transform: rotate(-45deg);
        -o-transform: rotate(-45deg);
        transform: rotate(-45deg);
    }
`
const Span4 = styled.span`
    top: 36px;
    &.open {
        top: 18px;
        width: 0%;
        left: 50%;
    }
`