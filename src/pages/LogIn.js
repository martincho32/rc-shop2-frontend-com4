import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { FacebookLoginButton, TwitterLoginButton, InstagramLoginButton } from 'react-social-login-buttons';
import { Link } from 'react-router-dom';


class Login extends React.Component {
    render() {
        let form = {
            padding: '15px',
            margin: 'auto',
            display: "flex",
            justifyContent: "center"
        };
        return (
            <>
                <h3 className="text-center mt-3">Log in</h3>
                <Form style={form} className="flex-md-row flex-column">
                    <div className="mr-3 mt-5">               
                        <FormGroup>
                            <Label>Email</Label>
                            <Input type="email" placeholder="Email" />
                        </FormGroup>
                        <FormGroup>
                            <Label>Password</Label>
                            <Input type="password" placeholder="Email" />
                        </FormGroup>
                        <Button className="btn-lg btn-dark btn-block">Log in</Button>
                    </div>
                    <div className="ml-3 mt-3">
                        <div className="text-center pt-3">
                            Or continue with your social account
                        </div>
                        <FacebookLoginButton className="my-3" />
                        <TwitterLoginButton className="my-3" />
                        <InstagramLoginButton className="my-3" />
                        <div className="text-center">
                            <Link className="text-primary" to="/register">Sign up</Link>
                            <span className="p-2">|</span>
                            <a className="text-primary" href="sign-up">Forgot Password?</a>
                        </div>
                    </div>
                </Form>
            </>
        );
    }
}

export default Login;