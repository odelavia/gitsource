import React, { Component } from 'react';
import Button from '../atoms/Button';
// import Loader from "../atoms/Loader";

// import ProjectCard from '../molecules/ProjectCard';
// import SearchBox from '../molecules/SearchBox';

class ProjectList extends Component {
  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div>Projects</div>
        </div>
        <div className="text-center">
          <Button label="All projects" redirect="/project/view/"/>
        </div>
      </div>
    );
  }
}

export default ProjectList;