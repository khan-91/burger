import { Component } from 'react'
import { Formik } from 'formik'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { auth } from '../../Redux/authActionCreators';
import { connect } from 'react-redux';
import Alert from 'react-bootstrap/Alert';
import Spinner from '../Spinner/Spinner';

const mapDispatchToProps = dispatch => {
    return {
        auth: (email, password, mode) => dispatch(auth(email, password, mode))
    }
}

const mapStateToProps = state => {
    return {
        authLoading: state.authLoading,
        authFailedMsg: state.authFailedMsg,
    }
}
export class Auth extends Component {
    state = {
        mode: "Sign Up"
    }
    switchModeHandler = () => {
        this.setState({ mode: this.state.mode === "Sign Up" ? "Login" : "Sign Up" })
    }
    render() {
        let error = null;
        if(this.props.authFailedMsg !== null){
            error = <Alert variant='danger'>
                {this.props.authFailedMsg}
            </Alert>
        }
        let form = null;
        if (this.props.authLoading) {
            form = <Spinner />
        } else {
            form = (
                <Formik
                    initialValues={
                        {
                            email: "",
                            password: "",
                            passwordConfirm: "",
                        }
                    }
                    onSubmit={
                        (values) => {
                            this.props.auth(values.email, values.password, this.state.mode)
                        }
                    }

                    validate={(values) => {
                        const errors = {};

                        if (!values.email) {
                            errors.email = 'Required';
                        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(values.email)) {
                            errors.email = 'Invalid email address';
                        }

                        if (!values.password) {
                            errors.password = 'Required';
                        } else if (values.password.length < 4) {
                            errors.password = 'Must be atleast 4 charcters!';
                        }

                        if (this.state.mode === "Sign Up") {
                            if (!values.passwordConfirm) {
                                errors.passwordConfirm = 'Required';
                            } else if (values.password !== values.passwordConfirm) {
                                errors.passwordConfirm = 'Password does not match!!!';
                            }
                        }
                        return errors;
                    }}

                >
                    {({ values, handleChange, handleSubmit, errors }) => (
                        <div style={{
                            border: "1px solid grey",
                            padding: "15px",
                            borderRadius: "5px",
                        }}>
                            <Button className='mb-3 btn btn-lg' onClick={this.switchModeHandler} type='button' style={{ backgroundColor: '#B22222', borderColor: '#B22222', width: "100%" }}>Switch to {this.state.mode === "Sign Up" ? "Login" : "Sign Up"}
                            </Button>
                            <Form onSubmit={handleSubmit}>
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Email address"
                                    className="mb-3"
                                >
                                    <Form.Control name='email' type="email" placeholder="name@example.com"
                                        value={values.email}
                                        onChange={handleChange} />
                                    <span style={{ color: 'red' }}>{errors.email}</span>
                                </FloatingLabel>
                                <FloatingLabel controlId="floatingPassword" label="Password"
                                    className="mb-3">
                                    <Form.Control name='password' type="password" placeholder="Password"
                                        value={values.password}
                                        onChange={handleChange} />
                                    <span style={{ color: 'red' }}>{errors.password}</span>
                                </FloatingLabel>
                                {this.state.mode === "Sign Up" ? <div>
                                    <FloatingLabel controlId="floatingConfirmPassword" label="Confirm Password"
                                        className="mb-3">
                                        <Form.Control name='passwordConfirm' type="password" placeholder="Confirm Password"
                                            value={values.passwordConfirm}
                                            onChange={handleChange} />
                                        <span style={{ color: 'red' }}>{errors.passwordConfirm}</span>
                                    </FloatingLabel>
                                </div> : null}

                                <Button type='submit' style={{ backgroundColor: '#B22222', borderColor: '#B22222' }}>{this.state.mode === "Sign Up" ? "Sign Up" : "Login"}
                                </Button>
                            </Form>
                        </div>
                    )}

                </Formik>
            )
        }
        return (
            <div>
                {error}
                {form}
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth)