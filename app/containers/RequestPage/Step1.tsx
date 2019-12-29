import React from 'react';
import { reduxForm } from 'redux-form';
import get from 'lodash/get';

import Button from 'components/Button';
import Form, { Input } from 'components/Form';

import { InputWrapper, ButtonWrapper } from './StyledComponents';

const validate = values => {
    let errors = {};
    const noParts = get(values, 'noParts', '');
    if (!noParts) {
        errors = { noParts: 'Required' };
    } else if (noParts && (noParts.indexOf(' ') >= 0) || isNaN(Number(noParts))) {
        errors = { noParts: 'Please input valid number' };
    } else if (noParts < 1 || noParts > 100) {
        errors = { noParts: 'Must between 1 and 100' };
    }
    return errors;
};

const Step1 = ({ history, handleSubmit, invalid, onNext }) => {
    return (
        <Form>
            <InputWrapper>
                <Input name="noParts" label="Number of parts" />
            </InputWrapper>
            <ButtonWrapper>
                <Button color="secondary" onClick={() => history.goBack()}>Previous</Button>
                <Button onClick={handleSubmit((data) => onNext(data))} disabled={invalid}>Next</Button>
            </ButtonWrapper>
        </Form>
    );
};
export default reduxForm({
    form: 'step1',
    validate,
})(Step1);
