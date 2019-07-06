import React from 'react'
import '../Profile.css'
import {
  Container,
  Header,
  Divider,
} from 'semantic-ui-react'
import { Button, Icon } from 'semantic-ui-react'

const Profile = () => (
  <div>
    <Container text style={{ marginTop: '7em' }}>
      <Header as='h1'>Panuwat Boonrod</Header>
      <h3>Software Developer</h3>
      <Divider />
      <h2>About me</h2>
      <p>
        I'm 28 years old, Experienced professional with over 2 year total IT Industry in Ruby on Rails development and Implement software with TDD
        During last year, I was focused on Golang it' is more interest for me to work on backend microservices.
      </p>
      <p>
      My primary goal is to apply my technical expertise all throughout the full software
      life cycle to ensure production and delivery of products and services. My experience as
      junior software developer enhanced my abilities in designing, implementing, testing, and
      upgrading software. One of my objectives is to keep updated with the latest IT trends and
      technologies. I am confident that if given the opportunity, I can be a useful talent to the
      company.
      </p>
      <Divider />
      {/* <Button icon labelPosition='right' floated="right">
        Next
        <Icon name='right arrow' />
      </Button> */}
    </Container>
  </div>
)

export default Profile