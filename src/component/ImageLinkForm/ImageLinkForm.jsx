import React from "react";
import './ImageLinkForm.css'



const ImageLinkForm = ({onInputChange, onButtonSubmit})=>{
    return (
        <div >  
            <p className="f3  ">
                {'This Magic Brain Will detect faces in your picture. Git it a try'}
            </p>
            <div className="center "> 
                <div className="form center pa4 br3 shadow-2">
                    <input className="center f4 pa2 w-70 " type="text" onChange={onInputChange}/>
                    <button 
                        className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple" 
                        onClick={onButtonSubmit}
                    >Detect</button>
                </div>
            </div>
        </div>
    )
} 


export default ImageLinkForm;