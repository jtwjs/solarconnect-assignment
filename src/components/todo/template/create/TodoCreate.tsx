import React, { useState, useRef } from "react";
import styled from "styled-components";
import { Moment } from 'moment';
import { DatePicker, Modal } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";

import { Itodo } from "components/todo/TodoService";

interface TodoCreateProps {
  nextId: number;
  createTodo: (todo: Itodo) => void;
  incrementNextId: () => void;
}

const TodoCreate = ({
                      nextId,
                      createTodo,
                      incrementNextId
                    }: TodoCreateProps) => {
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
      id: nextId,
      text: value,
      targetDate: dateValue!.format('MM/DD'),
      done: false
    });
    incrementNextId(); // nextId 하나 증가

    setDateValue(null);
    setValue("");
  };

  const handleDatePicker = (date: Moment | null, dateString: string): void => {
    setDateValue(date);
    console.log(date, dateString);
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
        <InsertForm onSubmit={handleSubmit}>
          <TargetDateWrap>
            <StyledLabel htmlFor="date-picker">완료 목표일: </StyledLabel>
            <StyledDatePicker
              id="date-picker"
              ref={datePickerRef}
              value={dateValue}
              open={isOpenDataPicker}
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

const CircleButton = styled.button`
  background: #33bb77;
  width: 50px;
  height: 50px;
  align-items: center;
  justify-content: center;
  font-size: 60px;
  left: 50%;
  transform: translate(50%, 0%);
  color: white;
  border-radius: 50%;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const InsertFormPositioner = styled.div`
  width: 100%;
  border-bottom: 1px solid #eeeeee;
`;
const InsertForm = styled.form`
  background: #eeeeee;
  padding-left: 40px;
  padding-top: 36px;
  padding-right: 60px;
  padding-bottom: 36px;
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
  color: ${({theme}) => theme.color.secondary};
`;
const StyledDatePicker = styled(DatePicker)`
  &:hover {
    border-color: ${({theme}) => theme.color.primary};
  }
  
  &.ant-picker-focused {
    border-color: ${({theme}) => theme.color.primary};
    box-shadow: ${({theme}) => theme.boxShadow.input};
  }
  
  .ant-picker-input {
    input {
      font-weight: 700;
      color: ${({theme}) => theme.color.secondary};
	    
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
  outline: none;
  font-size: 21px;
  box-sizing: border-box;
  color: #119955;
	transition: border 0.3s, box-shadow 0.3s;
  
  &:hover {
    border-color: ${({theme}) => theme.color.primary};
  }
  
  &:focus {
    border-color: ${({theme}) => theme.color.primary};
    box-shadow: ${({theme}) => theme.boxShadow.input};
  }
  
  &::placeholder {
    color: #dddddd;
    font-size: 16px;
  }
`;
