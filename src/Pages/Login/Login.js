import React, { useState } from "react";
import {Form} from "react-bootstrap";
import {Button} from "react-bootstrap";
import{useHistory} from "react-router-dom";
import "./Login.css";

function Login (){
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    const history = useHistory();
    function login (){
        alert("Bem vindo!" +email)
        history.push("home");
    }
return (
<div className = "base">
<div className ="container">
    <div>
<h1 >Quick notes</h1>
<Form className ="inputs">
<Form.Group controlId="formBasicEmail">
    <Form.Control type="email" placeholder="Email" onChange = {(e) => setEmail(e.target.value)} />
  </Form.Group>
  <Form.Group controlId="senha">
    <Form.Control type="password" placeholder="Senha" onChange = {(e) => setPassword(e.target.value)} />
  </Form.Group>
  <Button variant="primary" onClick ={() => login()}>Login</Button>{' '}
</Form>
</div>
</div>
</div>
)
}
export default Login;