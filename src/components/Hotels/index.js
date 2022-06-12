import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import FormHotel from './FormHotel';
import ResumeHotelSelected from './ResumeHotelSelected';
import { useState } from 'react';
import useRoom from '../../hooks/api/useRoom';
import { useEffect } from 'react';

export default function Hotels() {
  let changeHotel = {
    selected: false,
    lastHotel: {
      id: null,
      enrollmentId: null,
      roomId: null,
    }
  };
  const { bed } = useRoom();
  const [roomSelected, setRoomSelected] = useState(false);
  const [changeHotelButton, setChangeHotelButton] = useState(changeHotel);

  useEffect(() => {
    if (bed) setRoomSelected(true);
  });

  return (
    <Container>
      <StyledTypography variant="h4">Escolha de hotel e quarto</StyledTypography>
      {roomSelected && changeHotelButton.selected === false ? (
        <ResumeHotelSelected setChangeHotelClick={setChangeHotelButton} />
      ) : (
        <FormHotel setRoomSelected={setRoomSelected} changeHotelButton={changeHotelButton} setChangeHotelButton={setChangeHotelButton} />
      )}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;

  padding: 0 0 50px 0;

  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 37px;
`;

const StyledTypography = styled(Typography)`
  margin-bottom: 20px !important;
`;
