import './App.css';
import { SafeAreaView, StyleSheet, text } from "react";
import { Button, Link } from 'react-scroll';

function App() {
  return (
    <div className="App" id='body'>

      <div className="header1">
        <div className="logoheader">
          <img alt='logotwi' src='Twilogo.png' width='5%' height='13%' />
          <img alt='logogit' src='gitlogo.png' width='9%' height='13%' />
          <img alt='logolink' src='linklogo.png' width='5%' height='13%'></img>
        </div>
        <img alt='logonath' src='logoN.png' className='logoN' width='45%' />

      </div>


      <div className="header">
        <Link activeClass="active" to="About" spy={true} smooth={true} offset={-100} duration={500} className="p1">About</Link>
        <Link activeClass="active" to="Experiences" spy={true} smooth={true} offset={-30} duration={500} className="p1">Experiences</Link>
        <Link activeClass="active" to="Work" spy={true} smooth={true} offset={-30} duration={500} className="p1">Work</Link>
        <Link activeClass="active" to="Contact" spy={true} smooth={true} offset={-40} duration={500} className="p1">Contact</Link>
      </div>


      <div className="About">
        <strong>About me</strong><br></br>
        <p2 className="p2">
          Hello! my name is Nathan,<br></br>
          I’m 22 years old and I’m originally from Paris.<br></br>
          I used to work in the restaurant business and I’m currently working in the field of web development.<br></br>
          I am a motivated and ambitious young man who likes to learn and share.<br></br>
          Of curious and motivated character I like teamwork and learning new technologies.<br></br>
          I like board sports like surfing, snowboarding, skiing.<br></br>
          I also like swimming, soccer and cycling.<br></br>
        </p2>

        <br></br><strong>Skills</strong><br></br>
        <img alt='logophp' src='php.png' width='10%' />
        <img alt='logoJS' src='logoJS.png' width='5%' />
        <img alt='logoreact' src='logoreact.png' width='9%' />
        <img className='logonode' alt='logonode.png' src='logonode.png' width='11%' />
      </div>

      <div className="Experiences">
        <strong>Experiences</strong><br></br>
        <p>(2015-2017). I made a CAP in pastry making over two years.<br></br>
          (2017-2018). I made a CAP in bakery on one year.<br></br>
          (2018-2019).I made a Complementary mention in restaurant dessert (starred).<br></br>
          (2019-2020). kitchen assistant in the pic house, 3 stars michelin.<br></br>
          (2020).Letter carrier.<br></br>
          (2020).Order picker.<br></br>
          (2020).Creator of companies in the field of E-commerce.<br></br>
          (2022).Competition to integrate the school of Epitech, training in web development.<br></br></p>

      </div>

      <div className="Work">
        <strong>Work</strong><br></br><br></br>
        <p1>MY_IRC</p1><br></br>
        <img alt='my_irc' src='my-irc.png' width='50%' />
        <p>Here is a project i did with a classmate.<br></br>
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
        </p>


        <p1>POWER4</p1><br></br><br></br>
        <img alt='puissance4' src='puissance4.png' width='50%' />
        <p>This project was completed in
          two weeks and individually. <br></br>
          The goal of this project is to
          reproduce the game of power4.<br></br>

        </p>
      </div>


      <form className='Contact'>
        <br></br>
        <strong> Write to me !</strong><br></br>
        <br></br>Name:<input type={text}></input><br></br>
        E-mail:<input type={text}></input><br></br>
        <br></br><br></br><textarea width='20%'></textarea><br></br>
        <button width="30%"><a href="mailto:max.mustermann@example.com?body=My custom mail body">Send your message</a></button><br></br>


      </form>


    </div>

  );
}

export default App;
