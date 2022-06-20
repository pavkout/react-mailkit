import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { ETable } from '../src/eTable';

const Table = (
  <ETable tableLayout="fixed">
    <tr
      style={{
        borderBottom: '1px solid #ecedee',
        textAlign: 'left',
        padding: '15px 0',
      }}>
      <th style={{ padding: '0 15px 0 0' }}>Year</th>
      <th style={{ padding: '0 15px' }}>Language</th>
      <th style={{ padding: '0 0 0 15px' }}>Inspired from</th>
    </tr>
    <tr>
      <td style={{ padding: '0 15px 0 0' }}>1995</td>
      <td style={{ padding: '0 15px' }}>PHP</td>
      <td style={{ padding: '0 0 0 15px' }}>C, Shell Unix</td>
    </tr>
    <tr>
      <td style={{ padding: '0 15px 0 0' }}>1995</td>
      <td style={{ padding: '0 15px' }}>JavaScript</td>
      <td style={{ padding: '0 0 0 15px' }}>Scheme, Self</td>
    </tr>
  </ETable>
);

describe('should be correct output', () => {
  it('should not be undefined', () => {
    const { container } = render(Table);
    expect(container).not.toBeUndefined();
  });

  it('should render ETable', () => {
    const { container } = render(Table);
    expect(container.querySelector('mj-table')).toBeInTheDocument();
  });

  it('should have three children', () => {
    const { container } = render(Table);
    expect(
      container.querySelector('mj-table')!.childNodes.length
    ).toStrictEqual(3);
  });

  it('should have tr as children', () => {
    const { container } = render(Table);
    container.querySelector('mj-table')!.childNodes.forEach((child) => {
      expect(child.nodeName).toEqual('TR');
    });
  });

  it('should each tr have td as children', () => {
    const { container } = render(Table);
    container.querySelector('mj-table')!.childNodes.forEach((child, index) => {
      child.childNodes.forEach((trChild) => {
        expect(trChild.nodeName).toEqual(index === 0 ? 'TH' : 'TD');
      });
    });
  });

  it('renders correctly', () => {
    expect(renderer.create(Table).toJSON()).toMatchSnapshot();
  });
});
