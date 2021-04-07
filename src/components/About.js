import React, { Component } from 'react';
export default class About extends Component {
    render (){
    let myData = this.props.myData 

    return (
<section id="hero">
<div className="container-fluid">
  <div class="row">
    <div class="col-md-6">
      <div class="auth-image">
      {/* image */}
      </div>
    </div>

  <div class="col">
    <h1>Welcome to my page</h1>
    <p>My name is Aika. </p>
    <p>I finished Full Stack Bootcamp at Northwestern University.</p>
    <p>I posted few of my projects, check them out. </p>
    <p>And don't forget to connect. </p>
  
  <div class="connect">
 <ul>  
   <a href="https://github.com/aikakuo" target="_blank" title="Aika' Github Profile">
     <i class="fa fa-3x fa-github" aria-hidden="true"></i></a>
      <a href="https://linkedin.com/in/aika-kuo-b42b53bb" target="_blank" title="Aika's Linkedin Profile">
        <i class="fa fa-3x fa-linkedin-square" aria-hidden="true"></i>
        </a>
      </ul>
    </div>
  </div>
</div>
</div>
</section>




)}}