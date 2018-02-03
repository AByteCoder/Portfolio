import React from 'react'
import Slides from './slides'
export default class ProjectPage extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    let project = this.props.project
    let github = null
    if(project.github)
    github = <a href={project.github} className="source-code"> View code on <img src="assets/github.png" /></a>
    return <div>
    <Slides data = {project.screenshots} interval={3000}/>
    <table className="project-description">
    <tbody>
    <tr>
    <td className="cell-q">Project Name</td>
    <td className="cell-a">{project.name}</td>
    </tr>
    <tr>
    <td className="cell-q">Project type</td>
    <td className="cell-a">{project.type}</td>
    </tr>
    <tr>
    <td className="cell-q">Description</td>
    <td className="cell-a">{project.description} </td>
    </tr>
    <tr>
    <td className="cell-q">Team Size</td>
    <td className="cell-a">{project.team}</td>
    </tr>
    <tr>
    <td className="cell-q">Role played</td>
    <td className="cell-a">{project.role}</td>
    </tr>
    </tbody>
    </table>
    {github}
    </div>
  }
}
