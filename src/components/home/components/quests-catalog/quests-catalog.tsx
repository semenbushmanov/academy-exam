import * as S from './quests-catalog.styled';
import { ReactComponent as IconAllQuests } from 'assets/img/icon-all-quests.svg';
import { ReactComponent as IconAdventures } from 'assets/img/icon-adventures.svg';
import { ReactComponent as IconHorrors } from 'assets/img/icon-horrors.svg';
import { ReactComponent as IconMystic } from 'assets/img/icon-mystic.svg';
import { ReactComponent as IconDetective } from 'assets/img/icon-detective.svg';
import { ReactComponent as IconScifi } from 'assets/img/icon-scifi.svg';
import QuestItem from './quest-item';
import { Quests } from 'types/quest';
import { QuestType } from 'const';
import { useState } from 'react';

type QuestCatalogProps = {
  quests: Quests;
};

const QuestsCatalog = ({ quests }: QuestCatalogProps): JSX.Element => {
  const [ currentQuestType, setCurrentQuestType ] = useState(QuestType.All);
  let filteredQuests = quests;

  if (currentQuestType !== QuestType.All) {
    filteredQuests = quests.filter((quest) => quest.type === currentQuestType);
  }

  return (
    <>
      <S.Tabs>
        <S.TabItem>
          <S.TabBtn 
            isActive={currentQuestType === QuestType.All ? true : false} 
            onClick={() => setCurrentQuestType(QuestType.All)}
          >
            <IconAllQuests />
            <S.TabTitle>Все квесты</S.TabTitle>
          </S.TabBtn>
        </S.TabItem>

        <S.TabItem>
          <S.TabBtn 
            isActive={currentQuestType === QuestType.Adventures ? true : false}
            onClick={() => setCurrentQuestType(QuestType.Adventures)}
          >
            <IconAdventures />
            <S.TabTitle>Приключения</S.TabTitle>
          </S.TabBtn>
        </S.TabItem>

        <S.TabItem>
          <S.TabBtn 
            isActive={currentQuestType === QuestType.Horror ? true : false}
            onClick={() => setCurrentQuestType(QuestType.Horror)}
          >
            <IconHorrors />
            <S.TabTitle>Ужасы</S.TabTitle>
          </S.TabBtn>
        </S.TabItem>

        <S.TabItem>
          <S.TabBtn 
            isActive={currentQuestType === QuestType.Mystic ? true : false}
            onClick={() => setCurrentQuestType(QuestType.Mystic)}
          >
            <IconMystic />
            <S.TabTitle>Мистика</S.TabTitle>
          </S.TabBtn>
        </S.TabItem>

        <S.TabItem>
          <S.TabBtn 
            isActive={currentQuestType === QuestType.Detective ? true : false}
            onClick={() => setCurrentQuestType(QuestType.Detective)}
          >
            <IconDetective />
            <S.TabTitle>Детектив</S.TabTitle>
          </S.TabBtn>
        </S.TabItem>

        <S.TabItem>
          <S.TabBtn 
            isActive={currentQuestType === QuestType.SciFi ? true : false}
            onClick={() => setCurrentQuestType(QuestType.SciFi)}
          >
            <IconScifi />
            <S.TabTitle>Sci-fi</S.TabTitle>
          </S.TabBtn>
        </S.TabItem>
      </S.Tabs>

      <S.QuestsList>
        {filteredQuests.map((quest) => (
          <QuestItem
            key={quest.id}
            id={quest.id}
            title={quest.title}
            previewImg={quest.previewImg}
            level={quest.level}
            peopleCount={quest.peopleCount}
          />
        ))}
      </S.QuestsList>
    </>
  );
};

export default QuestsCatalog;
