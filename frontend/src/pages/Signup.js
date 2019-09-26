import React, { useState, useContext } from 'react'
import { Button, Row, Col, Container } from 'reactstrap';
import { InputField, EmailField, Password  } from "../components";
import { UserContext } from '../UserContext';
import { Link } from 'react-router-dom';
import "../styles/Sigup.css";

function Signup(props) {

    const [ state, set ] = useState({
        fullname:"",
        username:"",
        email:"",
        phonenumber:"",
        password1:"",
        password2:"",
        fullnameIsValid:true,
        usernameIsValid:true,
        phonenumberIsValid:true,
        emailIsValid:true,
        password1IsValid:true
    })

    const { user, updateUser } = useContext(UserContext);

    const emailRef = React.createRef();

    const handleInput = ({ target, valid })=>{
        const { name, value } = target;
        if(name === "password1" || name === "email"){
            set(values=> ({...values, [name]:value, [`${name}IsValid`]: valid }));
        }else{
            console.log(!!value)
            set(values=> ({...values, [name]:value, [`${name}IsValid`]: !!value }));
        }
    }

    const handleConfirmPassword = ({ target:{ value, name } })=>{

    }

    const validateForm = ()=>{
        let fields = ["fullname", "username", "email", "phonenumber"]
        let newState = {};
        fields.map(fieldname =>{
            console.log(!state[fieldname] , state[fieldname] )
            return !state[fieldname] && (state[`${fieldname}IsValid`] = false);
        })
        set(state => ({...state, ...newState}));




    }

    const handleSubmit = async ()=>{
        // if(!validateForm()) return;
        let { fullname,username,email,phonenumber,password1,password2 } = state;

        try {

            const response = await fetch("https://team-trion.herokuapp.com/register/",{
                method: 'POST', 
                mode: 'cors', 
                cache: 'no-cache',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    first_name: fullname.split(" ")[0],
                    last_name: fullname.split(" ")[1] || "o",
                    username,
                    email,
                    phonenumber,
                    password1,
                    password2:password1
                })
            });

            let { status } = response;
            const data = await response.json();

            if(status === 201 || status === 200 ){
                const { token } = data;
                const payload = {
                    isLoggedIn:true,
                    userData:{
                        username,
                        token
                    }
                }
                updateUser(payload);
                localStorage["_authuser"] = JSON.stringify(payload);
                props.history.push("/report");
            }else{
                let message = Array.isArray(data) 
                    ?
                    data[0]
                    :
                    data[Object.keys(data)[0][0]]
                set(values=>({
                    ...values,
                    loading:false,
                    alert:true,
                    alertColor:"danger",
                    alertText: message || "An Error Occured"
                }))
            } 
        } catch (error) {
            
        }

    }

    return (
        <div className="gContainer" >
            <Container className="form-wrap">
            <form>
                <Row>
                    <Col md="6" xs="12">
                        <InputField 
                            id="fullname"
                            label="Full Name"
                            validInput = { state.fullnameIsValid }
                            required = { true }
                            className="ctrl md"
                            type = "text"
                            name  = "fullname"
                            onKeyUp = { handleInput }
                        />
                    </Col>
                    <Col md="6" xs="12">
                        <InputField 
                            id="usernanme"
                            label="User Name"
                            validInput = { state.usernameIsValid }
                            required = { true }
                            className="ctrl md"
                            type = "text"
                            name  = "username"
                            onKeyUp = { handleInput }
                            autoComplete = "username"
                        />
                    </Col>
                </Row>
                <Row>
                    <Col md="6" xs="12">
                        <EmailField 
                            className="ctrl md" 
                            type="email" 
                            name="email" 
                            id="user-email"
                            onKeyUp = { handleInput }
                            inputRef ={ emailRef }
                        />
                    </Col>
                    <Col md="6" xs="12">
                        <InputField 
                            id="phone-number"
                            label="Phone Number"
                            validInput = { state.phonenumberIsValid }
                            required = { true }
                            className="ctrl md"
                            type = "number"
                            name  = "phonenumber"
                            onKeyUp = { handleInput }
                        />
                    </Col>
                </Row>
                <Row>
                    <Col md="6" xs="12">
                        <Password 
                            id="password1"
                            label="Password"
                            required = { true }
                            className="ctrl md"
                            type = "text"
                            name  = "password1"
                            visibilityControl = { false }
                            onKeyUp = { handleInput }
                        />
                    </Col>
                    <Col md="6" xs="12">
                        <Password 
                            id="password2"
                            label="Confirm Password"
                            required = { true }
                            className="ctrl md"
                            type = "text"
                            name  = "password2"
                            visibilityControl = { false }
                            onKeyUp = { handleConfirmPassword }
                        />
                    </Col>
                </Row>
                <Row>
                    <Col className="space-top-25" md="12">
                        <Button 
                            color="success"
                            block
                            onClick = { handleSubmit }>
                            Sign Up
                        </Button>
                    </Col>
                    <Col md="12">
                        <p className="mt-1">Already have an Account ? <Link to="/" className="text-signup">Sign In</Link></p>
                    </Col>
                </Row>
            </form>
            </Container>
        </div>
    )
}

export default Signup
