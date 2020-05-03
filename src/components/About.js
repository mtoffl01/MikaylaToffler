import React from 'react';
import {cityKids, dumbo, washingtonSquare} from '../images/'

const About = (props) => {
  return(
    <div className="Section">
      {/* <ArrowTop /> */}
      <div className="About-imgs">
        <img src={cityKids} alt="City Kids"/>
        <img src={dumbo} alt="Dumbo"/>
        <img src={washingtonSquare} alt="Washington Square Park"/>
      </div>
      <div className="About-content">
        <p>
          If the above images didn't already clue you in, I did in fact grow up in New York City!
        </p>
        <p>
          I discovered my passion for software engineering in college at Tufts University, almost by accident, when I ended up in “Introduction To Computer Science” as a requirement for my “Cognitive and Brain Sciences” major. I quickly realized it was the class I enjoyed best. In my senior year, I explored personal interests in Artificial Intelligence and Web Programming, the latter of which I particularly loved.
        </p>
        <p>
          After graduating in May 2019 with a computer science minor, I taught web development for Girls Who Code and Kode With Klossy. It was exciting to watch my young-woman pupils grasping the power of technology.
        </p>
        <p>
          After the summer ended, I enrolled in Grace Hopper Fullstack Academy. My experience at GHFSA further solidified my passion for writing code and watching it come to life. I look forward to harnessing my technical and social skills further to make a difference in real world problems with creative technology solutions.
        </p>
      </div>
    </div>
  )
}

export default About;
