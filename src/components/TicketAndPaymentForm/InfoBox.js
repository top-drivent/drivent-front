import styled from 'styled-components';

export default function InfoBox({ size, height, text, value }) {
  return (
    <ClickButton size={size} height={height} text={text}>
      <span>{text}</span>
      <p>{value}</p>
    </ClickButton>
  );
}

const ClickButton = styled.div`
  width: ${({ size }) => size}px;
  height: ${({ size, height }) => (height ? height : size)}px;

  border-radius: 20px;
  background-color: #ffeed2;
  border: #cecece;
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
`;
