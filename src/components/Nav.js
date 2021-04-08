import React, { Component } from 'react';
export default class Nav extends Component {
    render (){
    let myData = this.props.myData 

    return (

<nav class="py-3 navbar navbar-expand-lg">
<div class="container">
<a class="navbar-brand" href="index.html">Aika Kuo</a>

<button class="navbar-toggler navbar-light"  type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
 <span class="navbar-toggler-icon"></span>
</button>

<div class="collapse navbar-collapse" id="navbarSupportedContent">
 <ul class="navbar-nav ml-auto">
   <li class="nav-item active">
     <a class="nav-link" href="index.html">Home <span class="sr-only">(current)</span></a>
    </li>
    <li class="nav-item">
     <a class="nav-link" href="portfolio.html">Portfolio</a>
    </li>
    <li class="nav-item">
     <a class="nav-link" href="contact.html">Contact</a>
   </li>
  </ul>
 </div>
</div>
</nav>

    )}}
