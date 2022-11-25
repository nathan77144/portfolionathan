import './App.css';
import { Button, Link } from 'react-scroll';
import React from 'react';
import Tilte from 'react-vanilla-tilt';
import Pdf from './cv.pdf';


function App() {
  return (
    <div className="App">
      <div className="header1">
        <div className="logoheader">

          <a href="https://twitter.com/popalatelo" target="_blank" rel="noreferrer">
            <img
              width='70%'
              height='60%'
              src="Twilogo.png"
              alt="Twitter"
            />
          </a>

          <a href="https://github.com/nathan77144" target="_blank" rel="noreferrer">
            <img
              width='20%'
              height='70%'
              src="gitlogo.png"
              alt="git"
            />
          </a>

          <a href="https://www.linkedin.com/in/nathan-gerard-aa3856254/" target="_blank" rel="noreferrer">
            <img
              width='70%'
              height='64%'
              src="linklogo.png"
              alt="Linkedin"
            />
          </a>
        </div>
        <img alt='logoN' src='logoN.png' width="37%" />


      </div>

      <div class="container">
        <p>
          <span>
            Nathan,
          </span>
        </p>
        <p>
          <span>
            Web developper in Epitech.
          </span>
        </p>
      </div><br></br>


      <div className="header">
        <Link activeClass="active" to="About" spy={true} smooth={true} offset={-100} duration={500} className="p1">About</Link>
        <Link activeClass="active" to="Experiences" spy={true} smooth={true} offset={-30} duration={500} className="p1">Experiences</Link>
        <Link activeClass="active" to="Work" spy={true} smooth={true} offset={-30} duration={500} className="p1">Work</Link>
        <Link activeClass="active" to="Contact" spy={true} smooth={true} offset={-40} duration={500} className="p1">Contact</Link>
      </div>

      <div className="containerAbout">
        <div className='charlie' data-tilt>
          <div className="About" data-tilt>
            <strong>About me</strong><br></br>
            <img src='pp.JPG' className='PP' width='10%'></img><br></br>
            <p2 className="p2">
              Hello! my name is Nathan,<br></br>
              I’m 22 years old and I’m originally from Paris.<br></br>
              I used to work in the restaurant business and I’m currently working in the field of web development.<br></br>
              I am a motivated and ambitious young man who likes to learn and share.<br></br>
              Of curious and motivated character I like teamwork and learning new technologies.<br></br>
              I am currently looking for a work-study program that starts at the end of January.<br></br>
              I would like to meet and develop in a team that will welcome me.<br></br>
              I like board sports like surfing, snowboarding, skiing.<br></br>
              I also like swimming, soccer and cycling.<br></br>
            </p2>

            <br></br><strong>Skills</strong><br></br>
            <img alt='logophp' src='php.png' width='10%' />
            <img alt='logoJS' src='logoJS.png' width='5%' />
            <img alt='logoreact' src='logoreact.png' width='9%' />
            <img className='logonode' alt='logonode.png' src='logonode.png' width='11%' />
          </div>
        </div>
      </div>




      <div className="containerExperiences">
        <div className='charlie' data-tilt>
          <div className="Experiences" data-tilt>
            <strong>Experiences</strong><br></br>
            <p1>(2015-2017). I made a CAP in pastry making over two years.<br></br>
              (2017-2018). I made a CAP in bakery on one year.<br></br>
              (2018-2019).I made a Complementary mention in restaurant dessert (starred).<br></br>
              (2019-2020). kitchen assistant in the pic house, 3 stars michelin.<br></br>
              (2020).Letter carrier.<br></br>
              (2020).Order picker.<br></br>
              (2020).Creator of companies in the field of E-commerce.<br></br>
              (2022).Competition to integrate the school of Epitech, training in web development.<br></br></p1><br></br>
              <a href = {Pdf} target = "_blank" id='CV'>Download my CV</a><br></br><br></br>

          </div>
        </div>
      </div>

      <div className='containerWork' >
        <div className='charlie' data-tilt>
          <div className="Work">
            <strong>Work</strong><br></br><br></br>
            <p1>MY_IRC</p1><br></br>
            <img alt='my_irc' src='my-irc.png' width='50%' /><br></br><br></br>
            <p1>Here is a project i did with a classmate.<br></br>
              The user can send messages,
              create new channels,
              change username and send messages
              to a specific user.<br></br>
              The goal was to re-code an application in
              react which is similar to Discord.<br></br>
              This project was carried out over a period
              of two weeks
              in which we distributed
              the tasks in the following ways.  <br></br>
            </p1>

            <p1>POWER4</p1><br></br><br></br>
            <img alt='puissance4' src='puissance4.png' width='50%' /><br></br><br></br>
            <p1>This project was completed in
              two weeks and individually. <br></br>
              The goal of this project is to
              reproduce the game of power4.<br></br>

            </p1>
          </div>

        </div>
      </div>


      <div className='containerContact'>
        <Tilte>

        <form className='Contact'>
            <br></br>
            <strong> Write to me !</strong><br></br>
            <br></br>Name: <input type="text"></input><br></br>
            <br></br>E-mail: <input type="text"></input><br></br>
            <br></br><br></br><textarea width='20%'></textarea><br></br>
            <button width="30%"><a href="mailto:nathan_gerard@icloud.com?body=My custom mail body">Send your message</a></button><br></br><br></br>
          </form>

        </Tilte>
          

       





      </div>

    </div>

  );
}

export default App;
