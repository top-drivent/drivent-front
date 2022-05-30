import { useState } from 'react';
import styled from 'styled-components';
import Button from '../Form/Button';

export default function CompleteOrderOptions({ modalitySelected }) {
  const [order, setOrder] = useState(null);
  const orderOptions = {
    presencial: {
      value: 250,
      hotelOptions: {
        withHotel: 350,
        withoutHotel: 0,
      },
    },
    online: {
      value: 100,
    },
  };
  const newOrderOnline = () => {
    const orderOnline = {
      modality: modalitySelected.modality,
      value: orderOptions.online.value,
    };
    setOrder(orderOnline);
    console.log('reservada a ordem: ', orderOnline);
  };
  if (modalitySelected.modality === 'Online')
    return <Button onClick={() => newOrderOnline()}>RESERVAR INGRESSO</Button>;
  return <div>{modalitySelected.modality}</div>;
}

const ClickButton = styled.div`
  width: ${({ size }) => size}px;
  height: ${({ size, height }) => (height ? height : size)}px;

  border-radius: 20px;
  ${({ text, selected, type }) =>
    selected[type] === text ? 'background-color: #FFEED2;' : 'border: 1px solid #CECECE;'}
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

  &:hover {
    cursor: pointer;
  }
`;
