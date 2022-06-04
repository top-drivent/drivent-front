import styled from 'styled-components';

export default function CreditCardMockUp({ size, height, cardNumber, name, expireDate }) {
  return (
    <CardMockUp size={size} height={height}>
      <ChipMockUp size={size} height={height}/>
      <h1>{cardNumber}</h1>
      <span>{name}</span>
      <p>VALID THRU</p>
      <span>{expireDate}</span>
    </CardMockUp>
  );
}

const CardMockUp = styled.div`
  width: ${({ size }) => size}px;
  height: ${({ size, height }) => (height ? height : size)}px;

  border-radius: 20px;
  background-color: #929292;
  border: #cecece;
  display: flex;
  align-items: left;
  padding: 20px;
  margin: 10px;
  justify-content: center;
  flex-direction: column;
  gap: 3px;

  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: #8e8e8e;
  position: relative;

  h1{
    font-weight: bold;
  font-size: 24px;
  color: white;
  padding-top: 40px;
  padding-bottom: 10px;
  }

  p{
    font-weight: normal;
  font-size: 12px;
  color: white;
  padding: 10px 0 5px 0;
  }

  span {
    font-weight: bold;
  font-size: 18px;
  color: white;
  }
  
`;

const ChipMockUp = styled.div`

  width: ${({ size }) => size/10}px;
  height: ${({ size, height }) => (height ? height/6 : size/10)}px;
  background-color: #F7CF70;
  border-radius: 5px;
  position: absolute;
  top: 20px;
  left: 32px;
`;
