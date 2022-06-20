import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { EWrapper } from '../src/eWrapper';
import { ESection } from '../src/eSection';
import { EColumn } from '../src/eColumn';
import { EImage } from '../src/eImage';
import { EText } from '../src/eText';
import { EDivider } from '../src/eDivider';

const Wrapper = (
  <EWrapper border="1px solid #000000" padding="50px 30px">
    <ESection
      borderTop="1px solid #aaaaaa"
      borderLeft="1px solid #aaaaaa"
      borderRight="1px solid #aaaaaa"
      padding="20px">
      <EColumn>
        <EImage padding="0" src="https://place-hold.it/350x150" />
      </EColumn>
    </ESection>
    <ESection
      borderLeft="1px solid #aaaaaa"
      borderRight="1px solid #aaaaaa"
      padding="20px"
      border-bottom="1px solid #aaaaaa">
      <EColumn border="1px solid #dddddd">
        <EText padding="20px"> First line of text </EText>
        <EDivider
          borderWidth="1px"
          borderStyle="dashed"
          borderColor="lightgrey"
          padding="0 20px"
        />
        <EText padding="20px"> Second line of text </EText>
      </EColumn>
    </ESection>
  </EWrapper>
);

describe('should be correct output', () => {
  it('should not be undefined', () => {
    const { container } = render(Wrapper);
    expect(container).not.toBeUndefined();
  });

  it('should render EWrapper', () => {
    const { container } = render(Wrapper);
    expect(container.querySelector('mj-wrapper')).toBeInTheDocument();
  });

  it('should have two children', () => {
    const { container } = render(Wrapper);
    expect(
      container.querySelector('mj-wrapper')!.childNodes.length
    ).toStrictEqual(2);
  });

  it('should have ESection as children', () => {
    const { container } = render(Wrapper);
    container.querySelector('mj-wrapper')!.childNodes.forEach((child) => {
      expect(child.nodeName).toEqual('MJ-SECTION');
    });
  });

  it('should have border attribute', () => {
    const { container } = render(Wrapper);
    expect(
      container.querySelector('mj-wrapper')!.hasAttribute('border')
    ).toBeTruthy();
  });

  it('should have 1px solid #000000 as border attribute', () => {
    const { container } = render(Wrapper);
    expect(
      container.querySelector('mj-wrapper')!.getAttribute('border')
    ).toStrictEqual('1px solid #000000');
  });

  it('should have padding attribute', () => {
    const { container } = render(Wrapper);
    expect(
      container.querySelector('mj-wrapper')!.hasAttribute('padding')
    ).toBeTruthy();
  });

  it('should have 50px 30px as padding attribute', () => {
    const { container } = render(Wrapper);
    expect(
      container.querySelector('mj-wrapper')!.getAttribute('padding')
    ).toStrictEqual('50px 30px');
  });

  it('renders correctly', () => {
    expect(renderer.create(Wrapper).toJSON()).toMatchSnapshot();
  });
});
