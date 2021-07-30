import * as React from "react"
import Layout from '../components/layout'
import styled from 'styled-components'
import mountains from '../images/mountains.jpg'
import exploring from'../images/exploring.jpg'
import travel from '../images/travel.jpg'
import climbing from '../images/climbing.jpg'


// markup
const IndexPage = () => {

  //Cant obstruct Static image into seperate component due to some limitations in gatsby staticimage
  return (
      <Layout>
        <Wrapper>
          <Box image={travel}/>
          <Box image={mountains}/>
          <Box image={exploring}/>
          <Box image={climbing}/>
        </Wrapper>
        <Headline>
          dirtbag photography
        </Headline>
      </Layout>
  )
}
//Layout
const Wrapper = styled.div`
  display: flex;
  align-items: stretch;
  height: 100%;
  background-color: rgba(245, 245, 245, 1);
`

const Box = styled.div`
  flex: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${(props) => props.image});
  background-position: center;
  background-size: cover;
  border: 1px solid rgba(15, 15, 15, 0.3);
  opacity: 0.4;
`
const Headline = styled.div`
  position: fixed;
  top: 40%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: underline;
  font-size: 2.5rem;
  letter-spacing: 8px;
` 
const Text = styled.span`
  font-size: 2.5em;
  padding: 2px 0;
  letter-spacing: 7px;
  font-weight: 100;
`

export default IndexPage
