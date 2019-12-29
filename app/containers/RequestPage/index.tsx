/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React, { useState } from 'react';
import has from 'lodash/has';

import Stepper from 'react-stepper-horizontal';

import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import { Container, ContentWrapper } from './StyledComponents';

const RequestPage = (props) => {
  const [page, setPage] = useState(1);

  const onNext = (flag, data) => {
    if (flag === 2 && has(data, 'noParts')) {
      setPage(flag);
    } else if (flag === 3 && data) {
      setPage(flag);
    }
  };

  const onPrev = () => setPage(prevPage => prevPage - 1);

  return (
    <Container>
      <Stepper
        steps={[{}, {}, {}]}
        activeStep={page - 1}
        activeColor="#3333ff"
        completeColor="#3333ff"
        defaultColor="#8488e9"
        defaultBarColor="#8488e9"
        completeBarColor="#3333ff"
        size={50}
        circleFontSize={30}
        lineMarginOffset={0}
      />
      <ContentWrapper>
        <div style={{ display: (page > 1 ? 'none' : 'contents') }}>
          <Step1 onNext={(data) => onNext(2, data)} {...props} onPrev={onPrev} />
        </div>
        {page >= 2 && (
          <div style={{ display: (page > 2 ? 'none' : 'contents') }}>
            <Step2 onNext={(data) => onNext(3, data)} {...props} onPrev={onPrev} />
          </div>
        )}
        {page === 3 && (
          <div>
            <Step3 {...props} />
          </div>
        )}
      </ContentWrapper>
    </Container>
  );
};
export default RequestPage;
