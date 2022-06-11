import styled from 'styled-components';
import { useEffect, useState } from 'react';
import Button from '../Form/Button';

export default function ResumeHotelSelected({ room, hotel }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let countPeople = 0;
    room.bed.forEach((data) => {
      if (data.enrollmentId) countPeople +=1;
    });
    setCount(countPeople - 1);
  });

  return (
    <>
      <StyleLabel>Você já escolheu seu quarto:</StyleLabel>
      <Box>
        <HotelPicture src={hotel.imageUrl} />
        <HotelName>{hotel.name}</HotelName>
        <div>
          <InfoTitle>Quarto reservado</InfoTitle>
          <InfoText>{room.id} ({room.accomodationsType.type})</InfoText>
        </div>
        <div>
          <InfoTitle>Pessoas no seu quarto</InfoTitle>
          <InfoText>{
            (count === 0)? 'Somente você'
              :(count === 1)? `Você e mais ${count} pessoa`
                :`Você e mais ${count} pessoas`}
          </InfoText>
        </div>
      </Box>
      <Button>TROCAR DE QUARTO</Button>
    </>
  );
}
const HotelName = styled.h1`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;

  color: #343434;
`;

const Box = styled.div`
  width: 196px;
  height: 264px;

  padding: 16px 14px;
  border-radius: 10px;
  background: #FFEED2;
  border: #cecece;
  display: flex;
  justify-content: space-between;
  align-items: left;
  flex-direction: column;
  gap: 3px;

  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: #8e8e8e;
  &:hover{
    cursor:pointer;
  }
`;
const InfoTitle = styled.h2`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  color: #3c3c3c;
`;

const InfoText = styled.p`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;

  color: #3c3c3c;
`;

const HotelPicture = styled.img`
  width: 168px;
  height: 109px;
  object-fit: cover;
  border-radius: 10px;
`;

const StyleLabel = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  font-weight: 400;
  color: #8e8e8e;
`;
