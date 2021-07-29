import * as React from "react"
import Layout from '../components/layout'
import styled from 'styled-components'
import { StaticImage } from "gatsby-plugin-image"
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
          <Box image={travel}>
            
          </Box>
          <Box image={mountains}>
           
          </Box>
          <Box image={exploring}>
            
          </Box>
          <Box image={climbing}>
            
          </Box>
          {/* <List>
            <ListItem>
              travel
            </ListItem>
            <ListItem>
              mountains
            </ListItem>
            <ListItem>
              climbing
            </ListItem>
            <ListItem>
              exploring
            </ListItem>
          </List> */}
        </Wrapper>
      </Layout>
  )
}
//Layout
const Wrapper = styled.div`
  display: flex;
  align-items: stretch;
  height: 100%;
  background-color: rgba(245, 245, 245, 1)
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
  opacity: 0.5;

`

//Headlines
const List = styled.ul`
  display: flex;
  width: max-content;
  flex-direction: column;
  list-style: none; 
  padding: 5px 1rem;
  background-color: rgba(5, 5, 5, 0.8);
  
`
const ListItem = styled.li`
  text-decoration: none;
  font-weight: 500;
  font-size: 24px;
  letter-spacing: 7px;
  padding: 5px 0;
`


export default IndexPage
