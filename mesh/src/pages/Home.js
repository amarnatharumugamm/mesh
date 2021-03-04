import React from 'react'
import { GiCycle } from "react-icons/gi";
import { MdAddBox } from "react-icons/md";

const  Home = props => {
    const hiddenFileInput = React.useRef(null);
    const handleClick = event => {
        hiddenFileInput.current.click();
      };
      const handleChange = event => {
        const fileUploaded = event.target.files[0];
        props.handleFile(fileUploaded);
      };
    const box={
        width:'70%',
        height:'80vh',
        backgroundColor:'#fff',
        position:'absolute',
        top:'100px',
        marginRight:'15%',
        marginLeft:'15%', 
        boxShadow:'0px 5px 15px black',
        
    }
    const text = {
        fontSize:'2.5rem',
        marginLeft:'20px'
    }
    const para={
        fontWeight:'bold',
        fontSize:'18px',
        marginLeft:'20px'
    }
    const border={
        height:'40vh',
        backgroundColor:'white',
        border:'2px dashed black',
        marginLeft:'20px',
        width:'95%',
    }
    const btn={
        backgroundColor:'black',
        color:'white',
        padding:'8px 10px',
        margin:'20px 20px',
        border:'nono',
        cursor:'pointer',   
        border:'none',
        borderRadius:'3px',
        fontWeight:'bold',

    }
    const file={
      color:'white',
      backgroundColor:'black',
      marginLeft:'2px',
      padding:'15px 20px',
      border:'none',
      display:'flex',
      alignItems:'center',
      position:'absolute',
      top:'230px',
      left:'30px',
      fontWeight:'bold',
      borderRadius:'3px'

      

    }
    const icon={
        marginLeft:'2px',
        padding:'0px 5px'
    }  
    const icn={
       fontSize:'20px',
       display:'flex',
       alignItems:'center',
       paddingRight:'10px'
    }
  
return (
        <div>
           <div style={box}>
            <h1 style={text}>UPLOAD IMAGE</h1>
            <p style={para}>Drag And Drop Your Images Below</p>
            <div style={border}> 

            <button type="file" style={file}   onClick={handleClick}>
            <span style={icn} ><MdAddBox /></span>
                FILE 
            </button></div>
            <input
        type="file"
        ref={hiddenFileInput}
        onChange={handleChange}
        style={{display: 'none'}} 
      />
            <button style={btn} type='button'> <span style={icon} ><GiCycle/> </span>COMPRESS</button>
        </div></div>
    )
}
export default Home