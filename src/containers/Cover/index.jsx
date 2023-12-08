import React, { useState, useEffect, useCallback } from 'react';
import { navigate } from 'gatsby';
import { Page, COVER_SHOW, COVER_HIDE } from '..';
import {
  Wrapper,
  ContainerCentered,
  LogoStyled,
  MarchioStyled,
  LabelStyled,
  IndicatorStyled,
  UnderConstruction,
} from './styled';
import { CookieComponent } from '../../components';
import {
  bigScreen,
  mediumScreen,
  tabletWidth,
  mobileWidth,
  isScreenInPortrait,
  COOKIE_NAME,
  getCookie,
  getScreenDimensions,
} from '../../utils';
import { logo, marchio, dicitura, background, arrowDown as indicator } from '../../assets';

const Cover = ({ staticSite }) => {
  const [step, setStep] = useState(0);
  const [moveUp, setMoveUp] = useState(false);
  const [showCover, setShowCover] = useState(COVER_SHOW);
  const [cookieAcceptance, setCookieAcceptance] = useState(false);
  const _dimensions = getScreenDimensions();
  const {
    height,
    width,
    isPortrait,
    isMini,
    isMobile,
    isTablet,
    isSmallScreen,
    isMediumScreen,
    isBigScreen,
  } = _dimensions;

  const [dimensions, setDimensions] = useState({
    height: typeof window !== 'undefined' && window.innerHeight,
    width: typeof window !== 'undefined' && window.innerWidth,
    isBigScreen,
    isMediumScreen,
    isSmallScreen,
    isTablet,
    isMobile,
    isPortrait: isScreenInPortrait(),
  });

  useEffect(() => {}, []);

  useEffect(() => {
    const debouncedHandleResize = () => {
      setDimensions({
        height: typeof window !== 'undefined' && window.innerHeight,
        width: typeof window !== 'undefined' && window.innerWidth,
        isBigScreen,
        isMediumScreen,
        isSmallScreen,
        isTablet,
        isMobile,
        isPortrait: isScreenInPortrait(),
      });
    };

    const changeOrientation = () => {
      const isPortrait = isScreenInPortrait();
      setTimeout(() => setDimensions({ ...dimensions, isPortrait }), 400);
    };

    window.addEventListener('resize', debouncedHandleResize);
    window.addEventListener('orientationchange', changeOrientation);
    return _ => {
      window.removeEventListener('resize', debouncedHandleResize);
      window.removeEventListener('orientationchange', changeOrientation);
    };
  }, []);

  useEffect(() => {
    setTimeout(() => setStep(1), 1500);
  }, []);

  useEffect(() => {
    if (showCover === COVER_HIDE) {
      navigate(`/tradizione`);
    }
  }, [showCover]);

  useEffect(() => {
    setDimensions({ ...dimensions, isPortrait: isScreenInPortrait() });
  }, [dimensions.isPortrait]);

  const setUp = useCallback(
    event => {
      setStep(step + 1);
      event.stopPropagation();
    },
    [step],
  );

  const bounce = useCallback(() => {
    return step >= 4;
  }, [step]);

  const isToAnimate = type => {
    switch (type) {
      case 'logo':
        return step >= 1;
      case 'marchio':
        return step >= 2;
      case 'dicitura':
        return step >= 3;
      case 'indicator':
        return step === 4;
    }
  };

  if (staticSite) {
    return (
      <>
        <Wrapper src={background} showcover={showCover}>
          <ContainerCentered
            isbigscreen={isBigScreen ? 1 : 0}
            ismediumscreen={isMediumScreen ? 1 : 0}
            issmallscreen={isSmallScreen ? 1 : 0}
            istablet={isTablet ? 1 : 0}
            ismobile={isMobile ? 1 : 0}
            isportrait={isScreenInPortrait()}
          >
            <LogoStyled
              staticSite={staticSite}
              className="logo"
              istablet={dimensions.isTablet ? 1 : 0}
              src={logo}
            />
            <MarchioStyled
              staticSite={staticSite}
              className="marchio"
              istablet={dimensions.isTablet ? 1 : 0}
              src={marchio}
            />
            <LabelStyled
              staticSite={staticSite}
              className="dicitura"
              istablet={dimensions.isTablet ? 1 : 0}
              src={dicitura}
            />
            <UnderConstruction>Coming soon</UnderConstruction>
          </ContainerCentered>
        </Wrapper>
      </>
    );
  }

  return (
    <>
      <Wrapper
        src={background}
        showcover={showCover}
        onClick={() => {
          if (!getCookie(COOKIE_NAME)) return;
          if (isToAnimate('indicator')) {
            setMoveUp(true);
          }
        }}
      >
        <ContainerCentered
          isbigscreen={isBigScreen ? 1 : 0}
          ismediumscreen={isMediumScreen ? 1 : 0}
          issmallscreen={isSmallScreen ? 1 : 0}
          istablet={isTablet ? 1 : 0}
          ismobile={isMobile ? 1 : 0}
          isportrait={isScreenInPortrait()}
        >
          <LogoStyled
            className="logo"
            istablet={dimensions.isTablet ? 1 : 0}
            moveup={moveUp ? 1 : 0}
            src={logo}
            appear={isToAnimate('logo') ? 1 : 0}
            onTransitionEnd={setUp}
          />
          <MarchioStyled
            className="marchio"
            istablet={dimensions.isTablet ? 1 : 0}
            moveup={moveUp ? 1 : 0}
            src={marchio}
            appear={isToAnimate('marchio') ? 1 : 0}
            onTransitionEnd={setUp}
          />
          <LabelStyled
            className="dicitura"
            istablet={dimensions.isTablet ? 1 : 0}
            moveup={moveUp ? 1 : 0}
            src={dicitura}
            appear={isToAnimate('dicitura') ? 1 : 0}
            onTransitionEnd={event => {
              if (step === 5) {
                setShowCover(COVER_HIDE);
              } else {
                setUp(event);
              }
            }}
          />
          {showCover != COVER_HIDE && (
            <IndicatorStyled
              className="indicator"
              src={indicator}
              appear={isToAnimate('indicator') ? 1 : 0}
              bounce={bounce() ? 1 : 0}
              onTransitionEnd={setUp}
            />
          )}
        </ContainerCentered>
      </Wrapper>
      {/* {showCover === COVER_HIDE && <Page dimensions={dimensions} />} */}
      {<CookieComponent setCookie={setCookieAcceptance} />}
    </>
  );
};

export default Cover;
