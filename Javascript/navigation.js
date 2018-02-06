import React from 'react'

// react class for navigation

export default class Navigation extends React.Component{
  constructor(props){
      super(props)
  }

  render(){
    let data = this.props.data
    let button = null
    if( this.props.back)
    button = <label id="nav-menu" onClick={this.props.backButton}><i className="material-icons">&#xE5C4;</i></label>
    else button = <label id="nav-menu" htmlFor="nav-box"><i className="material-icons">&#xE5D2;</i></label>
    let navData = data.projects.map((project)=>{
      return <li key={project.hash} className={"nav-item" + (this.props.hash === "#"+project.hash ?" active":" ")}><a href={"#"+project.hash}>{project.name}</a></li>
    })
    return (
    <div className="navigation">
    <div className="nav-container">
      {button}
      <span className="nav-title">{this.props.title}</span>
      <a className="right" href="#/about">
        <img className="profile-pic" src={this.props.icon} />
        <span className="nav-title">{this.props.name} </span>
      </a>
    </div>
    <input type="checkbox" id="nav-box"/>
    <nav>
    <ul id="navigation-list">
    {navData}
    </ul>
    </nav>
    </div>
  )
  }
}
