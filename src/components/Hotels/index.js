import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import FormHotel from './FormHotel';
import Message from '../Message';
import ResumeHotelSelected from './ResumeHotelSelected';
import { useState } from 'react';
import useRoom from '../../hooks/api/useRoom';
import useEnrollment from '../../hooks/api/useEnrollment';
import { useEffect } from 'react';

export default function Hotels() {
  let changeHotel = {
    selected: false,
    lastHotel: {
      id: null,
      enrollmentId: null,
      roomId: null,
    },
  };
  const { bed } = useRoom();
  const [roomSelected, setRoomSelected] = useState(false);
  const { enrollment } = useEnrollment();
  const [changeHotelButton, setChangeHotelButton] = useState(changeHotel);

  useEffect(() => {
    if (bed) setRoomSelected(true);
  });

  return (
    <Container>
      <StyledTypography variant="h4">Escolha de hotel e quarto</StyledTypography>
      {enrollment?.payment ? (
        enrollment?.payment?.ticketAccomodation ? (
          <>
            {roomSelected && changeHotelButton.selected === false ? (
              <ResumeHotelSelected setChangeHotelClick={setChangeHotelButton} />
            ) : (
              <FormHotel
                setRoomSelected={setRoomSelected}
                changeHotelButton={changeHotelButton}
                setChangeHotelButton={setChangeHotelButton}
              />
            )}{' '}
          </>
        ) : (
          <Message
            text="Sua modalidade de ingresso não inclui hospedagem
        Prossiga para a escolha de atividades"
          />
        )
      ) : (
        <Message
          text="Você precisa ter confirmado pagamento antes
        de fazer a escolha de hospedagem"
        />
      )}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 37px;

`;

const StyledTypography = styled(Typography)`
  margin-bottom: 20px !important;
`;
