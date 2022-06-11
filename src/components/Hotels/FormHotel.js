import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import useHotel from '../../hooks/api/useHotel';
import HotelInfo from './HotelInfo';
import { toast } from 'react-toastify';
import { useState } from 'react';
import RoomInfo from './RoomInfo';
import Button from '../Form/Button';
import useBookHotelRoom from '../../hooks/api/useBookHotelRoom';
import useEnrollment from '../../hooks/api/useEnrollment';
import useToken from '../../hooks/useToken';
import useRoom from '../../hooks/api/useRoom';

export default function FormHotel() {
  const token = useToken();
  const { hotels } = useHotel();
  const { selectRoom } = useBookHotelRoom();
  const { room } = useRoom();
  const { enrollment } = useEnrollment();
  const [hotel, setHotel] = useState({
    id: null,
    name: null
  });
  const [rooms, setRooms] = useState([]);
  const [selectedRoom, setSelectedRoom] = useState({
    id: null
  });
  console.log(room);
  async function submit() {
    try {
      await selectRoom({
        id: selectedRoom.id,
        enrollmentId: enrollment.id
      }, token);
      toast('Hotel reservado com sucesso!');
    } catch {
      toast('Falha ao reservar o hotel!');
    }
  }

  return (
    <>
      <StyleLabel>Primeiro, escolha seu hotel</StyleLabel>
      <List>
        {hotels?.map((el) => (
          <HotelInfo key={el.id} data={el} hotel={hotel} setHotel={setHotel} setRooms={setRooms}/>
        ))}
      </List>
      {(hotel.id)? 
        <>
          <StyleLabel>Ótima pedida! Agora escolha seu quarto</StyleLabel>
          <RoomList>
            {rooms.map((el) => (
              <RoomInfo key={el.id} data={el} selectedRoom={selectedRoom} setSelectedRoom={setSelectedRoom}/>
            ))}
          </RoomList>
        </>
        : ''}
      {(selectedRoom.id)?
        <Button onClick={submit}>RESERVAR QUARTO</Button>
        :''
      }
    </>
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

const List = styled.div`
  width: 100%;

  margin-bottom: 15px;

  display: flex;
  flex-direction: row;
  align-items: start;
  gap: 37px;
`;

const RoomList = styled.div`
  width: 100%;

  margin-bottom: 15px;

  display: flex;
  flex-wrap: wrap;
  align-items: start;
  gap: 17px;
`;

const StyleLabel = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  font-weight: 400;
  color: #8e8e8e;
`;
