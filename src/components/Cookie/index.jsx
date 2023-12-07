import React from 'react';
import CookieConsent from 'react-cookie-consent';
import { COOKIE_NAME } from '../../utils';

const CookieComponent = ({ setCookie }) => {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Accept"
      cookieName={COOKIE_NAME}
      style={{ background: '#2B373B' }}
      buttonStyle={{ background: '#FFFFFF', color: '#4e503b', fontSize: '13px' }}
      expires={365}
      onAccept={acceptedByScrolling => {
        setCookie(true);
      }}
    >
      Questo sito web utilizza i cookie per consentire di distinguere i visitatori; i cookie vengono
      memorizzati per 1 anno e vengono utilizzati anche per Google Analytics. ​
    </CookieConsent>
  );
};

export default CookieComponent;
