import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { EGroup } from '../src/eGroup';
import { EColumn } from '../src/eColumn';
import { EImage } from '../src/eImage';
import { EText } from '../src/eText';

const Group = (
  <EGroup width={600}>
    <EColumn>
      <EImage
        width="137px"
        height="185px"
        padding="0"
        src="https://mjml.io/assets/img/easy-and-quick.png"
      />
      <EText align="center">
        <h2>Easy and quick</h2>
        <p>
          Write less code, save time and code more efficiently with MJML’s
          semantic syntax.
        </p>
      </EText>
    </EColumn>
    <EColumn>
      <EImage
        width="166px"
        height="185px"
        padding="0"
        src="https://mjml.io/assets/img/responsive.png"
      />
      <EText align="center">
        <h2>Responsive</h2>
        <p>
          MJML is responsive by design on most-popular email clients, even
          Outlook.
        </p>
      </EText>
    </EColumn>
  </EGroup>
);

describe('should be correct output', () => {
  it('should not be undefined', () => {
    const { container } = render(Group);
    expect(container).not.toBeUndefined();
  });

  it('should render EComment', () => {
    const { container } = render(Group);
    expect(container.querySelector('mj-group')).toBeInTheDocument();
  });

  it('should not render nested ESection inside EGroup', () => {
    const { container } = render(Group);
    expect(
      container.querySelector('mj-group')?.querySelector('mj-section')
    ).toBeNull();
  });

  it('should have two children', () => {
    const { container } = render(Group);
    expect(
      container.querySelector('mj-group')?.childNodes.length
    ).toStrictEqual(2);
  });

  it('should all children be EColumn', () => {
    const { container } = render(Group);
    container.querySelector('mj-group')?.childNodes.forEach((child) => {
      expect(child.nodeName).toEqual('MJ-COLUMN');
    });
  });

  it('should have width attribute', () => {
    const { container } = render(Group);
    expect(
      container.querySelector('mj-group')?.hasAttribute('width')
    ).toBeTruthy();
  });

  it('should have 600px as width attribute', () => {
    const { container } = render(Group);
    expect(
      container.querySelector('mj-group')?.getAttribute('width')
    ).toStrictEqual('600px');
  });

  it('renders correctly', () => {
    expect(renderer.create(Group).toJSON()).toMatchSnapshot();
  });
});
