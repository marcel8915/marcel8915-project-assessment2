import React from 'react';
import { Field } from 'redux-form';
import styled from 'styles/styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-self: center;
`;
const LabelWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    padding: 10px;
    flex: 0.4;
`;
const Label = styled.label`
    font-size: 20px;
`;
const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 10px;
    flex: 0.6;
`;
const StyledInput = styled.input`
    border: 2px solid black;
    font-size: 20px;
    max-width: 250px;
`;
const Error = styled.span`
    font-weight: bold;
    color: red;
`;

const InputComponent = ({ input, type, meta: { touched, error } }) => (
    <>
        <StyledInput {...input} type={type} />
        {touched && (error && <Error>{error}</Error>)}
    </>
);

const Input = ({ label, name, ...props }) => {
    return (
        <Container>
            <LabelWrapper>
                <Label>{`${label}:`}</Label>
            </LabelWrapper>
            <InputWrapper>
                <Field
                    type="text"
                    {...props}
                    name={name}
                    component={InputComponent}
                />
            </InputWrapper>
        </Container>
    );
};
export default Input;
