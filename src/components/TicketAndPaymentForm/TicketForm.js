/* eslint-disable indent */
import styled from 'styled-components';
import Message from '../Message';
import InfoBox from './InfoBox';
import ButtonOption from './ButtonOption';
import { useState } from 'react';
import CompleteOrderOptions from './completeOrderOptions';
import CHECKVECTOR from '../../assets/images/checkVector.png';

export default function TicketForm({ order, setOrder, enrollment }) {
  const [selected, setSelected] = useState({
    modality: '',
    hotel: '',
  });

  const subtitle = {
    hotelSelected: 'Ótimo! Agora escolha sua modalidade de hospedagem',
    onlineSelected: 'Fechado! O total ficou em R$ 100. Agora é só confirmar:',
  };
  const [subtitleByCLick, setSubtitleByClick] = useState('');

  const InfoBoxText = `${enrollment?.payment?.ticketModality === 'PRESENTIAL' ? 'Presencial' : 'Online'} ${
    enrollment?.payment?.ticketAccomodation ? ' + Com hospedagem' : ' Sem Hospedagem'
  }`;

  const InfoBoxValue = `${enrollment?.payment?.ticketValue}`;

  const handleHotelorOnlineClick = (title) => {
    setSubtitleByClick(title);
  };

  return (
    <>
      {enrollment?.payment ? (
        <>
          <StyleLabel>Ingresso Escolhido</StyleLabel>
          <InfoBox size={290} height={108} text={InfoBoxText} value={InfoBoxValue} />
          <StyleLabel>Pagamento</StyleLabel>
          <Container>
            <img src={CHECKVECTOR} alt="" />
            <div>
              <p style={{ fontWeight: 'bold' }}>Pagamento confirmado!</p>
              <p style={{ fontWeight: '400' }}>Prossiga para escolha de hospedagem e atividades</p>
            </div>
          </Container>
        </>
      ) : enrollment ? (
        <TicketFormStyled>
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
          <CompleteOrderOptions modalitySelected={selected} order={order} setOrder={setOrder} />
        </TicketFormStyled>
      ) : (
        <Message text="Você precisa completar sua inscrição antes de prosseguir pra escolha de ingresso" />
      )}
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

const TicketFormStyled = styled.div`
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

const StyleLabel = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  font-weight: 400;
  color: #8e8e8e;
`;
