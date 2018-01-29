import React, { Component } from 'react'
import {CardMedia, CardTitle, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton';
import styled from 'styled-components'
import projects from '../data/projects'

const Card = styled.div`
  border: 1px solid lightgray;
  margin: 1em auto;
  box-shadow: 0 0 .2em rgba(black, .2);
  max-width: 600px;
`

const Project = ({project}) => (


    <Card>
      <a href={project.url}>
        <CardMedia overlay={<CardTitle title={project.title} />} >
          <img src={project.img} alt="" />
        </CardMedia>
      </a>
      <CardText>
        {project.description}
      </CardText>
      <a href={project.github}><FlatButton label="github" /></a>
    </Card>

)

class Projects extends Component {
  render() {
    return (
      <div>
        {projects.map(project=><Project key={project.title} project={project} />)}
      </div>
    )
  }
}

export default Projects
