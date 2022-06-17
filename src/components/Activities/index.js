import Message from '../Message';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import useEnrollment from '../../hooks/api/useEnrollment';
import FormActivity from './FormActivity';

export default function ActivitiesPage() {
  const { enrollment } = useEnrollment();

  return (
    <Container>
      <StyledTypography variant="h4">Escolha de atividades</StyledTypography>
      {enrollment?.payment ? (
        enrollment.payment.ticketModality !== 'PRESENTIAL' ? (
          <Message text="Sua modalidade de ingresso não necessita escolher atividade. Você terá acesso a todas as atividades." />
        ) : (
          <FormActivity />
        )
      ) : (
        <Message text="Você precisa ter confirmado pagamento antes de fazer a escolha de atividades" />
      )}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;

  padding: 0 0 50px 0;

  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 37px;
`;

const StyledTypography = styled(Typography)`
  margin-bottom: 20px !important;
`;
