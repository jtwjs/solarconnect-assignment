import React, {memo} from 'react';
import styled from 'styled-components';

type ToggleBtnProps = {
  className?: string,
  id: string,
  label: string,
  checked: boolean,
  onChange: () => void,
}

function ToggleBtn({className, id, label, ...restProps}: ToggleBtnProps) {
  return (
    <Wrapper className={className}>
      <input
        type="checkbox"
        id={id}
        {...restProps}
      />
      <label htmlFor={id}>
        <span className="a11y">{label}</span>
      </label>
    </Wrapper>
  );
};

export default memo(ToggleBtn);

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  input[type="checkbox"] {
    position: absolute;
    width: 1px;
    height: 1px;
    border: 0;
    padding: 0;
    margin: -1px;
    clip: rect(0, 0, 0, 0);
    overflow: hidden;
  }

  input[type="checkbox"] + label {
    position: relative;
    appearance: none;
    width: 80px;
    height: 40px;
    border-radius: 20px;
    border: 2px solid ${({theme}) => theme.colors.grayD};;
    outline: none;
    transition: 0.3s ease-in-out;
    
    &:hover {
      border-color: ${({theme}) => theme.colors.grayC};
      
      &::before {
        background: ${({theme}) => theme.colors.grayC};
      }
    }

    &::before {
      content: "";
      position: absolute;
      height: 30px;
      width: 30px;
      border-radius: 50%;
      background: ${({theme}) => theme.colors.grayD};
      top: 3px;
      left: 4px;
      transition: 0.3s ease-in-out;
    }
  }

  input[type="checkbox"]:checked + label {
    border-color: ${({theme}) => theme.colors.primary};
    
    &:hover {
      border-color: ${({theme}) => theme.colors.secondary};
      
      &::before {
        background: ${({theme}) => theme.colors.secondary};
      }
    }
    
    &::before {
      background: ${({theme}) => theme.colors.primary};
      transform: translateX(37px);
    }
  }
`

