import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const TEXT_SIZES = {
  small: {
    "font-size": "14px",
    "line-height": "16px",
    "padding": "4px 0 4px 24px"
  },
  large: {
    "font-size": "18px",
    "line-height": "21px",
    "padding": "4px 0 4px 36px"
  }
}

const ICON_WRAPPER_SIZES = {
  small: {
    "width": "18px",
    "height": "18px"
  },
  large: {
    "width": "20px",
    "height": "20px"
  }
}

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {

  const strokeWidth = size === "small" ? 1.5 : 2.25;
  const iconSize = size === "small" ? 16 : 20;

  return (
    <Wrapper>
      <IconWrapper size={ICON_WRAPPER_SIZES[size]}>
        <Icon id={icon} strokeWidth={strokeWidth} size={iconSize}>
          <VisuallyHidden>
            {icon} icon
          </VisuallyHidden>
        </Icon>
      </IconWrapper>
      <TextInput type="text" label={label} placeholder={placeholder} style={{"--width": `${width}px`}} size={TEXT_SIZES[size]} />
      <VisuallyHidden>{label}</VisuallyHidden>
    </Wrapper>
    );
};

const Wrapper = styled.div`
  width: fit-content;
  position: relative;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`

  ${p => p.size};

  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  margin-left: 0px;
  pointer-events: none;
  color: inherit;
`;

const TextInput = styled.input`

  ${p => p.size};

  width: var(--width);
  border: none;
  border-bottom: 1px solid ${COLORS.black};
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  letter-spacing: 0em;
  text-align: left;
  color: ${COLORS.gray500};

  &:focus {
    outline-offset: 2px;
  }

  &:hover {
    color: ${COLORS.black};
  }

  &::placeholder {
    font-weight: 400;
  }
`;



export default IconInput;
