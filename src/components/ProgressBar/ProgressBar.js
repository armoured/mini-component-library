/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  container: {
    small: {
      "width": "370px",
      "height": "8px",
      "border-radius": "4px"
    },
    medium: {
      "width": "370px",
      "height": "12px",
      "border-radius": "4px"
    }, 
    large: {
      "width": "370px",
      "height": "24px",
      "border-radius": "8px"
    }
  },
  bar: {
    small: {
      padding: "4px 0 4px 0",
      "border-radius": "inherit"

    },
    medium: {
      padding: "6px 0 6px 0",
      "border-radius": "inherit"
    }, 
    large: {
      padding: "8px 0 8px 4px",
      "margin": "4px 0 0 4px",
      "border-radius": "4px 0px 0px 4px",
      "max-width": "calc(100% - 8px)"
    }
  }
}

const ProgressBar = ({ value, size }) => {
  const progress = value || 0;
  return (
      <ProgressBarContainer 
        role="progressbar" 
        aria-valuenow={progress}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuetext={`${progress}%`}
        size={SIZES.container[size]}
      >
        <Bar 
          width={progress} 
          size={SIZES.bar[size]}
        >
          <VisuallyHidden>
            {progress}%
          </VisuallyHidden>
        </Bar>
      </ProgressBarContainer>
  );
};

const ProgressBarContainer = styled.div`

  ${p => p.size}

  background: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  position: relative;
  
`;

const Bar = styled.div`
  width: ${p => p.width}%;
  background: ${COLORS.primary};
  position: absolute;

  ${p => p.size}

  border-top-right-radius: 0;
  border-bottom-right-radius: 0;

  /* 
    If width is between 98% and 100% begin rounding the edges
    of the progress bar to a max of 4px
  */
  ${p => 100 - p.width < 2 && 
    
    `
      border-top-right-radius: ${4 - 2*(100 - p.width)}px;
      border-bottom-right-radius: ${4 - 2*(100 - p.width)}px;
    `
    
  };

  /* When width is 0 we don't display the progress bar */
  ${p => p.width === 0 &&
    
    `
      padding: 0
    `
    
  };

  

`;

export default ProgressBar;
