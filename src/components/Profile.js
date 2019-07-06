import React from 'react'
import '../Profile.css'
import {
  Container,
  Header,
  Divider,
} from 'semantic-ui-react'

const Profile = () => (
  <div>
    <Container text style={{ marginTop: '7em' }}>
      <Header as='h1'>Panuwat Boonrod</Header>
      <h3>Software Developer</h3>
      <Divider />
      <h2>Profile</h2>
      <p>
        I'm 28 years old, Experienced professional with over 2 year total IT Industry in Ruby on Rails development and Implement software with TDD
        During last year, I was focused on Golang it' is more interest for me to work on backend microservices.
      </p>
    </Container>
  </div>
)

export default Profile