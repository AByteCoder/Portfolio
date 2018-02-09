import React from 'react'

// react class for a generic slides
export default class Slides extends React.Component{
  // A react Component used for slide showing of images
  constructor(props){
      super(props)
      this.state = {active:0,dialog:false};
      this.onImageClick = this.onImageClick.bind(this)
      this.onCloseClick = this.onCloseClick.bind(this)
  }
  componentDidMount(){
    this.timer = setInterval(this.updateSlide.bind(this),this.props.interval)
  }

  componentWillUnmount(){
    clearInterval(this.timer)
  }
  onImageClick(e){
    clearInterval(this.timer)
    this.setState((prev) => {
      prev.dialog = true
      return JSON.parse(JSON.stringify(prev))
    })
  }
  onCloseClick(e){
    this.timer = setInterval(this.updateSlide.bind(this),this.props.interval)
    this.setState((prev) => {
      prev.dialog = false
      return JSON.parse(JSON.stringify(prev))
    })
  }
  updateSlide()
  {
    this.setState((prev) => {
      prev.active = ( prev.active + 1 ) % this.props.data.desktop.length;
      return JSON.parse(JSON.stringify(prev))
    })
  }
  clicked(pos){
    clearInterval(this.timer)
    this.setState((prev) => {
      prev.active = pos;
      this.timer = setInterval(this.updateSlide.bind(this),this.props.interval)
      return JSON.parse(JSON.stringify(prev))
    })
  }
  render(){
    let content = null;
    if(this.state.dialog){
      content = (
        <div className="dialog">
        <span className="close" onClick={this.onCloseClick}> CLOSE </span>
        <img src = {this.props.data.mobile[this.state.active]} srcset={this.props.data.desktop[this.state.active]+" 720w,"+this.props.data.tablet[this.state.active]+" 480w,"+this.props.data.mobile[this.state.active]+" 360w"} sizes="(min-width:588px) 720px,(min-width:415px) 480px,360px" />
        </div>
      )
    }else{
      content = <div className = "image-slider-container" >
        <img src = {this.props.data.mobile[this.state.active]} srcset={this.props.data.desktop[this.state.active]+" 720w,"+this.props.data.tablet[this.state.active]+" 480w,"+this.props.data.mobile[this.state.active]+" 360w"} sizes="(min-width:588px) 720px,(min-width:415px) 480px,360px" className = "slider-image" onClick={this.onImageClick}/>
        <ul className = "image-dots">
          {
            this.props.data.desktop.map((item) => {
            return (
                <li key={item} className = {"image-dot" + ( this.props.data.desktop.indexOf(item) === this.state.active ? " active" : "" ) } style = {{backgroundColor : this.props.data.desktop.indexOf(item) === this.state.active ? "#FFF" : "transparent"}} onClick={ (e)=> { this.clicked(this.props.data.desktop.indexOf(item)) } } >
                </li>
              )
            }
            )
          }
        </ul>
      </div>
    }
    return content
  }
}
