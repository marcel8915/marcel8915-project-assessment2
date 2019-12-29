import React from 'react';
import styled from 'styles/styled-components';
import Button from 'components/Button';

const H1 = styled.h1`
    color: #3333ff;
    font-size: 5em;
`;

const Step3 = ({ history }) => (
    <>
        <H1>Success!</H1>
        <Button color="secondary" onClick={() => history.goBack()}>Home</Button>
    </>
);
export default Step3;
