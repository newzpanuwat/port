import React from 'react'
import  logo  from '../contact.png'
import { Link } from "react-router-dom"

import {
  Container,
  Menu,
} from 'semantic-ui-react'

const HeaderLayout = () => (
  <div>
    <Menu secondary>
      <Container>
        <Menu.Item as={ Link } name='/' to='/' header>
        <img src={logo} alt="Logo"style={{ marginRight: '0.3em' }}  />
          New Panuwat
        </Menu.Item>
        <Menu.Item as={ Link } name='projects' to='projects'>Projects</Menu.Item>
        {/* <Menu.Item as={ Link } name='contact' to='contact'>Contact</Menu.Item> */}
      </Container>
    </Menu>
  </div>
)

export default HeaderLayout