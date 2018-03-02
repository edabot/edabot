import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import projects from '../data/projects';
import styled from 'styled-components';

const ProjectLink = ({ project }) => (
  <MenuItem>
    <a href={project.url}>{project.title}</a>
  </MenuItem>
);

class NavbarMobile extends Component {
  constructor(props) {
    super(props);
    this.state = { drawerOpen: false };
  }

  handleToggle = () => this.setState({ drawerOpen: !this.state.drawerOpen });

  render() {
    return (
      <div>
        <AppBar
          className="navbar_mobile"
          title="Ed Lewis"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          onLeftIconButtonClick={this.handleToggle}
        />
        <Drawer
          docked={false}
          open={this.state.drawerOpen}
          className="drawer"
          onRequestChange={drawerOpen => this.setState({ drawerOpen })}
        >
          <MenuItem onClick={this.handleToggle}>
            <Link to="/">Ed Lewis</Link>
          </MenuItem>
          <MenuItem onClick={this.handleToggle}>
            <Link to="/about">About</Link>
          </MenuItem>
          {projects.map(project => (
            <ProjectLink project={project} key={project.title} />
          ))}
        </Drawer>
      </div>
    );
  }
}

export default NavbarMobile;
