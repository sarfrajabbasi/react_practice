import React from 'react'
import "./style/heading.css"
function StyleSheets(props) {
    let className = props.primary? "primary":"";
    const button = {
      width:"100px",
      height:"100px",
      fontSize:"20px",
      color:"white",
      backgroundColor:"black",
      borderRadius:"50%",
      boxShadow:"0 0 10px 2px rgba(0,255,0,1)",
      position:"absolute",
      top:"50%",
      left:"50%",
      border:"none",
      transform:"translate(-50%,-50%)"
    }
  return (
    <div className='container'>
        <h1 className={`${className} font-xl`}>Mars</h1>
        <h1 className={`secondery font-xl`}>Earth</h1>
        {/* inline style css */}
        <button style={button}>Button</button>
    </div>
  )
}

export default StyleSheets