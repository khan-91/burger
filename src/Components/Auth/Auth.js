import React, { Component } from 'react'
import { Formik } from 'formik'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';

export class Auth extends Component {
    render() {
        return (
            <div>
                {/* <h3>Signup</h3> */}
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
                            console.log(values);
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

                        if (!values.passwordConfirm) {
                            errors.passwordConfirm = 'Required';
                        } else if (values.password !== values.passwordConfirm) {
                            errors.passwordConfirm = 'Password does not match!!!';
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
                                <FloatingLabel controlId="floatingConfirmPassword" label="Confirm Password"
                                    className="mb-3">
                                    <Form.Control name='passwordConfirm' type="password" placeholder="Confirm Password"
                                        value={values.passwordConfirm}
                                        onChange={handleChange} />
                                    <span style={{ color: 'red' }}>{errors.passwordConfirm}</span>
                                </FloatingLabel>
                                <Button type='submit' style={{ backgroundColor: '#B22222', borderColor: '#B22222' }}>Sign up
                                </Button>
                            </Form>
                        </div>
                    )}

                </Formik>
            </div>
        )
    }
}

export default Auth