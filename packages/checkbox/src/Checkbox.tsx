import React from 'react';

type CheckboxProps = { children: string };

export const Checkbox = ({ children, ...rest }: CheckboxProps) => (
  <label>
    {children}
    <input type="checkbox" {...rest} />
  </label>
);
