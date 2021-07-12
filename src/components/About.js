import React from 'react';
import styled from "styled-components"
import pages from '../pages/profilepicture.jpg' 

const Img = styled.img`
  display: block;
  margin-left: 3rem;
  margin-bottom: 3rem;
  width: 35%;
  border-style: solid;
  color: gold;
  border-width: 5px;
  float: left;
 `

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


  <div className="container">
    <div className="row">
    <div className="col-md-4 text-center">
 <Img src={pages} alt="ProfilPicture" className="img-fluid"></Img>
</div>
    <header className="card-title">
    <H1>Welcome to my page</H1>
    </header>
    <div className="col">
    <H3>My name is Aika. 
    I recently graduated Full Stack Bootcamp Program at Northwestern University.
    I posted few of my projects, check them out. 
    And don't forget to connect. </H3>
    </div>
    </div>
    
</div>






)}

export default About;