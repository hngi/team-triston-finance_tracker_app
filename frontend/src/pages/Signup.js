import React, { useState } from 'react'
import { Button, Row, Col } from 'reactstrap';
import { InputField, EmailField, Password  } from "../components";

function Signup() {

    const [ state, set ] = useState({
        firstnameIsValid:true,
        lastnameIsValid:true
    })

    const handleInput = ()=>{

    }

    return (
        <div>
            <form>
                <Row>
                    <Col md="6">
                        <InputField 
                            id="firstname"
                            label="First Name"
                            validInput = { state.firstnameIsValid }
                            required = { true }
                            className="ctrl md"
                            type = "text"
                            name  = "firstname"
                        />
                    </Col>
                    <Col md="6">
                        <InputField 
                            id="lastname"
                            label="Last Name"
                            validInput = { state.lastnameIsValid }
                            required = { true }
                            className="ctrl md"
                            type = "text"
                            name  = "lastname"
                        />
                    </Col>
                </Row>
                <Row>
                    <Col md="6">
                        <EmailField 
                            className="ctrl md" 
                            type="email" 
                            name="email" 
                            id="user-email"
                            autoComplete = "email"
                        />
                    </Col>
                    <Col md="6">
                        <InputField 
                            id="phone-number"
                            label="Phone Number"
                            validInput = { state.phonenumberIsValid }
                            required = { true }
                            className="ctrl md"
                            type = "text"
                            name  = "phonenumber"
                        />
                    </Col>
                </Row>
                <Row>
                    <Col md="6">
                        <Password 
                            id="password1"
                            label="Password"
                            validInput = { state.password1IsValid }
                            required = { true }
                            className="ctrl md"
                            type = "text"
                            name  = "password1"
                            visibilityControl = { true }
                        />
                    </Col>
                    <Col md="6">
                        <Password 
                            id="password2"
                            label="Confirm Password"
                            validInput = { state.password2IsValid }
                            required = { true }
                            className="ctrl md"
                            type = "text"
                            name  = "password2"
                            visibilityControl = { false }
                        />
                    </Col>
                </Row>
                <Row>
                    <p>Don't have an account? <a href="/" className="text-signup">Sign In</a></p>
                </Row>
            </form>
        </div>
    )
}

export default Signup
