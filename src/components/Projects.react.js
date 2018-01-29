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

const Skills = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 1em 0;
`

const Chip = styled.div`
  border-radius: 20px;
  background-color: #eee;
  padding: .5em 1em;
  margin-right: .8em;
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
        <Skills>
          {project.skills.map(skill => <TechSkill skill={skill} key={skill}/>)}
        </Skills>
        <a href={project.github}><FlatButton label="github" /></a>
      </CardText>
    </Card>
)

const TechSkill = ({skill}) => (
  <Chip>
   {skill}
  </Chip>
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
