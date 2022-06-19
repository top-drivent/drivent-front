import styled from 'styled-components';
import dayjs from 'dayjs';
import 'dayjs/locale/pt';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import localizedFormat from 'dayjs/plugin/localizedFormat';

export default function ActivitiesTracks({ showLabel, selectedDayActivities }) {
  dayjs.extend(advancedFormat);
  dayjs.extend(localizedFormat);
  dayjs.locale('pt');

  return (
    <Container showLabel={showLabel}>
      <Track>
        <StyleLabel>Auditório Principal</StyleLabel>
        <Timeline>
          {selectedDayActivities?.map((el) =>
            el.locationId === 1 ? (
              <ActivityBox duration={dayjs(el.endTime).format('HH') - dayjs(el.startTime).format('HH')}>
                <div style={{ width: '180px' }}>
                  <ActivityTitle>{el.name}</ActivityTitle>
                  <ActivityTimeSlot>
                    {dayjs(el.startTime).format('HH:00')} - {dayjs(el.endTime).format('HH:00')}
                  </ActivityTimeSlot>
                </div>
                <Divider />
              </ActivityBox>
            ) : null
          )}
        </Timeline>
      </Track>
      <Track>
        <StyleLabel>Auditório Lateral</StyleLabel>
        <Timeline>
          {selectedDayActivities?.map((el) =>
            el.locationId === 2 ? (
              <ActivityBox duration={dayjs(el.endTime).format('HH') - dayjs(el.startTime).format('HH')}>
                <div style={{ width: '180px' }}>
                  <ActivityTitle>{el.name}</ActivityTitle>
                  <ActivityTimeSlot>
                    {dayjs(el.startTime).format('HH:00')} - {dayjs(el.endTime).format('HH:00')}
                  </ActivityTimeSlot>
                </div>
                <Divider />
              </ActivityBox>
            ) : null
          )}
        </Timeline>
      </Track>
      <Track>
        <StyleLabel>Sala de Workshop</StyleLabel>
        <Timeline>
          {selectedDayActivities?.map((el) =>
            el.locationId === 3 ? (
              <ActivityBox duration={dayjs(el.endTime).format('HH') - dayjs(el.startTime).format('HH')}>
                <div style={{ width: '180px' }}>
                  <ActivityTitle>{el.name}</ActivityTitle>
                  <ActivityTimeSlot>
                    {dayjs(el.startTime).format('HH:00')} - {dayjs(el.endTime).format('HH:00')}
                  </ActivityTimeSlot>
                </div>
                <Divider />
              </ActivityBox>
            ) : null
          )}
        </Timeline>
      </Track>
    </Container>
  );
}

const Container = styled.div`
  display: ${({ showLabel }) => (showLabel ? 'none' : 'flex')};
  flex-direction: row;
`;

const Track = styled.div`
  display: flex;
  flex-direction: column;
  width: 288px;
`;

const Timeline = styled.div`
  display: flex;
  flex-direction: column;
  width: 288px;
  height: 389.96px;
  padding: 9.96px;
  border: 1px solid #d7d7d7;
  gap: 10px;
`;

const StyleLabel = styled.p`
  font-family: 'Roboto', normal;
  font-size: 17px;
  font-weight: 400;
  color: #8e8e8e;
  text-align: center;
  margin-bottom: 13px;
`;

const ActivityBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 265px;
  height: ${({ duration }) => `${duration * 80 + (duration - 1) * 10}px`};
  background: #f1f1f1;
  border-radius: 5px;
  padding: 12px 10px 12px 10px;
`;

const ActivityTitle = styled.p`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  color: #343434;
  text-align: left;
`;

const ActivityTimeSlot = styled.p`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #343434;
  text-align: left;
`;

const Divider = styled.div`
  width: 0px;
  height: 100%;
  border: 1px solid #cfcfcf;
  margin-left: 10px;
  margin-right: 10px;
`;
