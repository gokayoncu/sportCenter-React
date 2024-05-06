import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

window.addEventListener("scroll",()=>{
  let scroll = window.scrollY;
  const bar = document.querySelector(".navBar")
  if(scroll>100){    
    bar.setAttribute("style", "background-color: var(--blue-color)");
  }else{
    navbar.setAttribute("style", "background-color: transparent")
}
    
})

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <App />
  
)
