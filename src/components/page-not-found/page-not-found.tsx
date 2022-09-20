import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

const PageNotFound = (): JSX.Element => (
  <div>    
    <h1>404</h1>
    <h2>Page not found</h2>
    <Link to={AppRoute.Home}>Back to the homepage</Link>
  </div>
);

export default PageNotFound;
