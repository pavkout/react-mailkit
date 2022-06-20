import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { EHtmlAttributes } from '../src/eHtmlAttributes';
import { EHtmlAttribute } from '../src/eHtmlAttribute';
import { ESelector } from '../src/eSelector';

const Selector = (
  <EHtmlAttributes>
    <ESelector path=".custom div">
      <EHtmlAttribute name="data-id">42</EHtmlAttribute>
      <EHtmlAttribute name="data-id-1">32</EHtmlAttribute>
      <EHtmlAttribute name="data-id-2">22</EHtmlAttribute>
    </ESelector>
  </EHtmlAttributes>
);

describe('should be correct output', () => {
  it('should not be undefined', () => {
    const { container } = render(Selector);
    expect(container).not.toBeUndefined();
  });

  it('should render ESelector', () => {
    const { container } = render(Selector);
    expect(container.querySelector('mj-selector')).toBeInTheDocument();
  });

  it('should have three children', () => {
    const { container } = render(Selector);
    expect(
      container.querySelector('mj-selector')!.childNodes.length
    ).toStrictEqual(3);
  });

  it('should have EHtmlAttribute as children', () => {
    const { container } = render(Selector);
    container.querySelector('mj-selector')!.childNodes.forEach((child) => {
      expect(child.nodeName).toEqual('MJ-HTML-ATTRIBUTE');
    });
  });

  it('should have path attribute', () => {
    const { container } = render(Selector);
    expect(
      container.querySelector('mj-selector')!.hasAttribute('path')
    ).toBeTruthy();
  });

  it('should have .custom div as path attribute', () => {
    const { container } = render(Selector);
    expect(
      container.querySelector('mj-selector')!.getAttribute('path')
    ).toStrictEqual('.custom div');
  });

  it('renders correctly', () => {
    expect(renderer.create(Selector).toJSON()).toMatchSnapshot();
  });
});
