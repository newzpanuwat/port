import React from 'react'
import { Icon, Label } from 'semantic-ui-react'
import {
  Container,
  Header,
  Divider,
} from 'semantic-ui-react'

const ContentLayout = () => (
  <div>
    <Container text style={{ marginTop: '7em' }}>
      <Header as='h1'>Portfolio</Header>
      <Divider />
      <h3>Thumbprint - (Internal Project)</h3>
      <span>Aug 2017 - Dec 2017</span><br/>
      <p>Swiftlet, Bangkok</p>
      <p>
        This is my first official project, It’s Swiftlet Internal project, for tracking clock in time and clock out time employees.
      </p>
      <p>
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
      </p> 
      <Divider />
      <h3>10DK</h3>
      <span>Mar 2018 to Apr 2018</span><br/>
      <p>Swiftlet, Bangkok</p>
      <p>
        10DK app is web application customer management,  In this project I’m just coordinate with one of senior developer for a short time.
      </p>
      <p>
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
      <Label as='a' color='red'>
        Angular JS
      </Label>
      <Divider />
      </p> 
      <h3>School bus Tracker  - (Internal Project) </h3>
      <span>Jun 2018 to Aug 2018</span><br/>
      <p>Swiftlet, Bangkok</p>
      <p>
        School bus Tracker is GPS tracking system school bus of each bus of that school will know where your child is on the road.
      </p>
      <p>
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
      </p> 
      <h3>ARDALA</h3>
      <span>Sep 2018 to Feb 2019</span><br/>
      <p>Swiftlet, Bangkok</p>
      <p>
        Ardala is an online platform bringing together startups and service providers,  
      </p>
      <p>
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
      <Label as='a' color='teal'>
        Vue JS
      </Label>
      </p> 
      <h3>Terebinth ERP</h3>
      <span>Mar 2019 to Present</span><br/>
      <p>Swiftlet, Bangkok</p>
      <p>
      Terebinth ERP is a business process management and information system (ERP) on the Cloud within the 
      organization that integrates the functionality of every department or corporate units within a single system.
      </p>
      <p>
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
        <Label as='a' color='blue'>
          React JS
        </Label>
      <Divider />
      </p> 

    </Container>
    <br />
    <br />
  </div>
)

export default ContentLayout