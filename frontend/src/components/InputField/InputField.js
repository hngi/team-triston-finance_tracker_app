import React from 'react'
import { FormGroup, Label, Input } from 'reactstrap';
import styles from "./Input.module.css";


function InputField(props) {

    let { id, validInput, formGroupClass, label, errorText, required, ...others } = props;
    
    validInput = validInput || true;

    errorText = required ? `${ label.toLowercase() } is required!` : errorText;

    return (
        <FormGroup className = { styles.formGroup + " " + ( formGroupClass || "" ) }>
            <Label for= { `${id}` } >{ label }</Label>
            <Input 
                id = { id }
                {...others}
             />
            {
                validInput 
                ? null 
                :<span className = { styles.error }>{ errorText }</span>  
            }
        </FormGroup>
    )
}

export default InputField
