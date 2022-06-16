import styled from 'styled-components';

export default function Message({ text }) {
  return (
    <ContainerMessage>
      <Text>{text}</Text>
    </ContainerMessage>
  );
}

const ContainerMessage = styled.div`
  height: 85%;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Text = styled.p`
  font-family: 'Roboto', sans-serif;
  max-width: 388px;
  text-align: center;
  font-size: 20px;
  font-weight: 400;
  color: #8E8E8E;
`;
