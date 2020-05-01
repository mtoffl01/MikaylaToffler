import React from 'react';
import '../App.css';
import Header from './Header'
import Projects from './Projects'
import cx from 'classnames';
import {CSSTransition} from 'react-transition-group';
import { animateScroll } from "react-scroll";

class MainPage extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      displayAbout: false,
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
    })
  }
  displayProjects(){
    this.setState({
      displayAbout: false,
      displayProjects: true,
      displayConnect: false
    }, this.scrollToBottom);
  }
  displayConnect(){
    this.setState({
      displayAbout: false,
      displayProjects: false,
      displayConnect: true
    })
  }
  scrollToBottom() {
    animateScroll.scrollToBottom({
      containerId: "Projects"
    });
  }
  render(){
    return(
      <div>
        <Header displayAbout={this.displayAbout} displayProjects={this.displayProjects} displayConnect={this.displayConnect}/>
          { this.state.displayProjects && (<Projects />) }
      </div>
    )
  }
}

export default MainPage;
