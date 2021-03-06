import React from 'react'
import { Label } from 'semantic-ui-react'
import {
  Container,
  Header,
  Divider,
} from 'semantic-ui-react'

const ContentLayout = () => (
  <div>
    <Container text style={{ marginTop: '7em' }}>
      <Header as='h1'>Work experience</Header>
      <Divider />
      <h3>Thumbprint - (Internal Project)</h3>
      <span>Aug 2017 - Dec 2017</span><br/>
      <p>Swiftlet, Bangkok</p>
      <p>
        This is my first official project, It’s Swiftlet Internal project, for tracking clock in time and clock out time employees.
      </p>
        <Label as='a' color='red'>
          Ruby on Rails
        </Label>
        <Label as='a'>
          HTML5
        </Label>
        <Label as='a' color='teal'>
          CSS
        </Label>
        <Label as='a' color='green'>
          MongoDB
        </Label>
        <Label as='a' color='orange'>
          jQuery
        </Label>
      <Divider />
      <h3>School bus Tracker  - (Internal Project) </h3>
      <span>Jun 2018 to Aug 2018</span><br/>
      <p>Swiftlet, Bangkok</p>
      <p>
        School bus Tracker is GPS tracking system school bus of each bus of that school will know where your child is on the road.
      </p>
      <Label as='a' color='red'>
        Ruby on Rails
      </Label>
      <Label as='a'>
        HTML5
      </Label>
      <Label as='a' color='teal'>
        CSS
      </Label>
      <Label as='a' color='green'>
        MongoDB
      </Label>
      <Label as='a' color='orange'>
        jQuery
      </Label>
      <Divider />
      <h3>ARDALA</h3>
      <span>Sep 2018 to Feb 2019</span><br/>
      <p>Swiftlet, Bangkok</p>
      <p>
        Ardala is an online platform bringing together startups and service providers,  
      </p>
      <Label as='a' color='red'>
        Ruby on Rails
      </Label>
      <Label as='a'>
        HTML5
      </Label>
      <Label as='a' color='teal'>
        CSS
      </Label>
      <Label as='a' color='green'>
        MongoDB
      </Label>
      <Label as='a' color='teal'>
        Vue JS
      </Label>
      <h3>Terebinth ERP</h3>
      <span>Mar 2019 to Present</span><br/>
      <p>Swiftlet, Bangkok</p>
      <p>
      Terebinth ERP is a business process management and information system (ERP) on the Cloud within the 
      organization that integrates the functionality of every department or corporate units within a single system.
      </p>
        <Label as='a' color='red'>
          Ruby on Rails
        </Label>
        <Label as='a'>
          HTML5
        </Label>
        <Label as='a' color='teal'>
          CSS
        </Label>
        <Label as='a' color='green'>
          MongoDB
        </Label>
        <Label as='a' color='blue'>
          React JS
        </Label>
      <Divider />
    </Container>
    <br />
    <br />
  </div>
)

export default ContentLayout