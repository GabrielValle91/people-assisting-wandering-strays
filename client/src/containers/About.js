import React from 'react';
const About = () => {
  return( 
   <div className="aboutPage">
     About Us
      <ul>
        <p className="AboutHeader"><strong>P</strong>eople <strong>A</strong>ssisting <strong>W</strong>andering <strong>S</strong>trays</p>
      </ul>
      <br />
      <div className="AboutContent">
        We are pet owners that know what it's like to be missing their pets, so we wanted to do our part in reuniting furbabies with their families.
      </div>
      <div className="aboutPage">
        Useful links
        <ul>
          <li><a href="https://www.wikihow.com/Approach-a-Stray-Dog" target="_blank">How to approach a stray dog</a></li>
          <li><a href="https://www.wikihow.com/Approach-a-Stray-Cat" target="_blank">How to approach a stray cat</a></li>
          <li><a href="http://www.humanesociety.org/animals/resources/tips/what_to_do_lost_pets.html" target="_blank">What to do if you've lost your pet</a></li>
          <li><a href="https://www.americanhumane.org/fact-sheet/if-you-find-a-lost-pet/" target="_blank">What to do if you've found a stray</a></li>
          <li><a href="http://www.humanesociety.org/animals/resources/tips/what_to_do_stray_pet.html" target="_blank">How to help a stray</a></li>
        </ul>
      </div>
    </div>
  )
}

export default About;