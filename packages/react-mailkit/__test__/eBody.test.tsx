import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { EBody } from '../src/eBody';
import { ESection } from '../src/eSection';
import { EColumn } from '../src/eColumn';
import { EText } from '../src/eText';

const Body = (
  <EBody backgroundColor="#d9d9d9" cssClass="mjml-body-class" width={500}>
    <ESection>
      <EColumn>
        <EText>React</EText>
      </EColumn>
    </ESection>
  </EBody>
);

describe('should be correct output', () => {
  it('should not be undefined', () => {
    const { container } = render(Body);
    expect(container.querySelector('mj-body')).not.toBeUndefined();
  });

  it('should render mj-body', () => {
    const { container } = render(Body);
    expect(container.querySelector('mj-body')).toBeInTheDocument();
  });

  it('should have one child', () => {
    const { container } = render(Body);
    expect(container.querySelector('mj-body')?.childNodes.length).toStrictEqual(
      1
    );
  });

  it('should have attributes background-color, css-class width', () => {
    const { container } = render(Body);
    expect(
      container.querySelector('mj-body')?.hasAttribute('background-color')
    ).toBeTruthy();
    expect(
      container.querySelector('mj-body')?.hasAttribute('css-class')
    ).toBeTruthy();
    expect(
      container.querySelector('mj-body')?.hasAttribute('width')
    ).toBeTruthy();
  });

  it('should have correct values in attributes', () => {
    const { container } = render(Body);
    expect(
      container.querySelector('mj-body')?.getAttribute('background-color')
    ).toStrictEqual('#d9d9d9');
    expect(
      container.querySelector('mj-body')?.getAttribute('css-class')
    ).toStrictEqual('mjml-body-class');
    expect(
      container.querySelector('mj-body')?.getAttribute('width')
    ).toStrictEqual('500px');
  });

  it('renders correctly', () => {
    expect(renderer.create(Body).toJSON()).toMatchSnapshot();
  });
});
