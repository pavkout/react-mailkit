import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { ENavbar } from '../src/eNavbar';
import { ENavbarLink } from '../src/eNavbarLink';

const Navbar = (
  <ENavbar>
    <ENavbarLink href="/gettings-started-onboard" color="#ffffff">
      Getting started
    </ENavbarLink>
    <ENavbarLink href="/try-it-live" color="#ffffff">
      Try it live
    </ENavbarLink>
    <ENavbarLink href="/templates" color="#ffffff">
      Templates
    </ENavbarLink>
    <ENavbarLink href="/components" color="#ffffff">
      Components
    </ENavbarLink>
  </ENavbar>
);

describe('should be correct output', () => {
  it('should not be undefined', () => {
    const { container } = render(Navbar);
    expect(container).not.toBeUndefined();
  });

  it('should render ENavbar', () => {
    const { container } = render(Navbar);
    expect(container.querySelector('mj-navbar')).toBeInTheDocument();
  });

  it('should have three children', () => {
    const { container } = render(Navbar);
    expect(
      container.querySelector('mj-navbar')!.childNodes.length
    ).toStrictEqual(4);
  });

  it('should have ENavbarLink as children', () => {
    const { container } = render(Navbar);
    container.querySelector('mj-navbar')!.childNodes.forEach((child) => {
      expect(child.nodeName).toEqual('MJ-NAVBAR-LINK');
    });
  });

  it('should all ENavbarLink have href attribute', () => {
    const { container } = render(Navbar);
    container.querySelector('mj-navbar')!.childNodes.forEach((child) => {
      expect(child).toHaveAttribute('href');
    });
  });

  it('renders correctly', () => {
    expect(renderer.create(Navbar).toJSON()).toMatchSnapshot();
  });
});
