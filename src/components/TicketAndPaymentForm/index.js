import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import Message from '../Message';
import useEnrollment from '../../hooks/api/useEnrollment';
import ButtonOption from './ButtonOption';
import { useState } from 'react';
import CompleteOrderOptions from './completeOrderOptions.js';

export default function TicketAndPaymentForm() {
  const { enrollment } = useEnrollment();

  const [selected, setSelected] = useState({
    modality: '',
    hotel: '',
  });

  const subtitle = {
    hotelSelected: 'Ótimo! Agora escolha sua modalidade de hospedagem',
    onlineSelected: 'Fechado! O total ficou em R$ 100. Agora é só confirmar:',
  };
  const [subtitleByCLick, setSubtitleByClick] = useState('');

  const handleHotelorOnlineClick = (title) => {
    setSubtitleByClick(title);
  };

  return (
    <Container>
      <StyledTypography variant="h4">Ingresso e pagamento</StyledTypography>
      {enrollment ? (
        <TicketForm>
          <StyleLabel>Primeiro, escolha sua modalidade de ingresso</StyleLabel>
          <Options>
            <ButtonOption
              size={145}
              text="Presencial"
              value="R$ 250"
              selected={selected}
              setSelected={setSelected}
              type={'modality'}
              subtitle={subtitle.hotelSelected}
              handleClickOption={handleHotelorOnlineClick}
            />
            <ButtonOption
              size={145}
              text="Online"
              value="R$ 100"
              selected={selected}
              setSelected={setSelected}
              type={'modality'}
              subtitle={subtitle.onlineSelected}
              handleClickOption={handleHotelorOnlineClick}
            />
          </Options>
          <StyleLabel>{subtitleByCLick}</StyleLabel>
          <CompleteOrderOptions modalitySelected={selected} />
        </TicketForm>
      ) : (
        <Message text="Você precisa completar sua inscrição antes de prosseguir pra escolha de ingresso" />
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

const TicketForm = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 17px;
`;

const Options = styled.div`
  width: 100%;

  display: flex;
  justify-content: flex-start;
  gap: 24px;

  margin-bottom: 45px;
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
