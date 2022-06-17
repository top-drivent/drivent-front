import styled from 'styled-components';
import useActivity from '../../hooks/api/useActivity';
import dayjs from 'dayjs';
import 'dayjs/locale/pt';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import { useState } from 'react';

export default function FormActivity() {
  dayjs.extend(advancedFormat);
  dayjs.extend(localizedFormat);
  const { activities } = useActivity();
  dayjs.locale('pt');
  const activitiesDaysArray = activities?.map((el) => dayjs(el.date).format('dddd, DD/MM'));
  const activitiesDays = [...new Set(activitiesDaysArray)];

  const [dayOption, setDayOption] = useState('');

  function handleDayOption(id) {
    setDayOption(id);
  }

  return (
    <Container>
      <StyleLabel>Primeiro, filtre pelo dia do evento</StyleLabel>
      <List>
        {activitiesDays.map((el, id) => (
          <DayButton onClick={() => handleDayOption(`button_${id}`)} id={`button_${id}`} state={dayOption}>
            {el}
          </DayButton>
        ))}
      </List>
    </Container>
  );
}
const Container = styled.div`
  padding: 0 0 30px 0;
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

const DayButton = styled.button`
  all: unset;
  width: 131px;
  height: 37px;

  background: ${({ id, state }) => (id === state ? '#FFD37D' : '#E0E0E0')};
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  text-align: center;

  color: #000000;
`;

const StyleLabel = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  font-weight: 400;
  color: #8e8e8e;
`;
