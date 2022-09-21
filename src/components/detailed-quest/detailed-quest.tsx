import { useState, useEffect } from 'react';
import { MainLayout } from 'components/common/common';
import { ReactComponent as IconClock } from 'assets/img/icon-clock.svg';
import { ReactComponent as IconPerson } from 'assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from 'assets/img/icon-puzzle.svg';
import * as S from './detailed-quest.styled';
import { BookingModal } from './components/components';
import { useParams } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../hooks/index';
import { getQuest, getQuestLoadingStatus } from '../../store/quests-data/selectors';
import { fetchQuestAction } from '../../store/api-actions';
import PageNotFound from 'components/page-not-found/page-not-found';
import LoadingSpinner from 'components/common/loading-spinner/loading-spinner';

const DetailedQuest = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { id } = useParams<{ id: string }>();
  const [isBookingModalOpened, setIsBookingModalOpened] = useState(false);
  const quest = useAppSelector(getQuest);
  const questLoadingStatus = useAppSelector(getQuestLoadingStatus);

  useEffect(() => {
      dispatch(fetchQuestAction({ id: id }));
  }, [id, dispatch]);

  if (questLoadingStatus) {
    return <LoadingSpinner />;
  }

  if (!id) {
    return <PageNotFound />;
  }

  if (!quest) {
    return <PageNotFound />;
  }
  
  const onBookingBtnClick = () => {
    setIsBookingModalOpened(true);
  };

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

        {isBookingModalOpened && <BookingModal />}
      </S.Main>
    </MainLayout>
  );
};

export default DetailedQuest;
