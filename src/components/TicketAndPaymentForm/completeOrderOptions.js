import { useState } from 'react';
import styled from 'styled-components';
import Button from '../Form/Button';

export default function CompleteOrderOptions({ modalitySelected, order, setOrder }) {
  const [hotelOptionClicked, setHotelOptionClicked] = useState({ option: '', totalValue: 0 });
  const orderOptions = {
    online: {
      value: 100,
    },
    presencial: {
      value: 250,
      withHotel: {
        value: 350,
      },
      withoutHotel: {
        value: 0,
      },
    },
  };

  const newOrderOnline = () => {
    const orderOnline = {
      modality: modalitySelected.modality,
      value: orderOptions.online.value,
    };
    console.log('reservada a ordem online: ', orderOnline);
    setOrder(orderOnline);
  };

  const newOrderPresential = () => {
    const orderPresential = {
      modality: modalitySelected.modality,
      presentialValue: orderOptions.presencial.value,
      hotelOption: hotelOptionClicked.option,
      totalValue: hotelOptionClicked.totalValue,
    };
    console.log('reservada a ordem presencial: ', orderPresential);
    setOrder(orderPresential);
  };

  const handleHotelChoice = (orderType) => {
    let totalValue = 0;
    let presentialValue = orderOptions.presencial.value,
      withoutHotelValue = orderOptions.presencial.withoutHotel.value,
      withHotelValue = orderOptions.presencial.withHotel.value;

    if (orderType === 'withoutHotel') totalValue = presentialValue + withoutHotelValue;
    if (orderType === 'withHotel') totalValue = presentialValue + withHotelValue;
    setHotelOptionClicked({ option: orderType, totalValue });
  };

  if (modalitySelected.modality === 'Online')
    return <Button onClick={() => newOrderOnline()}>RESERVAR INGRESSO</Button>;

  if (modalitySelected.modality === 'Presencial')
    return (
      <>
        <HotelOptionsWrapper>
          <HotelOptionsBox
            text="withoutHotel"
            orderSelectedType={hotelOptionClicked.option}
            onClick={() => handleHotelChoice('withoutHotel')}
          >
            <span>Sem Hotel</span>
            <p>+ R$ {orderOptions.presencial.withoutHotel.value}</p>
          </HotelOptionsBox>
          <HotelOptionsBox
            text="withHotel"
            orderSelectedType={hotelOptionClicked.option}
            onClick={() => handleHotelChoice('withHotel')}
          >
            <span>Com Hotel</span>
            <p>+ R$ {orderOptions.presencial.withHotel.value}</p>
          </HotelOptionsBox>
        </HotelOptionsWrapper>
        {hotelOptionClicked.option === '' ? (
          <></>
        ) : (
          <>
            <StyleLabel>
              Fechado! O total ficou em R$ {hotelOptionClicked.totalValue},00. Agora é só confirmar:
            </StyleLabel>
            <Button onClick={() => newOrderPresential()}>RESERVAR INGRESSO</Button>
          </>
        )}
      </>
    );
  return <></>;
}
const HotelOptionsWrapper = styled.div`
  display: flex;
  gap: 24px;
`;
const HotelOptionsBox = styled.div`
  width: 145px;
  height: 145px;
  border-radius: 20px;
  background-color: ${({ text, orderSelectedType }) => (orderSelectedType === text ? '#FFEED2' : 'none')};
  border: ${({ text, orderSelectedType }) => (orderSelectedType !== text ? '1px solid #cecece' : 'none')};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 3px;

  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: #8e8e8e;

  span {
    font-size: 16px;
    color: #454545;
  }

  :hover {
    cursor: pointer;
  }
`;
const StyleLabel = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  font-weight: 400;
  color: #8e8e8e;
`;
