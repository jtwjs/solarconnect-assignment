import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

import timer from 'utils/timer';

export default function TodoTimer(): JSX.Element {
  const [currentTime, setCurrentTime] = useState<string>('');

  useEffect(() => {
    const timerId = setInterval(() => {
      setCurrentTime(timer.getCurrentTime());
    }, 1000);

    return () => {
      clearInterval(timerId);
    }
  }, []);

  return (
    <Wrapper>
      <h2 className="a11y">Timer</h2>
      <Timer>
        {currentTime}
      </Timer>
      <Today>
        <DayText>{timer.getToday()}</DayText>
        <DateText>{timer.getDate()}</DateText>
      </Today>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;
`;
const Timer = styled.time`
  display: block;
  min-height: 50px;
  font-size: 50px;
  font-weight: 700;
  color: ${({theme}) => theme.colors.primary};
`;
const Today = styled.time`
  display: flex;
`;
const DayText = styled.span`
  display: block;
  margin-top: 3px;
  padding-right: 10px;
  font-size: 22px;
  color: ${({theme}) => theme.colors.primary};
  
  @media screen and ${({theme}) => theme.device.mobile} {
    font-size: 16px;	
  }
`;
const DateText = styled.span`
  font-size: 26px;
  color: ${({theme}) => theme.colors.primary};
  
  @media screen and ${({theme}) => theme.device.mobile} {
    font-size: 20px;	
  }
`;


