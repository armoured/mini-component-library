import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);
  console.log(displayedValue);

  return (
    <Wrapper>
      <PresentationalBit>
        {displayedValue}
        <IconWrapper>
          <Icon id="chevron-down" strokeWidth={2} size={24}></Icon>
        </IconWrapper>
      </PresentationalBit>
      <NativeSelect value={value} onChange={onChange}>
        {children}
      </NativeSelect>
    </Wrapper>
  );
};

const PresentationalBit = styled.div`
  display: inline-block;
  position: relative;
  font-family: Roboto;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: left;

`;

const NativeSelect = styled.select`
  position: absolute;
  width: 100%;
  height: 100%;
  min-height: 100%;
  top: 0;
  left: 0;
  opacity: 0%;
  outline: none;
`;

const Wrapper = styled.div`
  position: relative;
  width: max-content;
  padding: 12px 52px 12px 16px;
  background: ${COLORS.transparentGray15};
  color: ${COLORS.gray700};
  border-radius: 8px;

  &:focus-within {
    outline: 2px auto Highlight;
    outline: 2px auto -webkit-focus-ring-color;
  }

  &:hover {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: -2px;
  right: 0px;
  margin-right: -36px;

`;

export default Select;
