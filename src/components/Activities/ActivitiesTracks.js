import styled from 'styled-components';
import dayjs from 'dayjs';
import 'dayjs/locale/pt';
import { toast } from 'react-toastify';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import { useState } from 'react';
import { getSeats, newSubscriptionSeat, getSeatsByEnrollmentId } from '../../services/activityApi';
import { TiDeleteOutline } from 'react-icons/ti'; 
import { CgEnter, CgCheckO } from 'react-icons/cg';
import useEnrollment from '../../hooks/api/useEnrollment';
import { useEffect } from 'react';

export default function ActivitiesTracks({ showLabel, selectedDayActivities }) {  
  dayjs.extend(advancedFormat);
  dayjs.extend(localizedFormat);
  dayjs.locale('pt');

  const { enrollment } = useEnrollment();
  const [seatsByEnrollmentId, setSeatsByEnrollmentId] = useState(null);

  useEffect(() => {
    if (enrollment) {
      const promise = getSeatsByEnrollmentId({ enrollmentId: enrollment.id });
      promise.then((response) => {
        setSeatsByEnrollmentId(response.data);
      });
      promise.catch(error => toast('Falha ao carregar status de vagas disponiveis!'));
    }
  }, [enrollment]);

  const handleNewUserActivity = (activity) => {
    const newActivity = {
      ...activity,
      enrollmentId: enrollment.id
    };
    const resposta = newSubscriptionSeat(newActivity);
    resposta.then((response) => {
      toast('Inscrito com sucesso!');
    });
    resposta.catch((error) => {
      if (error.response.status === 409)
        toast('Você já tem inscrições nesse horário!');
      else {
        toast('Erro ao se inscrever!');
      }
    });
  };

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
                <StatusWrapper>
                  <HandleSeats>{el}</HandleSeats>
                </StatusWrapper>
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
                <StatusWrapper>
                  <HandleSeats>{el}</HandleSeats>
                </StatusWrapper>
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
                <StatusWrapper>
                  <HandleSeats>{el}</HandleSeats>
                </StatusWrapper>
              </ActivityBox>
            ) : null
          )}
        </Timeline>
      </Track>
    </Container>
  );

  function HandleSeats({ children }) {
    let body = {
      activityId: children.id,
      locationId: children.locationId
    };
    const [available, setAvailable] = useState(null);
    const [alredyRegistered, setAlredyRegistered] = useState(false);
    const resposta = getSeats(body);
    resposta.then((response) => {
      setAvailable(response.data.length);
    });
    resposta.catch(error => toast('Falha ao carregar vagas disponiveis!'));
    useEffect(() => {
      if (seatsByEnrollmentId.length) {
        seatsByEnrollmentId.map((el) => {
          if (el.activityId == children.id) {
            setAlredyRegistered(true);
          }
        });
      };
    }, [alredyRegistered]);
    
    if (alredyRegistered) {
      return (
        <span style={{ color: 'green' }}>
          <div><CgCheckO  /></div>
          <StatusSubtitle>inscrito</StatusSubtitle>
        </span>
      );
    }
    if (available === null && !alredyRegistered) {
      return <div>...</div>;
    }
    if (available === 0 && !alredyRegistered) {
      return (
        <span style={{ color: 'red' }}>
          <div><TiDeleteOutline/></div>
          <div><p>esgotado</p></div>
        </span>
      );
    };
    if (available === 1 && !alredyRegistered) {
      return (
        <span style={{ color: 'green' }} onClick={() => handleNewUserActivity(body)}>
          <div><CgEnter/></div>
          <div>{available} vaga</div>
        </span>
      );
    };
    if (available > 1 && !alredyRegistered) {
      return (
        <span style={{ color: 'green' }} onClick={() => handleNewUserActivity(body)}>
          <div> <CgEnter /> </div>
          <div><p>{available} vagas </p></div>
        </span>
      );
    };
  };
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
  align-items: center;
  flex-direction: row;
  width: 265px;
  height: ${({ duration }) => `${duration * 80 + (duration - 1) * 0.5}px`};
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
const StatusWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  div{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    p{
      font-size:8px ;
    }
    svg{
      font-size:24px ;
    }
  }
`;
const StatusSubtitle = styled.div`
  font-size:10px ;
`;
