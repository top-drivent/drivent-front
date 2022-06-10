import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import useHotel from '../../hooks/api/useHotel';
import HotelInfo from './HotelInfo';

export default function Hotels() {
  const { hotels } = useHotel();

  return (
    <Container>
      <StyledTypography variant="h4">Escolha de hotel e quarto</StyledTypography>
      <StyleLabel>Primeiro, escolha seu hotel</StyleLabel>
      <List>
        {hotels?.map((el) => (
          <HotelInfo key={el.id} data={el} />
        ))}
      </List>
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

const List = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: row;
  align-items: start;
  gap: 37px;
`;

const StyledTypography = styled(Typography)`
  margin-bottom: 20px !important;
`;

const StyleLabel = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  font-weight: 400;
  color: #8e8e8e;
`;
