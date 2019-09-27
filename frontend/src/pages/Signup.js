import React, { useState } from 'react'
import { Button, Row, Col, Container } from 'reactstrap';
import { InputField, EmailField, Password  } from "../components";
import { Link } from 'react-router-dom';
import '../styles/Signup.css';

function Signup() {

    const [ state, set ] = useState({
        firstnameIsValid:true,
        lastnameIsValid:true
    })

    const handleInput = ()=>{

    }

    return (
        <div>
            <Container>
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
                            onClick = { handleInput }
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
                            onClick = { handleInput }
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
                            onClick = { handleInput }
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
                            onClick = { handleInput }
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
                            onClick = { handleInput }
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
                            onClick = { handleInput }
                        />
                    </Col>
                </Row>
                <Button color="success"  block>Sign Up</Button>
                <Row>
                    <p>Have an account? <Link to="/" className="text-signup">Sign In</Link></p>
                </Row>
            </form>
            </Container>
        </div>
    )
}

export default Signup
