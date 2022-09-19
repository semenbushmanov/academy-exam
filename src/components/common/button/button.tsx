import { ComponentProps } from 'react';
import * as S from './button.styled';

type ButtonProps = ComponentProps<typeof S.Button>;

const Button = ({ children, ...props }: ButtonProps): JSX.Element => (
  <S.Button {...props}>{children}</S.Button>
);

export default Button;
