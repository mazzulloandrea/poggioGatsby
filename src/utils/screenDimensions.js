import { bigScreen, mediumScreen, tabletWidth, mobileWidth, miniMobileWidth } from './constants';
import isScreenInPortrait from './screenOrientation';

const getScreenDimensions = () => {
  const { height, width } = window.screen;
  const isInPortait = isScreenInPortrait();
  const defProps = { height, width, isPortrait: isInPortait ? 1 : 0 };

  let dimToConsider = 0;

  if (isInPortait) {
    dimToConsider = width < height ? width : height;
  } else {
    dimToConsider = width > height ? width : height;
  }

  return {
    ...defProps,
    isBigScreen: dimToConsider > bigScreen,
    isMediumScreen: dimToConsider > mediumScreen && dimToConsider <= bigScreen,
    isSmallScreen: dimToConsider > tabletWidth && dimToConsider <= mediumScreen,
    isTablet: dimToConsider > mobileWidth && dimToConsider <= tabletWidth,
    isMobile: dimToConsider > miniMobileWidth && dimToConsider <= mobileWidth,
    isMini: dimToConsider <= miniMobileWidth,
    isPortrait: isScreenInPortrait(),
  };
};

export default getScreenDimensions;
