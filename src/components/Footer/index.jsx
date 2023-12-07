import React from 'react';
import { navigate } from 'gatsby';
import { routes, isScreenInPortrait, getScreenDimensions } from '../../utils';
import { background, headerBkg, logo, marchio } from '../../assets';
import {
  FooterStyled,
  BackToHome,
  Address2,
  ContactContainer,
  Logo,
  Marchio,
  Address,
  Links,
  MapLink,
  VideoLink,
  Underline,
  ArticleText,
  Left,
  Center,
  Right,
} from './styled';

const Footer = () => {
  const dimensions = getScreenDimensions();
  const { isMini, isMobile, isTablet, isSmallScreen, isMediumScreen, isBigScreen } = dimensions;
  const defProps = {
    ismini: isMini ? 1 : 0,
    ismobile: isMobile ? 1 : 0,
    istablet: isTablet ? 1 : 0,
    issmallscreen: isSmallScreen ? 1 : 0,
    ismediumscreen: isMediumScreen ? 1 : 0,
    isbigscreen: isBigScreen ? 1 : 0,
    isportrait: isScreenInPortrait(),
  };
  const handleClickLogo = () => {
    document.documentElement.scrollTop = 0;
    if (typeof window !== 'undefined') {
      if (['/', '/tradizione'].includes(window.location.pathname)) return null;
    }
    return navigate(routes.tradizione);
  };

  const getLogo = (
    <BackToHome {...defProps} onClick={handleClickLogo}>
      <Logo src={logo} />
      <Marchio src={marchio} />
    </BackToHome>
  );

  const getAddress = (
    <Address {...defProps}>
      <article>
        {isMobile ? (
          <ArticleText {...defProps}>Azienda agricola di Turchi Lorenzo.</ArticleText>
        ) : (
          <ArticleText {...defProps}>
            Azienda agricola Poggio alle Forche di Turchi Lorenzo.
          </ArticleText>
        )}
      </article>
    </Address>
  );

  const getAddress2 = (
    <Address2 {...defProps}>
      <article>
        {isMobile ? (
          <>
            <ArticleText {...defProps}>Podere Scarnacuoia 288, </ArticleText>
            <ArticleText {...defProps}>Montalcino (Siena) - Italia</ArticleText>
          </>
        ) : (
          <ArticleText {...defProps}>
            Podere Scarnacuoia 288, Montalcino (Siena) - Italia
          </ArticleText>
        )}
      </article>
    </Address2>
  );

  const reloadWorkaround = id => {
    const el = document.querySelector(id);
    el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    if (id === '#video') {
      const hash = window.location.hash;
      const hashSplitted = hash.split('_');
      let newHash = hashSplitted[0].concat('_');
      if (hashSplitted[1]) {
        newHash = newHash.concat(Number(hashSplitted[1]) + 1);
      } else {
        newHash = newHash.concat('1');
      }
      window.location.hash = newHash;
    }
  };

  const getLink = (
    <Links {...defProps}>
      <MapLink
        onClick={event => {
          window.location.pathname === routes.prodotti
            ? reloadWorkaround('#map')
            : navigate(`${routes.prodotti}#map`);
          event.stopPropagation();
        }}
        {...defProps}
      >
        <Underline {...defProps}>Dove siamo</Underline>
      </MapLink>
      <VideoLink
        {...defProps}
        onClick={event => {
          window.location.pathname === routes.tradizione
            ? reloadWorkaround('#video')
            : navigate(`${routes.tradizione}#video`);
          event.stopPropagation();
        }}
      >
        <Underline {...defProps}>Video</Underline>
      </VideoLink>
    </Links>
  );

  const contactDefProps = {
    textDecoration: 'underline',
    cursor: 'pointer',
    display: 'block',
    color: 'white',
  };
  const getContact = (
    <ContactContainer {...defProps}>
      <article>
        <ArticleText {...defProps}>
          Contatti
          <br />
          <a href="mailto:info@poggioalleforche.it" style={{ ...contactDefProps }}>
            info@poggioalleforche.it{' '}
          </a>
          <a href="tel:+393471927357" style={{ ...contactDefProps, paddingTop: '8px' }}>
            +39 347 1927 357
          </a>
        </ArticleText>
      </article>
    </ContactContainer>
  );

  const getMobile = () => {
    if (isScreenInPortrait()) {
      return mobilePortrait;
    } else {
      return mobileLandscape;
    }
  };

  const mobilePortrait = (
    <>
      <Left {...defProps}>
        {getLogo}
        {getAddress}
        {getAddress2}
      </Left>
      <Right {...defProps}>
        {getContact}
        {getLink}
      </Right>
    </>
  );
  const mobileLandscape = (
    <>
      <Left {...defProps}>
        {getAddress}
        {getAddress2}
      </Left>
      <Center {...defProps}>{getLogo}</Center>
      <Right {...defProps}>
        {getContact}
        {getLink}
      </Right>
    </>
  );

  return (
    <FooterStyled src={dimensions.isMobile ? background : headerBkg} {...defProps}>
      {isMobile || isMini ? (
        getMobile()
      ) : (
        <>
          {getAddress}
          {getAddress2}
          {getLogo}
          {getLink}
          {getContact}
        </>
      )}
    </FooterStyled>
  );
};

export default Footer;
