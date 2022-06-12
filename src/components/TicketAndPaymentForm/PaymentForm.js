import styled from 'styled-components';
import InfoBox from './InfoBox';
import CreditCardForm from './CreditCardForm';

export default function PaymentForm({ order, setOrder }) {
  const InfoBoxText = `${order.modality} ${
    order.hotelOption === 'withHotel' ? ' + Com hospedagem' : ' Sem Hospedagem'
  }`;

  const InfoBoxValue = `R$ ${order.totalValue}`;

  return (
    <>
      <StyleLabel>Ingresso Escolhido</StyleLabel>

      <InfoBox size={290} height={108} text={InfoBoxText} value={InfoBoxValue} />
      <CreditCardForm/>
    </>
  );
}

const StyleLabel = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  font-weight: 400;
  color: #8e8e8e;
`;
