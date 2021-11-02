import React from 'react'
import '../Profile.css'
import {
  Container,
  Header,
  Divider,
} from 'semantic-ui-react'

const Profile = () => (
  <div>
    <Container text style={{ marginTop: '2.5em' }}>
      <Header as='h1'>Panuwat Boonrod</Header>
      <h3>Software Engineer</h3>
      <Divider />
      <h2>About me</h2>
      <p>
        I'm Experienced professional with over 4 years total IT Industry in Software development and Implement software with TDD
        During last year, I was focused on Blockchain technology it' is more interest for me to work on backend microservices.
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
    </Container>
  </div>
)

export default Profile