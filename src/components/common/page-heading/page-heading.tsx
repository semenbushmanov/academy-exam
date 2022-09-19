import * as S from './page-heading.styled';

type PageHeadingProps = {
  children: JSX.Element | JSX.Element[];
  props?: any;
}

const PageHeading = ({ children, ...props }: PageHeadingProps): JSX.Element => (
  <S.PageHeading {...props}>{children}</S.PageHeading>
);

export default PageHeading;
