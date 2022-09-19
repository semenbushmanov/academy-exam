import * as S from './container.styled';

type ContainerProps = {
  children: JSX.Element | JSX.Element[];
  props?: any;
}

const Container = ({ children, ...props }: ContainerProps): JSX.Element => (
  <S.Container {...props}>{children}</S.Container>
);

export default Container;
