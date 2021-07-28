import * as React from "react"
import Layout from '../components/layout'
import styled from 'styled-components'


// markup
const IndexPage = () => {
  return (
      <Layout>
        <Wrapper>
          <Box>
            1
          </Box>
          <Box>
            2
          </Box>
          <Box>
            3
          </Box>
          <Box>
            4
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
`
const Box = styled.div`
  flex: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(15, 15, 15, 0.3);
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
