import React, { Component } from 'react'
import { Formik } from 'formik'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';

export class Auth extends Component {
    render() {
        return (
            <div>
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
                >
                    {({values, handleChange, handleSubmit}) => (
                        <div>
                            <Form onSubmit={handleSubmit}>
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Email address"
                                    className="mb-3"
                                >
                                    <Form.Control name='email' type="email" placeholder="name@example.com"
                                    value={values.email}
                                    onChange={handleChange} />
                                </FloatingLabel>
                                <FloatingLabel controlId="floatingPassword" label="Password"
                                className="mb-3">
                                    <Form.Control name='password' type="password" placeholder="Password"
                                    value= {values.password}
                                    onChange={handleChange} />
                                </FloatingLabel>
                                <FloatingLabel controlId="floatingConfirmPassword" label="Confirm Password"
                                className="mb-3">
                                    <Form.Control name='passwordConfirm' type="password" placeholder="Confirm Password"
                                    value= {values.passwordConfirm}
                                    onChange={handleChange} />
                                </FloatingLabel>
                                <Button type='submit'  style={{ backgroundColor: '#B22222', borderColor:'#B22222'}}>Sign up
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