import React from "react";

// bootstrap
import { Button as BtsButton } from 'react-bootstrap'

import classes from './Button.module.css'

const Button = ({ children }) => {
  return <BtsButton className={classes.btn}>{children}</BtsButton>;
};

export default Button;
