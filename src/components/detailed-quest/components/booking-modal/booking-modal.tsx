import * as S from './booking-modal.styled';
import { ReactComponent as IconClose } from 'assets/img/icon-close.svg';
import { useState, ChangeEvent, FormEvent } from 'react';
import { useAppDispatch } from 'hooks';
import { postOrderAction } from 'store/api-actions';
import { toast } from 'react-toastify';

type BookingModalProps = {
  onCloseBtnClick: () => void;
};

const PHONE_NUMBER_LENGTH = 10;

const BookingModal = ({onCloseBtnClick}: BookingModalProps): JSX.Element => {
  const dispatch = useAppDispatch();
  const [ currentUserInput, setCurrentUserInput ] = useState({
    name: '',
    phone: '',
    peopleCount: '',
    isLegal: false,
  });

  const handleNameChange = ({target}: ChangeEvent<HTMLInputElement>) => {
    setCurrentUserInput({...currentUserInput, name: target.value});
  };

  const handlePhoneChange = ({target}: ChangeEvent<HTMLInputElement>) => {
    setCurrentUserInput({...currentUserInput, phone: target.value});
  };

  const handlePeopleCountChange = ({target}: ChangeEvent<HTMLInputElement>) => {
    setCurrentUserInput({...currentUserInput, peopleCount: target.value});
  };

  const handleLegalStatusChange = ({target}: ChangeEvent<HTMLInputElement>) => {
    setCurrentUserInput({...currentUserInput, isLegal: target.checked});
  };

  const handleSubmit = (evt: FormEvent) => {
    evt.preventDefault();

    const digitsOnlyPattern = /^[0-9]+$/;
    const isPeopleCountValid = digitsOnlyPattern.test(currentUserInput.peopleCount);
    const isPhoneValid = digitsOnlyPattern.test(currentUserInput.phone);

    if (!isPeopleCountValid || !isPhoneValid) {
      toast.warn('Phone number and people number fields must contain only digits');
      return;
    }

    if (currentUserInput.phone.length !== PHONE_NUMBER_LENGTH) {
      toast.warn('Phone number must consist of 10 digits');
      return;
    }

    const peopleCountNumber = Number(currentUserInput.peopleCount);

    if (peopleCountNumber <= 0) {
      toast.warn('The number of people should be positive');
      return;
    }

    if (currentUserInput.isLegal) {
      const userOrder = {...currentUserInput, peopleCount: peopleCountNumber};
      dispatch(postOrderAction({order: userOrder}));
    }
  };

  return (
    <S.BlockLayer>
      <S.Modal>
        <S.ModalCloseBtn onClick={onCloseBtnClick}>
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
