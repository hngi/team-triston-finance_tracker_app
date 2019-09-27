import React, { useState } from 'react';
import bg from '../images/login-bg.jpg';
import { Button } from 'reactstrap';
import { Password, EmailField } from '../components';
import { Link } from 'react-router-dom';
import '../styles/Login.css';


function Login(props) {

    const [values, set] = useState({
        showPassword:false,
        email:"",
        password:"",
        validEmail:false,
        validPassword:false
    })

    const handleInput = ({ target, valid })=>{
        const { name, value } = target;
        const formdata = {};
        formdata[name] = value;
        formdata[name === "email" ? "validEmail": "validPassword"] = valid;
        set(values => ({ ...values,...formdata }));
    }

    const handleSubmit = ()=>{
        console.log(values);
        const { email, password, validEmail, validPassword } = values;
        if(!validEmail || !validPassword) return;
    }

    return (
        <div className="page-container">
            <div className="page-group form-area">
                <form onSubmit = {e => { e.preventDefault() }} >
                    <h5>Welcome back to TritonFinApp!</h5>
                    <EmailField 
                        className="ctrl md" 
                        type="email" 
                        name="email" 
                        id="user-email"
                        onKeyUp = { handleInput }
                        autoComplete = "email"
                    />
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
                            onClick = { ()=> props.history.push("/forgot-password") }
                        >
                            Forgot Password ?
                        </Button>
                    </div>
                    <Button 
                        color="success" 
                        size="lg" 
                        block
                        onClick = { handleSubmit }
                        type = "button"
                        disabled = { !values.validEmail || !values.validPassword }
                    > 
                        Sign In 
                    </Button>
                    <div className="text-center mt-3">
                        <p>Don't have an account? 
                            <Link className="text-signup" to="/get-started"> Sign Up</Link>
                        </p>
                    </div>
                </form>
            </div>
            <div className="page-group form-image">
                <div className="background-holder" style={{backgroundImage: `url(${bg})` }}> </div>
                <div className="overlay"></div>
                <div className="desc-text">
                    <h4> TristonFinApp gives best services to our customers. </h4>
                    <p>
                        A financial tracker app that allows users to enter items they have purchased with money over a given period of time. The app is then able 
                        to display the total amount spent per time by the user  based on the time period selected. 
                    </p>
                    <Button className="inverted-white get-started" outline color="primary" >Get Started</Button>
                </div>
            </div>
        </div>
    )
}

export default Login
