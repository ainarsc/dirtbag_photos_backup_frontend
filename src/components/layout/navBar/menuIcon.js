import React, {useState} from 'react'
import styled from 'styled-components'

export default function MenuIcon() {
    const [visible, setVisible] = useState(false)


    return (
        <Wrapper>
            <Icon onClick={() => setVisible(!visible)}>
                <Line className={visible && "open"}/>
                <Line className={visible && "open"}/>
                <Line className={visible && "open"}/>
                <Line className={visible && "open"}/>
            </Icon>
        </Wrapper>
       
    )
}


const Wrapper = styled.div`
    margin: 0;
    padding: 0; 
    flex: 1;
    display: flex;
    justify-content: flex-end;
`
const Icon = styled.div`
    /* position: absolute; */
    /* right: 2rem; */
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 2rem;
    height: 2rem;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    margin-right: 2rem;

`
const Line = styled.span`
    top: 0px;
    width: 2rem;
    height: 0.25rem;
    border-radius: 10px;
    background: #f7f7f9;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
`
const Span1 = styled.span`
    top: 0px;
    width: 2rem;
    height: 0.25rem;
    border-radius: 10px;
    background: #f7f7f9;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
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