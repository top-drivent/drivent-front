import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import TicketForm from './TicketForm';
import PaymentForm from './PaymentForm';
import useEnrollment from '../../hooks/api/useEnrollment';
import { useState } from 'react';

export default function TicketAndPaymentForm() {
  const [order, setOrder] = useState(null);
  const { enrollment } = useEnrollment();

  return (
    <Container>
      <StyledTypography variant="h4">Ingresso e pagamento</StyledTypography>
      {order === null ? (
        <TicketForm order={order} setOrder={setOrder} enrollment={enrollment} />
      ) : (
        <PaymentForm order={order} setOrder={setOrder} enrollment={enrollment} />
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
