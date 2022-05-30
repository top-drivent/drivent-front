import styled from 'styled-components';

export default function ButtonOption({
  size,
  height,
  text,
  value,
  selected,
  setSelected,
  type,
  subtitle,
  handleClickOption,
}) {
  return (
    <ClickButton
      size={size}
      height={height}
      text={text}
      selected={selected}
      type={type}
      onClick={() => {
        selected[type] = text; // selected[modality] = presencial ou online
        setSelected({ ...selected });
        handleClickOption(subtitle);
      }}
    >
      <span>{text}</span>
      <p>{value}</p>
    </ClickButton>
  );
}

const ClickButton = styled.div`
  width: ${({ size }) => size}px;
  height: ${({ size, height }) => (height ? height : size)}px;

  border-radius: 20px;
  background-color: ${({ text, selected, type }) => (selected[type] === text ? '#FFEED2' : 'none')};
  border: ${({ text, selected, type }) => (!(selected[type] === text) ? '1px solid #CECECE' : 'none')};
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
