import React from 'react';
import '../App.css';
import Header from './Header'
import Projects from './Projects'
import { animateScroll } from "react-scroll";
import About from './About'
import Connect from './Connect'

class MainPage extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      displayAbout: true,
      displayProjects: false,
      displayConnect: false
    }
    this.displayAbout = this.displayAbout.bind(this);
    this.displayProjects = this.displayProjects.bind(this);
    this.displayConnect = this.displayConnect.bind(this);
    this.scrollToBottom = this.scrollToBottom.bind(this);
  }
  displayAbout(){
    this.setState({
      displayAbout: true,
      displayProjects: false,
      displayConnect: false
    }, this.scrollTo)
  }
  displayProjects(){
    this.setState({
      displayAbout: false,
      displayProjects: true,
      displayConnect: false
    }, this.scrollTo);
  }
  displayConnect(){
    this.setState({
      displayAbout: false,
      displayProjects: false,
      displayConnect: true
    }, this.scrollToBottom)
  }
  scrollToBottom() {
    animateScroll.scrollToBottom({
      containerId: "Section",
      duration: 1000
    });
  }
  scrollTo() {
    animateScroll.scrollTo(400);
  }
  render(){
    return(
      <div>
        <Header displayAbout={this.displayAbout} displayProjects={this.displayProjects} displayConnect={this.displayConnect}/>
          { this.state.displayProjects && (<Projects />) }
          { this.state.displayAbout && (<About />)}
          { this.state.displayConnect && (<Connect />)}
      </div>
    )
  }
}

export default MainPage;
