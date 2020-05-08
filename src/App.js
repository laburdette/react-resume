import React, {useEffect, useState} from 'react';


import {home} from "./home/home";

function App (){
  const [resumeData, setState]= useState ({})

  useEffect(effect() , {
  fetch( `${process.env.PUBLIC_URL}/data.json` )
.then(response => response.json()) 
.then(setState) 
.catch(console.error)
    },
  


  if (resumeData.home){
    return
    <home name={resumeData.home.name}/>
 
  }
);
export default App;





