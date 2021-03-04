import React from 'react'
import {Box,User,Form,Txt,Btn} from './Hero.Elements'; 
import TextField from '@material-ui/core/TextField';
import { FaUserAlt } from "react-icons/fa";
import { AiFillLock } from "react-icons/ai";
import { IoMdExit } from "react-icons/io";
import { FaUserPlus } from "react-icons/fa";
import InputAdornment from '@material-ui/core/InputAdornment';

function Login() {


    const butn={
        padding:'10px',
        fontWeight:'bold',
        color:'white',
        backgroundColor:'black',
    }
    return (
        <>
          <Box>
                <User>
                User Login
                </User>
                <Form>
               <TextField
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
      />      <Txt>
        <TextField
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
       </Txt>
   <Btn>    
            <button type="button" name="login" value="" style={butn}>
            <span style={{padding:' 0px 10px 5px 0px',}}> <IoMdExit/> </span>LOGIN</button>
            <span style={{ color:'white', }}>f</span>
            <button type="button" name="New User" value="" style={butn}> 
            <span style={{padding:' 0px 10px 5px 0px'}}> <FaUserPlus /></span>NEW USER</button>
    
    </Btn>
         </Form>
         </Box>
        </>
    )
}
export default Login;