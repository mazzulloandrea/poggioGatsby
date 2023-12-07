import styled, { css } from 'styled-components';

const videoContainer = {
  bigScreen: {
    w: 1600,
    h: 900,
  },
  mediumScreen: {
    w: 1400,
    h: 750,
  },
  smallScreen: {
    w: 1050,
    h: 550,
  },
  tablet: {
    w: 750,
    h: 400,
  },
  mobile: {
    w: 500,
    h: 300,
  },
};
const videoDim = 900;

export const PlayerContainer = styled.div`
  position: absolute;
  min-width: 70%;
  max-width: 70%;
  height: 70%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  > div {
    height: 100% !important;
  }
`;

/*
// ${props =>
  //   props.isbigscreen
  //     ? css`
  //         min-width: ${videoContainer.bigScreen.w}px;
  //         max-width: ${videoContainer.bigScreen.w}px;
  //         height: ${videoContainer.bigScreen.h}px;
  //         > div {
  //           height: ${videoContainer.bigScreen.h}px!important;
  //         }
  //       `
  //     : ``}
  // ${props =>
  //   props.ismediumscreen
  //     ? css`
  //         min-width: ${videoContainer.mediumScreen.w}px;
  //         max-width: ${videoContainer.mediumScreen.w}px;
  //         height: ${videoContainer.mediumScreen.h}px;
  //         > div {
  //           height: ${videoContainer.mediumScreen.h}px!important;
  //         }
  //       `
  //     : ``}
  // ${props =>
  //   props.issmallscreen
  //     ? css`
  //         min-width: ${videoContainer.smallScreen.w}px;
  //         max-width: ${videoContainer.smallScreen.w}px;
  //         height: ${videoContainer.smallScreen.h}px;
  //         > div {
  //           height: ${videoContainer.smallScreen.h}px!important;
  //         }
  //       `
  //     : ``}
  // ${props =>
  //   props.istablet
  //     ? css`
  //         min-width: ${videoContainer.tablet.w}px;
  //         max-width: ${videoContainer.tablet.w}px;
  //         height: ${videoContainer.tablet.h}px;
  //         > div {
  //           height: ${videoContainer.tablet.h}px!important;
  //         }
  //       `
  //     : ``}
  // ${props =>
  //   props.ismobile
  //     ? props.isportrait
  //       ? css`
  //           min-width: ${videoContainer.mobile.w / 2}px;
  //           max-width: ${videoContainer.mobile.w / 2}px;
  //           height: ${videoContainer.mobile.h / 2}px;
  //           > div {
  //             height: ${videoContainer.mobile.h / 2}px!important;
  //           }
  //         `
  //       : css`
  //           min-width: ${videoContainer.mobile.w}px;
  //           max-width: ${videoContainer.mobile.w}px;
  //           height: ${videoContainer.mobile.h}px;
  //           > div {
  //             height: ${videoContainer.mobile.h}px!important;
  //           }
  //         `
  //     : ``}
*/

export const PlayerButton = styled.div`
  position: absolute;
  background: ${props => (props.src ? `url(${props.src})` : '')};
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  width: 100px;
  height: 100px;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  // z-index: 999;
`;
