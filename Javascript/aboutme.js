import React from 'react'
export default class AboutMe extends React.Component{
  // the React component used for About Page
  constructor(props){
    super(props)
  }
  render(){
    let data = this.props.data
    return (
      <div>
      <article class="header-image">
        <img src={data.pic} className="header-pic"/>
        <img src="assets/prof_background.jpg" className="header-background"/>
        <a href={data.cv} class="download-cv"><img src="assets/download.png"/>CV</a>
      </article>
      <article className="new-article">
      <p> Personal Information </p>
      <table>
      <tbody>
      <tr>
      <td className="cell-q"> Name </td>
      <td className="cell-a"> {data.name} </td>
      </tr>
      <tr>
      <td className="cell-q"> DOB </td>
      <td className="cell-a"> {data.dob} </td>
      </tr>
      <tr>
      <td className="cell-q"> Gender </td>
      <td className="cell-a"> {data.gender} </td>
      </tr>
      <tr>
      <td className="cell-q"> Hobbies </td>
      <td className="cell-a"> {data.hobbies} </td>
      </tr>
      <tr>
      <td className="cell-q"> Languages </td>
      <td className="cell-a"> {data.languages} </td>
      </tr>
      <tr>
      <td className="cell-q"> Skills </td>
      <td className="cell-a"> {data.skills} </td>
      </tr>
      <tr>
      <td className="cell-q"> Contact No </td>
      <td className="cell-a"> <a href={"tel:"+data.tel}>{data.tel}</a> </td>
      </tr>
      <tr>
      <td className="cell-q"> Email </td>
      <td className="cell-a"> <a href={"mailto:"+data.email}>{data.email}</a> </td>
      </tr>
      <tr>
      <td className="cell-q"> Skills </td>
      <td className="cell-a"> {data.skills} </td>
      </tr>
      </tbody>
      </table>
      </article>
      <article className="new-article">
      <p>Personal skills </p>
      <ul className="article-ul">
      {
        data.pskills.map((pskill)=>{
        return <li key={pskill}>{pskill}</li>
      })
      }
      </ul>
      </article>
      <article className="new-article">
      <p>Achievements </p>
      <ul className="article-ul">
      {
        data.achievements.map((achievement)=>{
        return <li key={achievement}>{achievement}</li>
      })
      }
      </ul>
      </article>
      <article className="new-article">
      <p>Extracurricular Activities </p>
      <ul className="article-ul">
      {
        data.extra.map((extr)=>{
        return <li key={extr}>{extr}</li>
      })
      }
      </ul>
      </article>
      <article className="new-article">
      <p>Social Network details </p>
      <a href={data.github} className="social-media"> <img src="assets/git.png" /></a>
      <a href={data.linkedin} className="social-media"> <img src="assets/linkedin.png" /></a>
      </article>
      </div>
    )
  }
}
