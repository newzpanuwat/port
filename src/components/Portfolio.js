import React from 'react'
import { Label } from 'semantic-ui-react'
import {
  Container,
  Header,
  Divider,
} from 'semantic-ui-react'

const ContentLayout = () => (
  <div>
    <Container text style={{ marginTop: '2.5em' }}>
      <Header as='h1'>Work experience</Header>
      <Divider />
      <h3>Prithailand</h3>
      <span>Jun 2021 to Present</span><br/>
      <p>Swiftlet, Bangkok</p>
      <p>-Build web application questionnaires</p>
        <Label as='a' color='blue'>React js</Label>
        <Label as='a' color='red'>Ruby on rails</Label>
        <Label as='a' color='gray'>Postgres</Label>
      <Divider />
      <h3>BI Suite</h3>
      <span>Mar 2021 to Apr 2021</span><br/>
      <p>Swiftlet, Bangkok</p>
      <p>-Build Features custom logo for application <br/> -Developed color scheme for application</p>
        <Label as='a' color='blue'>React js</Label>
        <Label as='a' color='green'>Python</Label>
      <Divider />
      <h3>Chat SmartFarmer (Flutter Mobile)</h3>
      <span>Nov 2020 to Feb 2021</span><br/>
      <p>Swiftlet, Bangkok</p>
      <p>Build app smart farmer mobile using flutter</p>
        <Label as='a' color='blue'>Flutter</Label>
        <Label as='a' color='blue'>Mobile</Label>
      <Divider />
      <h3> KU Terebinth AWS Project (DevOps)</h3>
      <span>Oct 2020 to Nov 2020</span><br/>
      <p>Swiftlet, Bangkok</p>
      <p>Deploy Terebinth KU to AWS Production and using Kubernates</p>
        <Label as='a' color='blue'>Docker</Label>
        <Label as='a' color='blue'>Kubernates</Label>
        <Label as='a' color='orange'>AWS</Label>
      <Divider />
      <h3>Terebinth ERP</h3>
      <span>Mar 2019 - 2020</span><br/>
      <p>Swiftlet, Bangkok</p>
      <p>
      Terebinth ERP is a business process management and information system (ERP) on the Cloud within the 
      organization that integrates the functionality of every department or corporate units within a single system.
      </p>
        <Label as='a' color='red'>Ruby on Rails</Label>
        <Label as='a'>HTML5</Label>
        <Label as='a' color='teal'>CSS</Label>
        <Label as='a' color='green'>MongoDB</Label>
        <Label as='a' color='blue'>React JS</Label>
      <Divider />
      <h3>ARDALA</h3>
      <span>Sep 2018 to Feb 2019</span><br/>
      <p>Swiftlet, Bangkok</p>
      <p>Ardala is an online platform bringing together startups and service providers,  </p>
      <Label as='a' color='red'>Ruby on Rails</Label>
      <Label as='a'>HTML5</Label>
      <Label as='a' color='teal'>CSS</Label>
      <Label as='a' color='green'>MongoDB</Label>
      <Label as='a' color='teal'>Vue JS</Label>
      <Divider />
      <h3>School bus Tracker  - (Internal Project) </h3>
      <span>Jun 2018 to Aug 2018</span><br/>
      <p>Swiftlet, Bangkok</p>
      <p>School bus Tracker is GPS tracking system school bus of each bus of that school will know where your child is on the road.</p>
      <Label as='a' color='red'>Ruby on Rails</Label>
      <Label as='a'>HTML5</Label>
      <Label as='a' color='teal'>CSS</Label>
      <Label as='a' color='green'>MongoDB</Label>
      <Label as='a' color='orange'>jQuery</Label>
      <Divider />
      <h3>Thumbprint - (Internal Project)</h3>
      <span>Aug 2017 - Dec 2017</span><br/>
      <p>Swiftlet, Bangkok</p>
      <p>This is my first official project, It’s Swiftlet Internal project, for tracking clock in time and clock out time employees.</p>
        <Label as='a' color='red'> Ruby on Rails</Label>
        <Label as='a'>HTML5</Label>
        <Label as='a' color='teal'>CSS</Label>
        <Label as='a' color='green'>MongoDB</Label>
        <Label as='a' color='orange'>jQuery</Label>
      <Divider />
    </Container>
    <br />
    <br />
  </div>
)

export default ContentLayout