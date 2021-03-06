import React from "react";
import classes from './Input.module.scss';

function isInvalid({ valid, shouldValidate, touched }) {
    return !valid && shouldValidate && touched
}

const Input = props => {
    const cls = [classes['Input']];
    const inputType = props.type || 'text';
    const htmlFor = `${inputType}-${Math.random()}`;

    if (isInvalid(props)) {
        cls.push(classes['invalid']);
    };

    return (
        <div className={cls.join(' ')}>
            <label htmlFor={htmlFor} >{props.label}</label>
            <input
                type={inputType}
                id={htmlFor}
                value={props.value}
                onChange={props.onChange}
            />
            {
                isInvalid(props) ? <span>{props.errorMessage}</span> : null
            }

        </div>
    );
};

export default Input;