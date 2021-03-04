import React from 'react'
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import { FaUserAlt } from "react-icons/fa";
import { AiFillLock } from "react-icons/ai";
import { GrMail } from "react-icons/gr";
import { FaPhoneAlt } from "react-icons/fa";
import { GoPencil } from "react-icons/go";
import { FaUser } from "react-icons/fa";
function Signup() {
    const box={
        width:'70%',
        height:'80vh',
        backgroundColor:'white',
        boxShadow:'0px 5px 15px black',
        position:'absolute',
        top:'100px',
        marginRight:'15%',
        marginLeft:'15%', 
    }
    const text={
        margin:'20px',
        fontWeight:'bold',
        fontSize:'2.3rem'
    }
    const frm={
        color:'white',
        marginLeft:'3%',
        marginRight:'3%',
        marginTop:'5%',
    }
    const username={
     marginBottom:'50px', 
    }
  const btn1={
      backgroundColor:'black',
      color:'white',
      padding:'8px',
      marginLeft:'20px',
      border:'none',
      fontWeight:'bold',
      borderRadius:'5px',


}
const btn2={
    backgroundColor:'black',
    color:'white',
    padding:'8px',
    marginLeft:'0px',
    border:'none',
    fontWeight:'bold',
    borderRadius:'5px',

}
        
        

  

    return (
        <>
        <div style={box}>
            <h1 style={text}>Create User</h1>
            <div style={frm}> 
            <TextField 
            style={username}
                fullWidth
        id="input-with-icon-textfield"
        placeholder="UserName"
        label=""
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
                <FaUserAlt/>
            </InputAdornment>
          ),
        }}
      />   
            <TextField
                 style={username}
                fullWidth
        id="input-with-icon-textfield"
        placeholder="Email"
        type="email"
        label=""
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
                <GrMail/>
            </InputAdornment>
          ),
        }}
      />    
         
      <TextField
           style={username}
                fullWidth
        id="input-with-icon-textfield"
        placeholder="Password"
        type="password"
        label=""
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
                <AiFillLock/>
            </InputAdornment>
          ),
        }}
      />
      <TextField
           style={username}
                fullWidth
        id="input-with-icon-textfield"
        placeholder="Contact"
        type="number"
        label=""
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
                <FaPhoneAlt/>
            </InputAdornment>
          ),
        }}
      />
             </div>
             <div>     
            <button type="button" name="login" value="" style={btn1} >
            <span style={{padding:' 0px 5px 5px 0px',}}> <GoPencil/> </span>REGISTER</button>
            <span style={{ color:'white', }}>f</span>
            <button type="button" name="New User" value="" style={btn2} > 
            <span style={{padding:' 0px 10px 5px 0px'}}> <FaUser /></span>EXISTING USER</button>
           </div>
            </div>
        </>
    )
}

export default Signup
