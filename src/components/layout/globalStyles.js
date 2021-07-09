import { createGlobalStyle } from "styled-components"
import BackgroundImage from '../../images/Quantum-Gradient.svg'

const GlobalStyles = createGlobalStyle`
  * {
    font-family: 'raleway', sans-serif; 
    text-decoration: none;
    box-sizing: border-box;
    color: ${({ theme }) => theme.primaryLight};
    font-size: 16px;
    letter-spacing: 1px;
    -webkit-tap-highlight-color: transparent;
    font-weight: 300;
    margin: 0;
    text-decoration: none;
  }
  html, body {
    margin: 0;
    padding: 0;
    background-color: #ff0000;
    background-image: url(${BackgroundImage});
    background-attachment: fixed;
    background-size: cover;
  }
 
`

export default GlobalStyles