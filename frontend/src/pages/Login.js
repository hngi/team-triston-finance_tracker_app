import React, { useState } from 'react';
import bg from '../images/login-bg.jpg';
import '../styles/Login.css';
import { Button, FormGroup, Label, Input } from 'reactstrap';
import { Password } from '../components';


function Login() {

    const [values, set] = useState({
        showPassword:false,
        email:"",
        password:""
    })

    const handleInput = ({ target })=>{
        const { name, value } = target;
        set(values => ({ ...values, [name]:value }))
    }

    const handleSubmit = ()=>{
        console.log(values)
    }

    return (
        <div className="page-container">
            <div className="page-group form-area">
                <form>
                    <h5>Welcome back to TritonFinApp!</h5>
                    <FormGroup>
                        <Label for="exampleEmail">Email</Label>
                        <Input 
                            className="ctrl md" 
                            type="email" 
                            name="email" 
                            id="exampleEmail"
                            onKeyUp = { handleInput }
                            autoComplete = "email"
                        />
                    </FormGroup>
                    <Password
                        className="ctrl md" 
                        name="password" 
                        id="user-password"
                        onKeyUp = { handleInput }
                        autoComplete = "current-password"
                    />
                    <div className="forget-pass">
                        <Button 
                            className="forget-password-btn" 
                            color="link"
                        >
                            Forgot Password ?
                        </Button>
                    </div>
                    <Button 
                        color="success" 
                        size="lg" 
                        block
                        onClick = { handleSubmit }
                    > 
                        Sign In 
                    </Button>
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
                    <Button className="inverted-white get-started" outline color="primary" >Get Started</Button>
                </div>
            </div>
        </div>
    )
}

export default Login
