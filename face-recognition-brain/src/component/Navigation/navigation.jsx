import React from "react";

const Navigation = ({ onRouteChange,isSignedIn })=>{
    
    if (isSignedIn){
        return(
            <nav style={{display:"flex", flexDirection:"row-reverse"}}>
                <p onClick={()=>onRouteChange('SignIn') } className="f3 link dim near-black pa3 underline pointer">Sign Out</p>
            </nav>
        )
    }else{
        return(
            <nav style={{display:"flex", flexDirection:"row-reverse"}}>
            <p onClick={()=>onRouteChange('home') } className=" f3 link dim near-black pa3 underline pointer">Sign In</p>
            <p onClick={()=>onRouteChange('home') } className="f3 link dim near-black pa3 underline pointer">Register</p>
            </nav>
        )
    }
} 
export default Navigation