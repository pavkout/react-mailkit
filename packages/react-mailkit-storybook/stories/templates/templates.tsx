import React, { FC, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import map from 'lodash.map';
import camelCase from 'lodash.camelcase';
import capitalize from 'lodash.capitalize';

const Slider = styled.div`
  background: white;
  box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.125);
  height: 100px;
  margin: auto;
  overflow: hidden;
  position: relative;
  width: 1000px;
  border-radius: 6px;

  &::before,
  &::after {
    background: linear-gradient(
      to right,
      white 0%,
      rgba(255, 255, 255, 0) 100%
    );
    content: '';
    height: 100px;
    position: absolute;
    width: 120px;
    z-index: 2;
  }

  &::after {
    right: 0;
    top: 0;
    transform: rotateZ(180deg);
  }
  &::before {
    left: 0;
    top: 0;
  }

  &:hover div {
    animation-play-state: paused;
  }
`;

// Create the keyframes
const scroll = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-250px * 7));
  }
`;

const SlideTrack = styled.div`
  animation: ${scroll} 40s linear infinite;
  display: flex;
  align-items: center;
  height: 100%;
  width: calc(250px * 14);
`;

const SliderItemsContainer = styled.div`
  border: 1px solid #333333;
  background-color: #333333;
  border-radius: 30px;
  margin: 10px 15px;
  padding 10px 15px;
  white-space: nowrap;
  box-shadow: 5px 5px 10px 0px rgba(0,0,0,0.3);

  &:hover {
    cursor: pointer;
  }
`;

const SliderItems = styled.span`
  color: white;
  font-style: italic;
  letter-spacing: 1.5px;
  font-weight: 900;
`;

const SliderHeader = styled.h1`
  color: white;
`;

const PreviewHeader = styled.h1`
  color: white;
  margin: 15px 0;
`;

const templates = [
  'Amario',
  'Arturia',
  'Austin',
  'Black Friday',
  'Card',
  'Christmas',
  'hAndm',
  'Happy New Year',
  'One Page',
  'Pizza',
  'Proof',
  'Racoon',
  'Reactivation Email',
  'Real Estate',
  'Recast',
  'Receipt Email',
  'Referral Email',
  'Ticket Shop',
  'Ugg Royale',
  'Welcome Email',
  'Worldly'
];

export const Templates: FC<any> = () => {
  const [selectedTemplate, setSelectedTemplate] = useState('Amario');

  const CompTag = require(`./${camelCase(selectedTemplate)}`).default;

  return (
    <>
      <SliderHeader>Choose and see the selected template</SliderHeader>
      <Slider>
        <SlideTrack>
          {map(templates, (t: string, index: number) => (
            <SliderItemsContainer
              key={index}
              onClick={() => setSelectedTemplate(t)}
            >
              <SliderItems>{t === 'hAndm' ? 'H&M' : t}</SliderItems>
            </SliderItemsContainer>
          ))}
        </SlideTrack>
      </Slider>
      <PreviewHeader>
        {selectedTemplate === 'hAndm' ? 'H&M' : capitalize(selectedTemplate)}
      </PreviewHeader>
      <CompTag />
    </>
  );
};
