import styled, { css } from 'styled-components';
import { APPEARING_TIMING } from './constants';

export const Wrapper = styled.div`
  opacity: 0;

  ${props =>
    props.show &&
    css`
      transition: opacity ${APPEARING_TIMING};
      opacity: 1;
    `}
`;
