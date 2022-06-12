import styled from 'styled-components';

export default function HotelInfo({ data, hotel, setHotel, setRooms }) {
  const { id, name, imageUrl, room, accomodationsHotel } = data;

  const accomodations = accomodationsHotel.map((el) => capitalizeFirstLetter(el.accomodationsType.type)).join(', ');

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const beds = room.map((el) => el.bed);

  const vacancyBeds = beds.map((el) =>
    el.reduce((prev, curr) => {
      if (!curr.enrollmentId) {
        return prev + 1;
      } else {
        return prev + 0;
      }
    }, 0)
  );
  const vacancyNumber = vacancyBeds.reduce((prev, curr) => curr + prev, 0);

  return (
    <Hotel hotelSelected={hotel.id} id={id} onClick={() => {
      hotel.id = id;
      hotel.name = name;

      setHotel( { ...hotel } );
      setRooms(room);
    } }>
      <HotelPicture src={imageUrl} />
      <HotelName>{name}</HotelName>
      <div>
        <InfoTitle>Tipos de acomodação</InfoTitle>
        <InfoText>{accomodations}</InfoText>
      </div>
      <div>
        <InfoTitle>Vagas disponíveis:</InfoTitle>
        <InfoText>{vacancyNumber}</InfoText>
      </div>
    </Hotel>
  );
}

const Hotel = styled.div`
  width: 196px;
  height: 264px;

  padding: 16px 14px;
  border-radius: 10px;
  background: ${( { id, hotelSelected } ) => (id === hotelSelected)? '#FFEED2': '#f1f1f1'};
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

const HotelName = styled.h1`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;

  color: #343434;
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
