import React, { Component } from 'react'
import {CardMedia, CardTitle, CardText} from 'material-ui/Card'
import styled from 'styled-components'
import projects from '../data/projects'

const Card = styled.div`
  border: 1px solid lightgray;
  margin: 1em auto;
  box-shadow: 0 0 .2em rgba(black, .2);
  max-width: 600px;
`

const Project = ({project}) => (

  <a href={project.url}>
    <Card>
      <CardMedia overlay={<CardTitle title={project.title} />} >
        <img src={project.img} alt="" />
      </CardMedia>
      <CardText>
        {project.description}
      </CardText>
    </Card>
  </a>
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
