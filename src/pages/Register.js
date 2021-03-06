import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { FacebookLoginButton, TwitterLoginButton, InstagramLoginButton } from 'react-social-login-buttons';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import swal from 'sweetalert';


class Register extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name:"", 
            email: "",
            password: "" 
        };
      }

      onChangeFullNameHandler = (e) => {
        const name = e.target.value;
        this.setState({ name })
      }

      onChangeEmailHandler = (e) => {
        const email = e.target.value;
        this.setState({ email });
    }

    onChangePassHandler = (e) => {
        const password = e.target.value;
        this.setState({ password });
    }


    onSubmitHandler = async (e) => {
       e.preventDefault();
        const res = await Axios.post('api/user/register', this.state);
        if(res.data.user) {
            swal('Usuario creado con éxito', "Inicia sesión para completar el proceso", "success");
            this.props.history.push(`/login`);
        } else {
            swal(res.data)
            this.props.history.push(`/login`);
        };
    }


    render() {
        let form = {
            padding: '15px',
            margin: 'auto',
            display: "flex",
            justifyContent: "center"
        };
        return (
            <>
                <h3 className="text-center mt-3">Sign up</h3>
                <Form onSubmit={ this.onSubmitHandler } style={form} className="flex-md-row flex-column">
                    <div className="mr-3">
                        <FormGroup>
                            <Label>Full name</Label>
                            <Input onChange={ this.onChangeFullNameHandler } type="text" placeholder="Full name" />
                        </FormGroup>                
                        <FormGroup>
                            <Label>Email</Label>
                            <Input onChange={ this.onChangeEmailHandler } type="email" placeholder="Email" />
                        </FormGroup>
                        <FormGroup>
                            <Label>Password</Label>
                            <Input onChange={ this.onChangePassHandler } type="password" placeholder="Password" />
                        </FormGroup>
                        <Button type="submit" className="btn-lg btn-dark btn-block">Log in</Button>
                    </div>
                    <div className="ml-3 mt-3">
                        <div className="text-center pt-3">
                            Or continue with your social account
                        </div>
                        <FacebookLoginButton className="my-3" />
                        <TwitterLoginButton className="my-3" />
                        <InstagramLoginButton className="my-3" />
                        <div className="text-center">
                            <Link className="text-primary" to="/login">Log in</Link>
                            <span className="p-2">|</span>
                            <a className="text-primary" href="sign-up">Forgot Password?</a>
                        </div>
                    </div>
                </Form>
            </>
        );
    }
}

export default Register;