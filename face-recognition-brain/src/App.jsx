import { Component, useState } from 'react'
import './App.css'  

import Navigation from './component/Navigation/navigation.jsx';
import FaceRecognition from "./component/FaceRecognition/FaceRecognition.jsx"
import Logo from './component/logo/logo.jsx'
import ImageLinkForm from './component/ImageLinkForm/ImageLinkForm.jsx'
import Rank from './component/Rank/Rank.jsx'
import faceDetectionApi from './component/FaceDetiction/FaceDetection.js'
import SignIn from './component/SignIn/SignIn.jsx';
import Register from './component/Register/Register.jsx'
import ParticlesContainer from './component/particles-react/ParticlesContainer.jsx';


class App extends Component{
constructor(){
  super();
  this.state = {
    input : "",
    imageUrl: "",
    box : {},
    route : 'SignIn'
  }
}

onInputChange = (event) =>{
  this.setState({input: event.target.value})
}

onButtonSubmit = async () =>{
  this.setState({imageUrl: this.state.input})
  const testRes = await faceDetectionApi(this.state.input)
  this.setState({box: testRes})
}

onRouteChange = (route)=>{
  this.setState({route: route});
}

  render(){
    return( 
      <div className='App'>
        {/* <ParticlesContainer /> */}
        <Navigation onRouteChange={this.onRouteChange}/>
        { this.state.route === 'home' 
          ? <div>
              <Logo />
              <Rank />
              <ImageLinkForm 
                onInputChange={this.onInputChange}  
                onButtonSubmit={this.onButtonSubmit} 
              />
              <FaceRecognition box={this.state.box} imageUrl={this.state.imageUrl} /> 
            </div>   
          : (
            this.state.route === "SignIn"
              ? <SignIn onRouteChange={this.onRouteChange} />
              : <Register onRouteChange={this.onRouteChange} />
            )
        }
      </div>
    );
  }

}

export default App
