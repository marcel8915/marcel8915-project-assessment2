/**
 * Testing our Button component
 */

import React from 'react';
import { fireEvent, render } from '@testing-library/react';

import Button, { Props } from '../index';

const children = <h1>Test</h1>;
const renderComponent = (props: Props & { type?: any } = {}) => {
  const utils = render(
    // tslint:disable-next-line: jsx-wrap-multiline
    <Button {...props}>
      {children}
    </Button>,
  );

  const button = utils.queryByText('Test')!.parentNode! as HTMLElement;
  return { ...utils, button };
};

describe('<Button />', () => {
  it('should have children', () => {
    const { button } = renderComponent();
    expect(button.children).toHaveLength(1);
  });

  it('should handle click events', () => {
    const onClickSpy = jest.fn();
    const { button } = renderComponent({ onClick: onClickSpy });
    fireEvent.click(button);
    expect(onClickSpy).toHaveBeenCalled();
  });

  it('should have a class attribute', () => {
    const { button } = renderComponent();
    expect(button).toHaveAttribute('class');
  });
});
