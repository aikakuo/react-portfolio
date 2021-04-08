import React from 'react';
import styled from "styled-components"

const H1 = styled.h1`
 
  font-weight: 900;
    text-align: center;
    color: #007bff;
    margin-bottom: 20px;
`

const H3 = styled.h3`
 
  font-weight: 900;
    text-align: center;
    color: #007bff;
    margin-bottom: 20px;
`


const About = (props) => {

    return (


  <div className="col">
    <H1>Welcome to my page</H1>
    <H3>My name is Aika. 
    I finished Full Stack Bootcamp Program at Northwestern University.
    I posted few of my projects, check them out. 
    And don't forget to connect. </H3>
  
  
</div>






)}

export default About;