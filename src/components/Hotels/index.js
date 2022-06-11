import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import useRoom from '../../hooks/api/useRoom';
import FormHotel from './FormHotel';
import ResumeHotelSelected from './ResumeHotelSelected';

export default function Hotels() {
  const { bed } = useRoom();

  return (
    <Container>
      <StyledTypography variant="h4">Escolha de hotel e quarto</StyledTypography>
      {(bed)? 
        <ResumeHotelSelected room={bed.room} hotel={bed.room.hotel}/>
        : <FormHotel/>}
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
