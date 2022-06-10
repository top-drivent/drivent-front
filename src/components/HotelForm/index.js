import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import Message from '../Message';
import useEnrollment from '../../hooks/api/useEnrollment';

export default function HotelForm() {
  const { enrollment } = useEnrollment();

  return (
    <Container>
      <StyledTypography variant="h4">Escolha de hotel e quarto</StyledTypography>
      {enrollment?.payment ? (
        enrollment?.payment?.ticketAccomodation ? null : (
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
