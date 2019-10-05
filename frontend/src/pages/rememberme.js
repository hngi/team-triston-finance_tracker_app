import React, { useState, useContext } from 'react';
import { Button, Alert } from 'reactstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../UserContext';
import { Password, InputField } from '../components';
import Facebook from "../components/Facebook";
import Loader from "../components/Loader";
import bg from '../images/login-bg.jpg';
import '../styles/Login.css';



function Login(props) {

    const [values, set] = useState({
        showPassword:false,
        username:"",
        password:"",
        validUserName:false,
        validPassword:false,
        alert:false,
        alertText:"",
        alertColor:"",
        loading:false,
    })

    const { updateUser } = useContext(UserContext);

    const handleInput = ({ target, valid })=>{
        const { name, value } = target;
        const formdata = {};
        formdata[name] = value;
        formdata[name === "username" ? "validUserName": "validPassword"] = valid;
        set(values => ({ ...values,...formdata }));
    }

    const handleSubmit = async ()=>{
        const { username, password, validPassword, loading } = values;

        if(!username || !validPassword || loading) return;
        try {
            set(values => ({ ...values, loading:true }));
            const response = await fetch("https://team-triton.herokuapp.com/login/",{
                method: 'POST',
                mode: 'cors',
                cache: 'no-cache',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  username,
                  password
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
                    data[Object.keys(data)[0]]
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
    $(function() {

        if (localStorage.chkbx && localStorage.chkbx != '') {
            $('#remember_me').attr('checked', 'checked');
            $('#username').val(localStorage.usrname);
            $('#pass').val(localStorage.pass);
        } else {
            $('#remember_me').removeAttr('checked');
            $('#username').val('');
            $('#pass').val('');
        }

        $('#remember_me').click(function() {

            if ($('#remember_me').is(':checked')) {
                // save username and password
                localStorage.usrname = $('#username').val();
                localStorage.pass = $('#pass').val();
                localStorage.chkbx = $('#remember_me').val();
            } else {
                localStorage.usrname = '';
                localStorage.pass = '';
                localStorage.chkbx = '';
            }
        });
    });

    return (
        <div className="page-container">
            <div className="page-group form-area">
                <form onSubmit = {e => { e.preventDefault() }} >
                    <h5>Welcome back to TritonFinApp!</h5>
                    <Alert
                        isOpen={ values.alert }
                        toggle={ ()=> set(v=>({...v, alert:false})) }
                        color = { values.alertColor }
                >
                        { values.alertText }
                    </Alert>
                    <InputField
                        className="ctrl md"
                        type="text"
                        name="username"
                        id="user-name"
                        onKeyUp = { handleInput }
                        autoComplete = "username"
                        label = "User Name"
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
                    <div class="container">
                    <label class="checkbox">
                          <input type="checkbox" value="remember-me" id="remember_me"> Remember me
                    </label>
    
                    </div>

                    <Button
                        color="success"
                        size="lg"
                        block
                        onClick = { handleSubmit }
                        type = "button"
                        disabled = { values.loading ? true :  (!values.username || !values.validPassword) }
                    >
                        Sign In
                        { values.loading && <Loader width="30px" />}
                    </Button>
                    {/* facebook button */}
                    <div>
                    < Facebook/>
                    </div>

                    <p><Link to="/faq-page" className="faq">FAQ Page</Link></p>

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
                    <Button
                        className="inverted-white get-started"
                        outline
                        color="primary"
                        onClick = { ()=> props.history.push("/get-started") }
                        >Get Started
                    </Button>
                </div>
            </div>
        </div>
    )
}
export default Login

    © 2019 GitHub, Inc.
    Terms
    Privacy
    Security
    Status
    Help

    Contact GitHub
    Pricing
    API
    Training
    Blog
    About

    https://github.com/Bisola-Adediran/team-triton-finance_tracker_app/pull/1