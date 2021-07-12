import React from "react";
import styled from "styled-components"

const Img = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 65%;
  border-style: solid;
  color: blue;
  border-width: 5px;
 `
const Div = styled.div`
font-size: 18px;
line-height: 34px;
color: #007bff;
background-color: rgb(255, 255, 255);
  @media (min-width: 1145px ) {
    width:40%;
  }
`
const A = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #99b5b9;
  padding:0;
  margin-top:9px;
`
const H3 = styled.h3`
 
  font-weight: 900;
    text-align: center;
    color: #007bff;
    margin-bottom: 20px;
    justify-content: center;
`


const Card = (props) => {
  
  return(
  
<Div class="card text-center">
 <div class="card-body">
  <div className="col-lg-6">
    <strong><H3 class="card-title">{props.name}</H3></strong>
      <Img src={props.image} alt={props.name} />
      <A href={props.deployedSite} onClick={props.deployedSite} class="btn btn-primary">Link to Deployed site</A>
    </div>
    <div>
      <A href={props.github}  onClick={props.github} class="btn btn-primary">Github Repository</A>
    </div>
  </div>
</Div>
 )
}

        export default Card;