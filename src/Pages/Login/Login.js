import React from "react";
import {Form} from "react-bootstrap";
import {Button} from "react-bootstrap";
import "./Login.css";

function Login (){
return (
<div className = "base">
<div className ="container">
    <div>
<h1 >Quick notes</h1>
<Form className ="inputs">
<Form.Group controlId="formBasicEmail">
    <Form.Control type="email" placeholder="Email" />
  </Form.Group>
  <Form.Group controlId="senha">
    <Form.Control type="password" placeholder="Senha" />
  </Form.Group>
  <Button variant="primary">Login</Button>{' '}
</Form>
</div>
</div>
</div>
)
}
export default Login;