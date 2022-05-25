import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { EAccordion } from '../src/eAccordion';
import { EAccordionElement } from '../src/eAccordionElement';
import { EAccordionTitle } from '../src/eAccordionTitle';
import { EAccordionText } from '../src/eAccordionText';

const Accordion = (
  <EAccordion>
    <EAccordionElement
      data-testid="e-accordion-element-1"
      iconWrappedUrl="https://i.imgur.com/Xvw0vjq.png"
      iconUnwrappedUrl="https://i.imgur.com/KKHenWa.png"
      iconHeight="24px"
      iconWidth="24px">
      <EAccordionTitle
        fontFamily="Roboto, Open Sans, Helvetica, Arial, sans-serif"
        backgroundColor="#fff"
        color="#031017"
        padding="15px"
        fontSize="18px">
        Why use an accordion?
      </EAccordionTitle>
      <EAccordionText
        fontFamily="Open Sans, Helvetica, Arial, sans-serif"
        backgroundColor="#fafafa"
        padding="15px"
        color="#505050"
        fontSize="14potrt">
        <span style={{ lineHeight: '20px' }}>
          Because emails with a lot of content are most of the time a very bad
          experience on mobile, E-accordion comes handy when you want to deliver
          a lot of information in a concise way.
        </span>
      </EAccordionText>
    </EAccordionElement>
    <EAccordionElement
      data-testid="e-accordion-element-2"
      iconWrappedUrl="https://i.imgur.com/Xvw0vjq.png"
      iconUnwrappedUrl="https://i.imgur.com/KKHenWa.png"
      iconHeight="24px"
      iconWidth="24px">
      <EAccordionTitle
        fontFamily="Roboto, Open Sans, Helvetica, Arial, sans-serif"
        backgroundColor="#fff"
        color="#031017"
        padding="15px"
        fontSize="18px">
        How it works
      </EAccordionTitle>
      <EAccordionText
        fontFamily="Open Sans, Helvetica, Arial, sans-serif"
        backgroundColor="#fafafa"
        padding="15px"
        color="#505050"
        fontSize="14potrt">
        <span style={{ lineHeight: '20px' }}>
          Content is stacked into tabs and users can expand them at will. If
          responsive styles are not supported (mostly on desktop clients), tabs
          are then expanded and your content is readable at once.
        </span>
      </EAccordionText>
    </EAccordionElement>
  </EAccordion>
);

describe('should be correct output', () => {
  it('should not be undefined', () => {
    const { container } = render(Accordion);
    expect(container).not.toBeUndefined();
  });

  it('should render mj-accordion', () => {
    const { container } = render(Accordion);
    expect(container.querySelector('mj-accordion')).toBeInTheDocument();
  });

  it('should have two children', () => {
    const { container } = render(Accordion);
    expect(
      container.querySelector('mj-accordion')?.childNodes.length
    ).toStrictEqual(2);
  });

  it('should all children be mj-accordion-element', () => {
    const { container } = render(Accordion);
    container.querySelector('mj-accordion')?.childNodes.forEach((child) => {
      expect(child.nodeName).toEqual('MJ-ACCORDION-ELEMENT');
    });
  });

  it('should each mj-accordion-element has 2 children', () => {
    const { container } = render(Accordion);
    container.querySelector('mj-accordion')?.childNodes.forEach((child) => {
      expect(child.childNodes.length).toStrictEqual(2);
    });
  });

  it('should each mj-accordion-element has one mj-accordion-title and one mj-accordion-text', () => {
    const { container } = render(Accordion);
    container.querySelector('mj-accordion')?.childNodes.forEach((child) => {
      expect(child.firstChild?.nodeName).toEqual('MJ-ACCORDION-TITLE');
      expect(child.lastChild?.nodeName).toEqual('MJ-ACCORDION-TEXT');
    });
  });

  it('should the first mj-accordion-element has correct title', () => {
    const { container } = render(Accordion);
    expect(
      container.querySelector('mj-accordion')?.firstChild?.firstChild
        ?.firstChild?.nodeValue
    ).toEqual('Why use an accordion?');
  });

  it('should the mj-accordion-text of the first mj-accordion-element not empty', () => {
    const { container } = render(Accordion);
    expect(
      container.querySelector('mj-accordion')?.firstChild?.lastChild?.firstChild
        ?.firstChild
    ).not.toBeNull();
  });

  it('should the mj-accordion-text of the first mj-accordion-element to be span', () => {
    const { container } = render(Accordion);
    expect(
      container.querySelector('mj-accordion')?.firstChild?.lastChild?.firstChild
        ?.nodeName
    ).toBe('SPAN');
  });

  it('should the span of the mj-accordion-text of the first mj-accordion-element has style lineHeight: 20px', () => {
    const { container } = render(Accordion);
    expect(
      container.querySelector('mj-accordion')?.firstChild?.lastChild?.firstChild
    ).toHaveStyle('lineHeight: 20px');
  });

  it('should mj-accordion-text of the second mj-accordion-element has correct attribute', () => {
    const { container } = render(Accordion);
    expect(
      container.querySelector('mj-accordion')?.lastChild?.lastChild
    ).toHaveAttribute('color');
  });

  it('renders correctly', () => {
    expect(renderer.create(Accordion).toJSON()).toMatchSnapshot();
  });
});
