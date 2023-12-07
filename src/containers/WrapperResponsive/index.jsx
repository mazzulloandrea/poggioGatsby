import React from 'react';
import { Layout } from '..';

const WrapperResponsive = ({ children }) => {
  return (
    <div>
      <Layout></Layout>
      {children}
    </div>
  );
};

export default WrapperResponsive;
