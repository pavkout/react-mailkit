import React, { FC } from 'react';

import {
  EMail,
  EHead,
  EStyle,
  EAttributes,
  EAll,
  EText,
  ESection,
  EBody,
  EColumn,
  ESpacer,
  ESocial,
  ESocialElement,
  EImage,
  EButton,
  useEmail
} from '@react-mailkit/core';

export const pizzaMarkup = (
  <EMail>
    <EHead>
      <EAttributes>
        <EAll color='#626262' fontFamily='sans-serif' fontSize='16px' />
        <EButton backgroundColor='#F45E43' color='#fff' fontSize='14px' />
      </EAttributes>
      <EStyle
        style={`.heading {
            padding-top: 15px;
            text-align: center;
            font-style: italic;
            font-size: 18px;
            font-family: "serif";
          }`}
      />
    </EHead>
    <EBody backgroundColor='#eee'>
      <ESection backgroundColor='#fff'>
        <EColumn>
          <EText
            align='center'
            fontFamily='serif'
            fontSize='32px'
            fontStyle='italic'
            paddingBottom='40px'
            paddingTop='40px'
          >
            The Pizza Times
          </EText>
        </EColumn>
      </ESection>
      <ESection
        backgroundRepeat='no-repeat'
        backgroundSize='cover'
        backgroundUrl='http://demo.tutorialzine.com/2017/02/images/header-image.jpg'
      >
        <EColumn>
          <ESpacer height='300px'></ESpacer>
        </EColumn>
      </ESection>
      <ESection backgroundColor='#fff'>
        <EColumn width='450px'>
          <EText>
            <p className='heading'>Hello Friends!</p>
          </EText>
          <EText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            rutrum enim eget magna efficitur, eu semper augue semper. Aliquam
            erat volutpat.
          </EText>
          <EImage
            borderRadius='3px'
            href='#'
            src='http://demo.tutorialzine.com/2017/02/images/map.jpg'
          ></EImage>
          <EText>
            Proin rutrum enim eget magna efficitur, eu semper augue semper.
            Aliquam erat volutpat.
          </EText>
          <EButton href='#' paddingBottom='25px'>
            Make Reservation
          </EButton>
        </EColumn>
      </ESection>
      <ESection backgroundColor='#fafafa'>
        <EColumn>
          <EText>
            <p className='heading'>We Recommend</p>
          </EText>
        </EColumn>
      </ESection>
      <ESection backgroundColor='#fafafa' padding='0 10px 10px'>
        <EColumn>
          <EImage
            paddingLeft='10px'
            paddingRight='10px'
            src='http://demo.tutorialzine.com/2017/02/images/pizza.jpg'
          ></EImage>
          <EImage
            paddingLeft='10px'
            paddingRight='10px'
            src='http://demo.tutorialzine.com/2017/02/images/salad.jpg'
          ></EImage>
        </EColumn>
        <EColumn>
          <EImage
            paddingLeft='10px'
            paddingRight='10px'
            src='http://demo.tutorialzine.com/2017/02/images/cake.jpg'
          ></EImage>
          <EText
            align='center'
            fontSize='14px'
            paddingBottom='10px'
            paddingTop='15px'
          >
            <p style={{ maxWidth: '400px' }}>
              Try our selection of Oven-baked Pizza, Fresh Salads, and Homemade
              Cake.
            </p>
          </EText>
          <EButton href='#' paddingBottom='15px' paddingTop='0'>
            Order Now
          </EButton>
        </EColumn>
      </ESection>
      <ESection backgroundColor='#fff'>
        <EColumn>
          <EText align='center' fontSize='11px'>
            The Pizza Times
          </EText>
          <ESocial fontSize='0px' iconSize='16px' padding='0px'>
            <ESocialElement href='#' name='facebook'></ESocialElement>
            <ESocialElement href='#' name='instagram'></ESocialElement>
            <ESocialElement href='#' name='twitter'></ESocialElement>
          </ESocial>
        </EColumn>
      </ESection>
    </EBody>
  </EMail>
);

const Pizza: FC<any> = () => {
  const { html } = useEmail(pizzaMarkup, {
    validationLevel: 'soft'
  });

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
};

export default Pizza;
