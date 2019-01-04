import React from "react";

import styles from "./Button.css";
type ButtonProps = {children: string}

export const Button = ({ children, ...rest }: ButtonProps) => (<button className={styles.button} {...rest}>{children}</button>)