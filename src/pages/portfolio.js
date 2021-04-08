
import React, {Component} from 'react'
import MyData from "../myData"
import Card from "../components/Card"


class Portfolio extends Component {

  state = {
    MyData
  }

  render() {
    return(
      <>
      {this.state.MyData.map(project => (
        <Card
        name={project.name}
        image={project.image}
        github={project.github}
        deployedSite={project.deployedSite}
        />
      
      ))}
        </>
    )
  }
}

export default Portfolio