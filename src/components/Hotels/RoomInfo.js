import { useState } from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';
import PeopleIcon from '../PeopleIcon';

export default function RoomInfo({ data, selectedRoom, setSelectedRoom }) {
  const { id, bed } = data;
  const [fullRoom, setFullRoom] = useState(false);
  useEffect(() => {
    const reservedBed = [];
    bed.forEach((el) => {
      if (el.enrollmentId) reservedBed.push(el.id);
    });
    if(reservedBed.length === bed.length) {
      setFullRoom(true);
    }
  });
  
  return (
    <Room 
      fullRoom={fullRoom}
      id={id}
      selectedRoom={selectedRoom.id} 
      onClick={() => setSelectedRoom( { id } )}
    >
      <p>{id}</p>
      <div>
        {bed.map((el) => (
          <PeopleIcon 
            key={el.id} 
            reserved={el.enrollmentId} 
            color={(fullRoom)? '#8C8C8C':(selectedRoom.id === id)? '#FF4791': null}/>
        ))}
      </div>
    </Room>
  );
}

const Room = styled.div`
    width: 190px;
    height: 45px;

    padding: 11px 16px 11px 16px;

    border: 1px solid #CECECE;
    border-radius: 10px;
    ${( { fullRoom } ) => (fullRoom)? 
    `background: #E9E9E9; 
    pointer-events: none;`
    : ''}
    ${( { id, selectedRoom } ) => (id === selectedRoom)? 'background: #FFEED2;': ''}
    display: flex;
    justify-content: space-between;
    align-items: center;

    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    font-weight: 700;
    color: ${( { fullRoom } ) => (fullRoom)? '#9D9D9D': '#454545'};

    div{
      display: flex;
      gap: 6px;
    }
    &:hover{
      cursor:pointer;
    }
`;
