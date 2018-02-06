import React from 'react'
import Navigation from './navigation'
import ProjectThumbnail from './project_thumbnail'
import ProjectPage from './project_page'
import AboutMe from './aboutme'
export default class App extends React.Component{
  constructor(props){
    super(props)
    this.cacheData = {}
    this.state = {location:'#/'}
    this.hashChange = this.hashChange.bind(this)
  }
  hashChange(e){
    this.setState((prev)=>{
      prev.location = location.hash
      return JSON.parse(JSON.stringify(prev))
    })

  }
  componentDidMount(){
    this.setState((prev)=>{
      prev.location = location.hash ? location.hash:"#/"
      location.hash = prev.location
      return JSON.parse(JSON.stringify(prev))
    })
    window.onhashchange = this.hashChange
    for( let i = 0; i  < this.props.data.projects.length; i++){
      let d = this.props.data.projects[i]
      this.cacheData["#"+d.hash] = i
    }
  }
  onBackPress(e){
    history.back(-1)
  }
  render(){
    let content = null
    let title = null
    let data = this.props.data
    if(this.state.location === "#/"){
      content = data.projects.map((project) => {
        return <ProjectThumbnail name={project.name} type={project.type} image={project.icon} hash={project.hash}/>
      })
      title = "Portfolio"
    }else if(this.state.location === "#/about"){
      content = <AboutMe data={data} />
      title="About Me"
    }else{
        content = <ProjectPage project={data.projects[this.cacheData[this.state.location]]} hash={this.state.location} />
        title = data.projects[this.cacheData[this.state.location]].name
      }
      let navigation = <Navigation title={title} name={data.name} icon={data.pic} hash={this.state.location} data={data}/>
      if( this.state.location != "#/")
      navigation =  <Navigation title={title} name={data.name} icon={data.pic} hash={this.state.location} data={data} back={true} backButton={this.onBackPress}/>
    return (
      <div>
        {navigation}
        <section id="page-start">
        {content}
        </section>
      </div>
    )

  }
}
