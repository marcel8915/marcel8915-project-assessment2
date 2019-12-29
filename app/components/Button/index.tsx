/**
 *
 * Button.js
 *
 * A common button, if you pass it a prop "route" it'll render a link to a react-router route
 * otherwise it'll render a link with an onclick
 */

import React, { Children, ReactNode } from 'react';

import StyledButton from './StyledButton';
import Wrapper from './Wrapper';

export interface Props {
  onClick?(): void;
  children?: ReactNode;
  [x: string]: any;
}
const Button = ({ color, onClick, children, ...rest }: Props) => {
  const bgColor = color === 'secondary' ? '#262626' : '#3333ff';

  return (
    <Wrapper>
      <StyledButton type="button" onClick={onClick} style={{ background: bgColor}} {...rest}>
        {Children.toArray(children)}
      </StyledButton>
    </Wrapper>
  );
};

export default Button;
