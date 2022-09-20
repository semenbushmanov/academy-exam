import { ThemeProvider } from 'styled-components';
import {
  Switch,
  Route,
  BrowserRouter as Router,
} from 'components/common/common';
import DetailedQuest from 'components/detailed-quest/detailed-quest';
import Contacts from 'components/contacts/contacts';
import Home from 'components/home/home';
import { appTheme } from './common';
import * as S from './app.styled';
import { useAppSelector } from '../../hooks';
import { getLoadingStatus } from '../../store/quests-data/selectors';
import LoadingSpinner from '../common/loading-spinner/loading-spinner';

const App = (): JSX.Element => {
  const isDataLoading = useAppSelector(getLoadingStatus);

  if (isDataLoading) {
    return (
      <LoadingSpinner />
    );
  }

  return (
    <ThemeProvider theme={appTheme}>
      <S.GlobalStyle />
      <Router>
        <Switch>
          <Route exact path="/quest">
            <DetailedQuest />
          </Route>
          <Route exact path="/contacts">
            <Contacts />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
