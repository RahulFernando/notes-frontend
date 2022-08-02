import React from "react";

// bootstrap
import { Form, Card } from "react-bootstrap";

// components
import Button from "../components/button/Button";

import classes from "./Auth.module.css";

const Auth = () => {
  return (
    <div className={classes.container}>
      <Form>
        <Card className={classes.card}>
          <Card.Title className={classes["card-title"]}>Sign In</Card.Title>
          <Card.Body className={classes["card-body"]}>
            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter password" />
            </Form.Group>
          </Card.Body>
          <Card.Footer className={classes["card-footer"]}>
            <Button>SignIn</Button>
          </Card.Footer>
        </Card>
      </Form>
    </div>
  );
};

export default Auth;
