import * as S from './booking-modal.styled';
import { ReactComponent as IconClose } from 'assets/img/icon-close.svg';
import { useState, ChangeEvent, FormEvent } from 'react';
import { useAppDispatch } from 'hooks';
import { postOrderAction } from 'store/api-actions';

const BookingModal = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const [ currentUserInput, setCurrentUserInput ] = useState({
    name: '',
    phone: '',
    peopleCount: 0,
    isLegal: false,
  });

  const handleNameChange = ({target}: ChangeEvent<HTMLInputElement>) => {
    setCurrentUserInput({...currentUserInput, name: target.value});
  };

  const handlePhoneChange = ({target}: ChangeEvent<HTMLInputElement>) => {
    setCurrentUserInput({...currentUserInput, phone: target.value});
  };

  const handlePeopleCountChange = ({target}: ChangeEvent<HTMLInputElement>) => {
    setCurrentUserInput({...currentUserInput, peopleCount: Number(target.value)});
  };

  const handleLegalStatusChange = ({target}: ChangeEvent<HTMLInputElement>) => {
    setCurrentUserInput({...currentUserInput, isLegal: target.checked});
  };

  const handleSubmit = (evt: FormEvent) => {
    evt.preventDefault();

    if (currentUserInput.isLegal) {
      dispatch(postOrderAction({order: currentUserInput}));
    }
  };

  return (
    <S.BlockLayer>
      <S.Modal>
        <S.ModalCloseBtn>
          <IconClose width="16" height="16" />
          <S.ModalCloseLabel>Закрыть окно</S.ModalCloseLabel>
        </S.ModalCloseBtn>
        <S.ModalTitle>Оставить заявку</S.ModalTitle>
        <S.BookingForm
          action="https://echo.htmlacademy.ru"
          method="post"
          id="booking-form"
          onSubmit={handleSubmit}
        >
          <S.BookingField>
            <S.BookingLabel htmlFor="booking-name">Ваше Имя</S.BookingLabel>
            <S.BookingInput
              type="text"
              id="booking-name"
              name="booking-name"
              placeholder="Имя"
              value={currentUserInput.name}
              onChange={handleNameChange}
              required
            />
          </S.BookingField>
          <S.BookingField>
            <S.BookingLabel htmlFor="booking-phone">
              Контактный телефон
            </S.BookingLabel>
            <S.BookingInput
              type="tel"
              id="booking-phone"
              name="booking-phone"
              placeholder="Телефон"
              value={currentUserInput.phone}
              onChange={handlePhoneChange}
              required
            />
          </S.BookingField>
          <S.BookingField>
            <S.BookingLabel htmlFor="booking-people">
              Количество участников
            </S.BookingLabel>
            <S.BookingInput
              type="number"
              id="booking-people"
              name="booking-people"
              placeholder="Количество участников"
              value={currentUserInput.peopleCount}
              onChange={handlePeopleCountChange}
              required
            />
          </S.BookingField>
          <S.BookingSubmit type="submit">Отправить заявку</S.BookingSubmit>
          <S.BookingCheckboxWrapper>
            <S.BookingCheckboxInput
              type="checkbox"
              id="booking-legal"
              name="booking-legal"
              checked={currentUserInput.isLegal ? true : false}
              onChange={handleLegalStatusChange}
              required
            />
            <S.BookingCheckboxLabel
              className="checkbox-label"
              htmlFor="booking-legal"
            >
              <S.BookingCheckboxText>
                Я согласен с{' '}
                <S.BookingLegalLink href="#">
                  правилами обработки персональных данных и пользовательским
                  соглашением
                </S.BookingLegalLink>
              </S.BookingCheckboxText>
            </S.BookingCheckboxLabel>
          </S.BookingCheckboxWrapper>
        </S.BookingForm>
      </S.Modal>
    </S.BlockLayer>
  );
};

export default BookingModal;
