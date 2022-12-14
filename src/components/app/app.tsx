import { ThemeProvider } from 'styled-components';
import {
  Switch,
  Route,
  BrowserRouter as Router,
} from 'components/common/common';
import DetailedQuest from 'components/detailed-quest/detailed-quest';
import Contacts from 'components/contacts/contacts';
import Home from 'components/home/home';
import LoadingSpinner from '../loading-spinner/loading-spinner';
import PageNotFound from 'components/page-not-found/page-not-found';
import { appTheme } from './common';
import { useAppSelector } from '../../hooks';
import { getLoadingStatus } from '../../store/quests-data/selectors';
import { AppRoute } from 'const';
import * as S from './app.styled';

const App = (): JSX.Element => {
  const isDataLoading = useAppSelector(getLoadingStatus);

  if (isDataLoading) {
    return (
      <ThemeProvider theme={appTheme}>
        <S.GlobalStyle />
        <LoadingSpinner />
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider theme={appTheme}>
      <S.GlobalStyle />
      <Router>
        <Switch>
          <Route exact path={AppRoute.QuestWithIdParams}>
            <DetailedQuest />
          </Route>
          <Route exact path={AppRoute.Contacts}>
            <Contacts />
          </Route>
          <Route exact path={AppRoute.Home}>
            <Home />
          </Route>
          <Route path='*'>
            <PageNotFound />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
