import React from 'react'

export default class ProjectThumbnail extends React.Component{
  constructor(props){
    super(props)
    this.onProjectClick = this.onProjectClick.bind(this)
  }
  onProjectClick(e){
    location.hash = this.props.hash
  }
  render(){
    return (
      <article className="project" onClick = { this.onProjectClick }>
        <img className="project-thumbnail" src = { this.props.image } />
        <div className="project-info">
          <p className="project-name">{ this.props.name }</p>
          <p className="project-type">Type { this.props.type }</p>
        </div>
      </article>
    )
  }
}
