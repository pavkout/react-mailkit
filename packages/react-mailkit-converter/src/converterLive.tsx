import React, { useState } from 'react';

import {
  EAccordion,
  EAccordionElement,
  EAccordionText,
  EAccordionTitle,
  EAll,
  EAttributes,
  EBody,
  EBreakpoint,
  EButton,
  ECarousel,
  ECarouselImage,
  EClass,
  EColumn,
  EDivider,
  EFont,
  EGroup,
  EHead,
  EHero,
  EHtmlAttributes,
  EHtmlAttribute,
  EImage,
  EInclude,
  EMail,
  ENavbar,
  ENavbarLink,
  EPreview,
  ERaw,
  ESection,
  ESelector,
  ESocial,
  ESocialElement,
  ESpacer,
  EStyle,
  ETable,
  EText,
  ETitle,
  EWrapper,
  EAppStore,
  EComment,
  EImageText,
  ETracking,
  EQrCode,
  EYahooStyles,
  ESocialMedia,
  ESocialPost,
  EUnderlinedTitle,
  EMap,
  ERating,
  EAvatar,
  EYoutube,
  EYoutubeThumbnail,
  EBarcode,
  useEmail
} from '@react-mailkit/core';

// import { RowContainer } from '../../components/rowContainer';

import Converter from './converter';

const initialDemo = `
<mjml>
  <mj-head>
    <mj-attributes>
      <mj-all font-family="sans-serif" font-size="16px" color="#626262" />
      <mj-button background-color="#F45E43" color="#fff" font-size="14px" />
    </mj-attributes>
    <mj-style>
      .heading {
        padding-top: 15px;
        text-align: center;
        font-style: italic;
        font-size: 18px;
        font-family: "serif";
      }
    </mj-style>
  </mj-head>
  <mj-body>
    <mj-container background-color="#eee">
      <mj-section background-color="#fff">
        <mj-column>

          <mj-text align="center" font-style="italic" font-size="32px" font-family="serif" padding-top="40px" padding-bottom="40px">The Pizza Times</mj-text>

        </mj-column>
      </mj-section>
      <mj-section background-url="http://demo.tutorialzine.com/2017/02/images/header-image.jpg" background-size="cover" background-repeat="no-repeat">

        <mj-column>

          <mj-spacer height="300px" />

        </mj-column>
      </mj-section>
      <mj-section background-color="#fff">
        <mj-column width="450">

          <mj-text>
            <p class="heading">Hello Friends!<p>
          </mj-text>

          <mj-text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin rutrum enim eget magna efficitur, eu semper augue semper. Aliquam erat volutpat.</mj-text>

          <mj-image src="http://demo.tutorialzine.com/2017/02/images/map.jpg" border-radius="3" href="#" />

          <mj-text>
            Proin rutrum enim eget magna efficitur, eu semper augue semper. Aliquam erat volutpat.</mj-text>

          <mj-button padding-bottom="25" href="#">Make Reservation</mj-button>

        </mj-column>
      </mj-section>


      <mj-section background-color="#fafafa">
        <mj-column>

          <mj-text>
            <p class="heading">We Recommend</p>
          </mj-text>

        </mj-column>
      </mj-section>
      <mj-section background-color="#fafafa" padding="0 10px 10px">
        <mj-column>

          <mj-image src="http://demo.tutorialzine.com/2017/02/images/pizza.jpg" padding-left="10px" padding-right="10px" />

          <mj-image src="http://demo.tutorialzine.com/2017/02/images/salad.jpg" padding-left="10px" padding-right="10px" />

        </mj-column>
        <mj-column>

          <mj-image src="http://demo.tutorialzine.com/2017/02/images/cake.jpg" padding-left="10px" padding-right="10px" />

          <mj-text align="center" font-size="14" padding-top="15px" padding-bottom="10px">
            <p style="max-width: 400px">Try our selection of Oven-baked Pizza, Fresh Salads, and Homemade Cake.<p>
          </mj-text>

          <mj-button padding-top="0" padding-bottom="15" href="#">Order Now</mj-button>

        </mj-column>
      </mj-section>


      <mj-section background-color="#fff">
        <mj-column>

          <mj-text align="center" font-size="11">The Pizza Times</mj-text>

          <mj-social display="facebook instagram twitter" font-size="0" icon-size="16px" padding="0" facebook-href="#" instagram-href="#" twitter-href="#" />

        </mj-column>
      </mj-section>

    </mj-container>
  </mj-body>
</mjml>
`;

const ConverterLive = () => {
  const scope = {
    React,
    EAccordion,
    EAccordionElement,
    EAccordionText,
    EAccordionTitle,
    EAll,
    EAttributes,
    EBody,
    EBreakpoint,
    EButton,
    ECarousel,
    ECarouselImage,
    EClass,
    EColumn,
    EDivider,
    EFont,
    EGroup,
    EHead,
    EHero,
    EHtmlAttributes,
    EHtmlAttribute,
    EImage,
    EInclude,
    EMail,
    ENavbar,
    ENavbarLink,
    EPreview,
    ERaw,
    ESection,
    ESelector,
    ESocial,
    ESocialElement,
    ESpacer,
    EStyle,
    ETable,
    EText,
    ETitle,
    EWrapper,
    EAppStore,
    EComment,
    EImageText,
    EQrCode,
    EMap,
    ERating,
    EAvatar,
    ESocialPost,
    EUnderlinedTitle,
    EYoutube,
    EYoutubeThumbnail,
    EBarcode,
    ESocialMedia,
    ETracking,
    EYahooStyles
  };

  // RowContainer,

  const [code, setCode] = useState(initialDemo.trim());

  return <Converter code={code} scope={scope} onChange={setCode} />;
};

export default ConverterLive;
