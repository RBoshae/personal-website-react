import React from "react";
import ReactDom from "react-dom";
import Link from "gatsby-link";
import ProjectItem from './ProjectItem';

import Huddle from "../assets/images/projects/Huddle/Huddle-Logo-700x400.png";

const projectsContainer = {
  position: 'absolute'

};


class Projects extends React.Component {
  constructor() {
    super();
    this.state = {
      projects: []
    }
  }

  //IDEA: Implement a scraper to grab projects from GitHub automatically.
  getProjects(){
    this.setState({ projects:[
      {
        title: "Huddle: Team Management",
        descirption: "Huddle is a Kanban web application written in React, HTML, CSS, and JavaScript.",
        languages: ["React", "HTML", "CSS", "JavaScript"],
        pictureLink: Huddle,
        lastUpdate: "Nov 25, 2017"
      },
      {
        title: "Breakout",
        descirption: "I recreated the good ol' Atari game Breakout. Every bit of this project was wired by hand and coded from scratch. My favorite part of the project was reverse engineering the Nintendo controller.",
        languages: ["C", "Embedded Systems"],
        pictureLink: "",
        lastUpdate: "June 2017"
      },
      {
        title: "Feature Optimizer",
        descirption: "I wrote a search algorithm in C++ to eliminate irrelevant features in a nearest neight classifier. I used Forward Selection and Backward Selection techniques.",
        languages: ["C++"],
        tags: ["Machine Learning"],
        pictureLink: "",
        lastUpdate: "Nov 2016"
      },
      {
        title: "Sliding Puzzle Solver",
        descirption: "Implemented A* search, the wisest search algorithm, to create an artificially intelligent program that can solve a 3x3 puzzle.",
        languages: ["C++"],
        tags: ["AI"],
        pictureLink: "",
        lastUpdate: "Feb 21, 2016"
      },
      {
        title: "Simple Ray Tracer",
        descirption: "A simple ray tracer written in C++",
        languages: ["C++"],
        tags: ["Graphics"],
        pictureLink: "",
        lastUpdate: "Dec 21, 2017"
      },
      {
        title: "MiniGL",
        descirption: "A simplified 3D rendering pipeline written in C++.",
        languages: ["C++"],
        tags: ["Graphics"],
        pictureLink: "",
        lastUpdate: "Nov 28, 2017"
      },
      {
        title: "rshell",
        descirption: "A shell terminal writtin in C++",
        languages: ["C++"],
        tags: ["OS"],
        pictureLink: "",
        lastUpdate: "Dec 2, 2017"
      },
      {
        title: "Personal Website",
        descirption: "My personal website written in HTML, CSS, JavaScript.",
        languages: ["Bootstrap", "HTML", "CSS" , "JavaScript", "jQuery"],
        tags: ["WebDev"],
        pictureLink: "",
        lastUpdate: "Jan 3, 2017"
      },
      {
        title: "Personal Website 2.0",
        descirption: "My personal website written revamped with Gatsby",
        languages: ["HTML", "CSS" , "JavaScript", "Reactjs"],
        tags: ["WebDev"],
        pictureLink: "",
        lastUpdate: "Jul 26, 2018"
      },
    ]});
  }



  componentWillMount(){
    this.getProjects();
  }

  render() {
    // Generate array of projects
    let projectItems;
    // console.log('Before Map');
    // console.log(this.state.projects);
    if(this.state.projects){
      projectItems = this.state.projects.map( (project) => {
        // console.log(projectItems);
        return (
          <td key={project.title} style={{paddingLeft: '.25rem', paddingRight: '.25rem'}}>
            <ProjectItem
              onMouseEnter={this.fadeBackground}
              onMouseLeave={this.resetBackground}
              project={project}/>
          </td>
        );
      });
    }

    // Transform array of projects to a table a of projects

    // Start with creating rows
    let projectItemRows = projectItems.reduce(function (rows, projectItem, i) {
      let rowIndex = Math.floor(i/3);
      if(i % 3 == 0) {
        rows[rowIndex] = [projectItem]
      } else {
        rows[rowIndex].push(projectItem)
      }
      return rows;
    }, [])

    console.log('Hello', projectItemRows);
    // create table
    let projectItemTable
    if(projectItemRows){
      projectItemTable = projectItemRows.map( (projectItemRow, i) => {
        // console.log(projectItems);
        return (
          <tr key={i}>
            {projectItemRow}
          </tr>
        );
      });
    }
    console.log('Table', projectItemTable);

    console.log('After Map')
    console.log(projectItems); // Debugging
    return (
      <section id="projects">
          <h1>Projects</h1>
          <table id="projectTable">
            <thead>
            </thead>
            <tbody>
              {projectItemTable}
            </tbody>
          </table>
      </section>
    );
  }
}

export default Projects;
