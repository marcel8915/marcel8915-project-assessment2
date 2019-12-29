import React, { useEffect } from 'react';
import { reduxForm, getFormValues, FieldArray } from 'redux-form';
import { get, times, constant, isEmpty } from 'lodash';
import { useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Button from 'components/Button';
import Form, { Input } from 'components/Form';

import { InputWrapper, ButtonWrapper } from './StyledComponents';

const partsComponent = ({ fields, ...props }) => (
    <>
        {fields.map((part, index) => (
            <Input key={index} name={part} label={`Part ${index + 1} %`} />
        ))}
    </>
);

const validate = values => {
    let errors = {};
    const partErrors = Array();
    const parts = get(values, 'parts', []);

    parts.forEach((part, index) => {
        if (part !== '100') {
            partErrors[index] = 'Part must be 100';
        }
    });
    if (partErrors.length) {
        errors = { parts: partErrors };
    }
    return errors;
};

const stateSelector = createStructuredSelector({
    step1: getFormValues('step1'),
});

const Step2 = ({ handleSubmit, invalid, initialize, onNext, onPrev }) => {
    const { step1 } = useSelector(stateSelector);

    useEffect(() => {
        const noParts = get(step1, 'noParts');
        if (noParts) {
            const parts = times(noParts, constant(''));
            initialize({ parts });
        }
    }, []);

    return (
        <Form>
            <InputWrapper>
                <FieldArray name="parts" component={partsComponent} />
            </InputWrapper>
            <ButtonWrapper>
                <Button color="secondary" onClick={onPrev}>Previous</Button>
                <Button onClick={handleSubmit((data) => onNext(data))} disabled={invalid}>Next</Button>
            </ButtonWrapper>
        </Form>
    );
};
export default reduxForm({
    form: 'step2',
    validate,
})(Step2);
