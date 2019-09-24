import React, { useState } from 'react';
import bg from '../images/login-bg.jpg';
import '../styles/Login.css';
import { Button, FormGroup, Label, Input } from 'reactstrap';
// import Visibility from '@material-ui/icons/Visibility';
// import VisibilityOff from '@material-ui/icons/VisibilityOff';


// const handleClickShowPassword = ()=>{

// }

// const handleChange = (type)=>{
//     console.log(type)
// }


function Login() {


    const [values, set] = useState({
        showPassword:false
    })

    return (
        <div className="page-container">
            <div className="page-group form-area">
                <form>
                    <h5>Welcome back to TritonFinApp!</h5>
                    <FormGroup>
                        <Label for="exampleEmail">Email</Label>
                        <Input type="email" name="email" id="exampleEmail" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleEmail">Password</Label>
                        <Input type="password" name="password" id="password" />
                    </FormGroup>
                    <div className="forget-pass">
                        <b> Forget Password ? </b>
                    </div>
                    <Button color="success" size="lg" block> Sign In </Button>
                    <div className="text-center mt-3">
                        <p>Don't have an account? <a href="/" className="text-signup">Sign Up</a></p>
                    </div>
                </form>
            </div>
            <div className="page-group form-image">
                <div className="background-holder" style={{backgroundImage: `url(${bg})` }}> </div>
                <div className="overlay"></div>
                <div className="desc-text">
                    <h4> TristonFinApp gives best services to our customers. </h4>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Login
