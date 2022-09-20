import {
  MainLayout,
  PageTitle,
  PageHeading,
  PageSubtext,
} from 'components/common/common';
import { QuestsCatalog } from './components/components';
import * as S from './home.styled';
import { useAppSelector } from '../../hooks/index';
import { getQuests } from '../../store/quests-data/selectors';

const HomePage = (): JSX.Element => {
  const quests = useAppSelector(getQuests);

  return (
    <MainLayout>
      <S.Main forwardedAs="main">
        <PageHeading>
          <PageTitle>Выберите тематику</PageTitle>
          <PageSubtext>квесты в Санкт-Петербурге</PageSubtext>
        </PageHeading>
        <QuestsCatalog quests={quests}/>
      </S.Main>
    </MainLayout>
  );
};

export default HomePage;
