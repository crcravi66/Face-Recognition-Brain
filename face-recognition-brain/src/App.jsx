import { Component, useState } from 'react'
import './App.css'  

import Navigation from './component/Navigation/navigation.jsx';
import FaceRecognition from "./component/FaceRecognition/FaceRecognition.jsx"
import Logo from './component/logo/logo.jsx'
import ImageLinkForm from './component/ImageLinkForm/ImageLinkForm.jsx'
import Rank from './component/Rank/Rank.jsx'
import faceDetectionApi from './component/FaceDetiction/FaceDetection.js'
import ParticlesContainer from './component/particles-react/ParticlesContainer.jsx';


class App extends Component{
constructor(){
  super();
  this.state = {
    input : "",
    imageUrl: ""
  }
}

onInputChange = (event) =>{
  this.setState({input: event.target.value})
}

onButtonSubmit = () =>{
  this.setState({imageUrl: this.state.input})
  faceDetectionApi(this.state.input)
}
  render(){
    return( 
      <div className='App'>
       
        {/* <ParticlesContainer /> */}
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm 
          onInputChange={this.onInputChange}  
          onButtonSubmit={this.onButtonSubmit} 
          />
        <FaceRecognition imageUrl={this.state.imageUrl} /> 
      </div>
    );
  }
}
export default App
