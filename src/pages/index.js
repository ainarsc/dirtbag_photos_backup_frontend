import * as React from "react"
import Layout from '../components/layout'
import styled from 'styled-components'


// markup
const IndexPage = () => {
  return (
      <Layout>
        <Wrapper>
          <List>
            <ListItem>
              travel
            </ListItem>
            <ListItem>
              adventure
            </ListItem>
            <ListItem>
              people
            </ListItem>
            <ListItem>
              cities
            </ListItem>
          </List>
        </Wrapper>
      </Layout>
  )
}
const Wrapper = styled.div`
  position: absolute;
  top: 40%;
  left: 30%;
`
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
