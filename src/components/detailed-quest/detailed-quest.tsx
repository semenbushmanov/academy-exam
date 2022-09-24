import { useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../hooks/index';
import { useQuestFetch } from 'hooks/use-quest-fetch';
import { getOrderStatus } from '../../store/quests-data/selectors';
import { RequestStatus } from 'const';
import PageNotFound from 'components/page-not-found/page-not-found';
import LoadingSpinner from 'components/loading-spinner/loading-spinner';
import { BookingModal } from './components/components';
import { MainLayout } from 'components/common/common';
import { ReactComponent as IconClock } from 'assets/img/icon-clock.svg';
import { ReactComponent as IconPerson } from 'assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from 'assets/img/icon-puzzle.svg';
import * as S from './detailed-quest.styled';

const DetailedQuest = (): JSX.Element => {
  const { id } = useParams<{ id: string }>();
  const [isBookingModalOpened, setIsBookingModalOpened] = useState(false);  
  const [quest, status] = useQuestFetch(id);
  const isPosting = useAppSelector(getOrderStatus);

  const onBookingBtnClick = () => {
    setIsBookingModalOpened(true);
  };

  const onCloseBtnClick = useCallback(() => {
    setIsBookingModalOpened(false);
  }, []);

  if (!id || status === RequestStatus.Error) {
    return <PageNotFound />;
  }

  if (!quest || status === RequestStatus.Loading || isPosting) {
    return <LoadingSpinner />;
  }

  const { title, description, coverImg, type, level, peopleCount, duration } = quest;

  return (
    <MainLayout>
      <S.Main>
        <S.PageImage
          src={`/${coverImg}`}
          alt={`Квест ${title}`}
          width="1366"
          height="768"
        />
        <S.PageContentWrapper>
          <S.PageHeading>
            <S.PageTitle>{title}</S.PageTitle>
            <S.PageSubtitle>{type}</S.PageSubtitle>
          </S.PageHeading>

          <S.PageDescription>
            <S.Features>
              <S.FeaturesItem>
                <IconClock width="20" height="20" />
                <S.FeatureTitle>{`${duration} мин`}</S.FeatureTitle>
              </S.FeaturesItem>
              <S.FeaturesItem>
                <IconPerson width="19" height="24" />
                <S.FeatureTitle>{`${peopleCount[0]}–${peopleCount[peopleCount.length - 1]} чел`}</S.FeatureTitle>
              </S.FeaturesItem>
              <S.FeaturesItem>
                <IconPuzzle width="24" height="24" />
                <S.FeatureTitle>{level}</S.FeatureTitle>
              </S.FeaturesItem>
            </S.Features>

            <S.QuestDescription>
              {description}
            </S.QuestDescription>

            <S.QuestBookingBtn onClick={onBookingBtnClick}>
              Забронировать
            </S.QuestBookingBtn>
          </S.PageDescription>
        </S.PageContentWrapper>

        {isBookingModalOpened && <BookingModal onCloseBtnClick={onCloseBtnClick}/>}
      </S.Main>
    </MainLayout>
  );
};

export default DetailedQuest;
