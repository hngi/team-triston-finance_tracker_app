import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { Button, FormGroup, Label, Input } from 'reactstrap';

import '../styles/ForgotPassword.css';


function ForgotPassword() {

    const [values, set] = useState({
        email:"",
    })
    const [toForgotPassword, setToForgotPassword]  = useState(false)

    const handleInput = ({ target })=>{
        const { name, value } = target;
        set(values => ({ ...values, [name]:value }))
    }

    const handleSubmit = ()=>{
        console.log(values)
    }

    const handleRedirect = () => {
        setToForgotPassword(true)
    }

    return (
        <>
        {toForgotPassword ? <Redirect to="/forgot-password" /> : null}
        <div className="forgotpage-container">
            <div className="forgot-group form-area">
                <form>
                    <h3>Forgot your password</h3>
                    <h5>Please enter your email address</h5>
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
                    <Button 
                        color="success" 
                        size="lg" 
                        block
                        onClick = { handleSubmit }
                    > 
                        Reset Password
                    </Button>
                    <div className="text-center mt-3">
                        <p>Already have an account? <a href="/" className="text-signup">Log in</a></p>
                    </div>
                </form>
            </div>
        </div>
        </>
    )
}

export default ForgotPassword
