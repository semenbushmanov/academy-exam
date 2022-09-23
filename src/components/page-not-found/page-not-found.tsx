import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import * as S from './page-not-found.styled';

const PageNotFound = (): JSX.Element => (
  <S.PageContainer>    
    <S.FirstHeading>404</S.FirstHeading>
    <S.SecondHeading>Page not found</S.SecondHeading>
    <Link to={AppRoute.Home}>Back to the homepage</Link>
  </S.PageContainer>
);

export default PageNotFound;
