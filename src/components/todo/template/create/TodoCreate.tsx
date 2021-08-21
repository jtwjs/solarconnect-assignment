import React, { useState, useRef } from "react";
import styled from "styled-components";
import { Moment, now } from 'moment';
import { DatePicker, Modal } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";

import { Itodo } from "utils/hooks/useTodo";

type TodoCreateProps = {
  createTodo: (todo: Itodo) => void;
}

const TodoCreate = ({createTodo}: TodoCreateProps): JSX.Element => {
  const [value, setValue] = useState<string>("");
  const [isOpenDataPicker, setIsOpenDataPicker] = useState<boolean>(false);
  const [dateValue, setDateValue] = useState<Moment | null>(null);

  const inputRef = useRef<HTMLInputElement>(null);
  const datePickerRef = useRef<any>(null); // TODO type 알아내는 방법 찾기..

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!dateValue && datePickerRef) {
       showErrorDialog('완료 목표일을 입력해주세요.', () => datePickerRef.current?.focus());
       return;
    }

    if (!value && inputRef) {
      showErrorDialog('할일을 입력해주세요.', () => inputRef.current?.focus());
      return;
    }

    createTodo({
      id: now(),
      text: value,
      targetDate: dateValue!.format('MM/DD'),
      done: false
    });

    setDateValue(null);
    setValue("");
  };

  const handleDatePicker = (date: Moment | null): void => {
    setDateValue(date);
    closeDatePicker();
  }
  const openDatePicker = (): void => {
    setIsOpenDataPicker(true);
  }
  const closeDatePicker = (): void => {
    setIsOpenDataPicker(false);
  }
 const disableBeforeToday = (date: Moment): boolean => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    return date.valueOf() <= today.valueOf();
  }
  const showErrorDialog = (text: string, cb?: () => void): void => {
    Modal.error({
      title: 'Validation error 😣',
      content: text,
      afterClose: cb
    });
  }

  return (
    <>
      <InsertFormPositioner>
        <h2 className="a11y">Todo 입력 폼</h2>
        <InsertForm onSubmit={handleSubmit}>
          <TargetDateWrap>
            <StyledLabel htmlFor="date-picker">완료 목표일: </StyledLabel>
            <StyledDatePicker
              id="date-picker"
              ref={datePickerRef}
              value={dateValue}
              open={isOpenDataPicker}
              inputReadOnly
              onFocus={openDatePicker}
              onBlur={closeDatePicker}
              onChange={handleDatePicker}
              disabledDate={disableBeforeToday}
            />
          </TargetDateWrap>
          <InputWrap>
            <Input
              ref={inputRef}
              autoFocus
              placeholder="What's need to be done?"
              onChange={handleChange}
              value={value}
              aria-label="할 일 입력"
            />
            <CircleButton>
              <PlusCircleOutlined />
            </CircleButton>
          </InputWrap>
        </InsertForm>
      </InsertFormPositioner>
    </>
  );
};

export default React.memo(TodoCreate);

const InsertFormPositioner = styled.section`
  width: 100%;
  border-bottom: 1px solid ${({theme}) => theme.colors.bgOuter};
`;
const InsertForm = styled.form`
  padding: 36px 60px 36px 40px;
  background: ${({theme}) => theme.colors.bgOuter};
  
  @media screen and ${({theme}) => theme.device.mobile} {
    padding: 18px 24px 18px 16px;	
  }
`;
const TargetDateWrap = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
const StyledLabel = styled.label`
  margin-right: 10px;
  font-size: 20px;
  font-weight: 700;
  line-height: 1.58;
  color: ${({theme}) => theme.colors.secondary};
  
  @media screen and ${({theme}) => theme.device.mobile} {
    font-size: 12px;	
  }
`;
const StyledDatePicker = styled(DatePicker)`
  background-color: ${({theme}) => theme.colors.bgInput};
  &:hover {
    border-color: ${({theme}) => theme.colors.primary};
  }
  
  &.ant-picker-focused {
    border-color: ${({theme}) => theme.colors.primary};
    box-shadow: ${({theme}) => theme.boxShadow.input};
  }
  
  .ant-picker-input {
    input {
      font-weight: 700;
      color: ${({theme}) => theme.colors.secondary};
      
      &::placeholder {
        font-weight: 400;
      }
    }
  }
`;
const InputWrap = styled.div`
  display: flex;
`;
const Input = styled.input`
  padding: 12px;
  border: 1px solid #dddddd;
  width: 100%;
  font-size: 21px;
  box-sizing: border-box;
  color: ${({theme}) => theme.colors.primary};
  background-color: ${({theme}) => theme.colors.bgInput};
  transition: border 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  
  &:hover {
    border-color: ${({theme}) => theme.colors.primary};
  }
  
  &:focus {
    border-color: ${({theme}) => theme.colors.primary};
    box-shadow: ${({theme}) => theme.boxShadow.input};
  }
  
  &::placeholder {
    color: ${({theme}) => theme.colors.grayC};
    font-size: 16px;
  }
  
  @media screen and ${({theme}) => theme.device.mobile} {  
    padding: 6px;	
    font-size: 16px;
  }
`;
const CircleButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  font-size: 60px;
  color: ${({theme}) => theme.colors.bgInner};
  background-color: ${({theme}) => theme.colors.primary};
  transform: translate(50%, 0%);
  transition: background-color 0.3s ease-in-out;
  
  &:hover {
      background-color: ${({theme}) => theme.colors.secondary};
    }
  
  @media screen and ${({theme}) => theme.device.mobile} {
    width: 25px;
    height: 25px;
    font-size: 30px;
    transform: translate(50%, 25%);
  }
`;