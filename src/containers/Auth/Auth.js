import React from 'react';
import classes from './Auth.module.scss';
import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Input/Input';
import { connect } from 'react-redux';
import auth from '../../redux/actions/auth';

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

class Auth extends React.Component {

    state = {
        isFormValid: false,
        formControlls: {
            email: {
                value: '',
                type: 'email',
                label: 'Email',
                errorMessage: 'Введите корректный email',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    email: true,
                },

            },
            password: {
                value: '',
                type: 'password',
                label: 'Пароль',
                errorMessage: 'Введите корректный пароль',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    minLength: 6,
                },
            },
        },
    };

    loginHenadler = () => {
        this.props.auth(
            this.state.formControlls.email.value,
            this.state.formControlls.password.value,
            true
        );
    };

    registerHenadler = () => {
        this.props.auth(
            this.state.formControlls.email.value,
            this.state.formControlls.password.value,
            false
        );
    };

    submitHandler = (event) => {
        event.preventDefault();
    };

    validateControl = (value, validation) => {
        if (!validation) {
            return true;
        };

        let isValid = true;
        if (validation.required) {
            isValid = value.trim() !== '' && isValid;
        };
        if (validation.email) {
            isValid = validateEmail(value);
        };
        if (validation.minLength) {
            isValid = value.length >= 6 && isValid;
        };

        return isValid;
    };

    onChangeHandler = (event, controlName) => {
        const formControlls = { ...this.state.formControlls };
        const control = { ...formControlls[controlName] };

        control.value = event.target.value;
        control.touched = true;
        control.valid = this.validateControl(control.value, control.validation);
        formControlls[controlName] = control;

        let isFormValid = true;
        Object.keys(formControlls).forEach(controlName => {
            isFormValid = formControlls[controlName].valid && isFormValid;
        })

        this.setState({
            formControlls, isFormValid
        });
    };

    renderInputs() {
        return Object.keys(this.state.formControlls).map((controlName, index) => {
            const control = this.state.formControlls[controlName];
            return (
                <Input
                    key={controlName + index}
                    type={control.type}
                    value={control.value}
                    label={control.label}
                    errorMessage={control.errorMessage}
                    valid={control.valid}
                    shouldValidate={!!control.validation}
                    touched={control.touched}
                    onChange={event => this.onChangeHandler(event, controlName)}
                />
            )
        })
    }

    render() {
        return (
            <div className={classes['Auth']}>
                <div>
                    <h1>Auth</h1>

                    <form className={classes['AuthForm']} onSubmit={this.submitHandler}>

                        {this.renderInputs()}

                        <Button
                            type='success'
                            onClick={this.loginHenadler}
                            disabled={!this.state.isFormValid}
                        >
                            Войти
                        </Button>
                        <Button
                            type='primary'
                            onClick={this.registerHenadler}
                            disabled={!this.state.isFormValid}
                        >
                            Зарегистрироваться
                        </Button>
                    </form>

                </div>
            </div>
        );
    };
};

function mapDispatchToProps(dispatch) {
    return {
        auth: (email, password, isLogin) => dispatch(auth(email, password, isLogin)),
    };
};

export default connect(null, mapDispatchToProps)(Auth);