import styled, { keyframes, css } from 'styled-components';
import { COVER_HIDE } from '../index';

const bounce = keyframes`
  from {
    transform: translateY(-2vh);
    -webkit-transform: translateY(-2vh);
  }
  to {
    transform: translateY(+2vh);
    -webkit-transform: translateY(+2vh);
  }`;

const defaultLogoStyle = css`
  width: 15%;
  height: 15%;
`;

const defaultMarchioStyle = css`
  width: 80%;
  height: 20%;
`;

const defaultDicituraStyle = css`
  width: 35%;
  height: 10%;
`;

const defaultIndicatorStyle = css`
  width: 10%;
  height: 10%;
`;

const tabletOrMobileDim = css`
  width: 100%;
  height: 50%;
  justify-content: flex-start;
  > .logo {
    ${defaultLogoStyle}
    margin-bottom: -5px;
  }
  > .marchio {
    ${defaultMarchioStyle}
  }
  > .dicitura {
    ${defaultDicituraStyle}
    margin-top: 10px;
  }
  > .indicator {
    ${defaultIndicatorStyle}
    bottom: 10vh;
  }
`;

const desktopOrLaptopDim = css`
  width: 80%;
  height: 50%;
  width: 500px;
  height: 400px;
  > .logo {
    ${defaultLogoStyle}
    margin-bottom: -20px;
    height: 25%;
  }
  > .marchio {
    ${defaultMarchioStyle}
    height: 45%;
    height: 100px;
  }
  > .dicitura {
    ${defaultDicituraStyle}
    margin-top: -30px;
    height: 20%;
  }
  > .indicator {
    ${defaultIndicatorStyle}
    width: 5%;
    height: 5%;
    bottom: 5%;
  }
`;

const bigScreenDim = css`
  width: 100%;
  height: 60%;
  // fix for old Safari
  width: 1000px;
  height: 500px;
  > .logo {
    ${defaultLogoStyle}
    margin-bottom: -20px;
    height: 25%;
  }
  > .marchio {
    ${defaultMarchioStyle}
    height: 45%;
  }
  > .dicitura {
    ${defaultDicituraStyle}
    margin-top: 0px;
    width: 30%;
    height: 15%;
  }
  > .indicator {
    ${defaultIndicatorStyle}
    width: 5%;
    height: 5%;
    bottom: 5%;
  }
  color: green;
`;

const retinaScreenDim = css`
  width: 700px;
  width: 50%;
  height: 60%;
  > .logo {
    ${defaultLogoStyle}
    margin-bottom: -10px;
    height: 17%;
  }
  > .marchio {
    ${defaultMarchioStyle}
    width: 58%;
    height: 25%;
  }
  > .dicitura {
    ${defaultDicituraStyle}
    margin-top: -10px;
    height: 12%;
  }
  > .indicator {
    ${defaultIndicatorStyle}
    width: 5%;
    height: 5%;
    bottom: 5%;
  }
`;

// const portraitDim = css`
//   width: 2000px;
//   height: 1000px;
// `;

// const landscapeDim = css`
//   width: 2000px;
//   height: 1000px;
// `;

export const _defaultCover = styled.div`
  background: ${props => (props.src ? `url(${props.src})` : '')};
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Wrapper = styled(_defaultCover)`
  background-color: black;
  background-size: cover;
  position: absolute;
  transition: transform 2s;
  -webkit-transition: transform 2s;
  height: 100%;
  width: 100vw;
  ${props =>
    props.moveup &&
    css`
      transform: translateY(-100vh);
      -webkit-transform: translateY(-100vh);
    `}
  ${props =>
    props.showcover === COVER_HIDE &&
    css`
      display: none;
    `}
`;

export const ContainerCentered = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${props => (props.ismobile || props.istablet) && tabletOrMobileDim};
  ${props => (props.issmallscreen || props.ismediumscreen) && desktopOrLaptopDim};
  ${props => props.isbigscreen && bigScreenDim};
`;

const _defaultImg = styled(_defaultCover)`
  ${props =>
    props.staticSite
      ? css`
          opacity: 1;
        `
      : css`
          opacity: 0;
          transform: scale(0);
          -webkit-transform: scale(0);
          transition: transform 1.5s, opacity 1.5s;
          -webkit-transition: transform 1.5s, opacity 1.5s;
          ${props =>
            props.appear &&
            css`
              opacity: 1;
              transform: scale(1);
              -webkit-transform: scale(1);
            `}
        `};
`;

export const LogoStyled = styled(_defaultImg)`
  transition: transform 3s, opacity 3s;
  -webkit-transition: transform 3s, opacity 3s;
  ${props =>
    props.moveup &&
    css`
      transition: transform 1s;
      -webkit-transition: transform 1s;
      transform: translateY(-100vh);
      -webkit-transform: translateY(-100vh);
    `}
`;

export const MarchioStyled = styled(_defaultImg)`
  ${props =>
    props.moveup &&
    css`
      transition: transform 1s;
      -webkit-transition: transform 1s;
      transition-delay: 550ms;
      -webkit-transition-delay: 550ms;
      transform: translateY(-100vh);
      -webkit-transform: translateY(-100vh);
    `}
`;

export const LabelStyled = styled(_defaultImg)`
  ${props =>
    props.moveup &&
    css`
      transition: transform 1s;
      -webkit-transition-delay: 350ms;
      transition-delay: 350ms;
      -webkit-transition-delay: 350ms;
      transform: translateY(-100vh);
      -webkit-transform: translateY(-100vh);
    `}
`;

export const IndicatorStyled = styled(_defaultImg)`
  position: absolute;
  bottom: 3vh;
  transition-property: transform;
  transition-duration: 2s;
  transition-timing-function: ease-out;
  transition-delay: 2s;
  -webkit-transition-property: transform;
  -webkit-transition-duration: 2s;
  -webkit-transition-timing-function: ease-out;
  -webkit-transition-delay: 2s;
  ${props =>
    props.bounce &&
    css`
      animation: ${bounce} 2s linear infinite alternate;
    `}
`;

export const UnderConstruction = styled.div`
  color: white;
  font-size: 2.5em;
  position: absolute;
  bottom: 25%;
`;
