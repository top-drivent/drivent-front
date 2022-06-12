import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import FormHotel from './FormHotel';
import ResumeHotelSelected from './ResumeHotelSelected';
import { useState } from 'react';
import useRoom from '../../hooks/api/useRoom';
import { useEffect } from 'react';

export default function Hotels() {
  const { bed } = useRoom();
  const [roomSelected, setRoomSelected] = useState(false);
  const [changeHotelClick, setChangeHotelClick] = useState(false);
  useEffect(() => {
    if (bed) setRoomSelected(true);
  });

  // const changeHotel = (hotel) => { };
  console.log('trocado: ', changeHotelClick, roomSelected);
  return (
    <Container>
      <StyledTypography variant="h4">Escolha de hotel e quarto</StyledTypography>
      {roomSelected && changeHotelClick === false ? (
        <ResumeHotelSelected setChangeHotelClick={setChangeHotelClick} />
      ) : (
        <FormHotel setRoomSelected={setRoomSelected} />
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
