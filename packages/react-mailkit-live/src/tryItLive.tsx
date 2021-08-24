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

import LiveEdit from './liveEdit';

const TryItLive = () => {
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
    ETracking,
    EYahooStyles,
    ESocialMedia,
    useEmail
  };

  // RowContainer,

  const [code, setCode] = useState(
    `<EMail>
  <EBody backgroundColor="#fff">
    <ESection>
      <EColumn>
        <EText fontStyle="italic" fontSize="20px" color="#626262">
          Awesome Mail Kit
      </EText>
      </EColumn>
    </ESection>
  </EBody>
</EMail>`.trim()
  );

  return <LiveEdit code={code} scope={scope} onChange={setCode} />;
};

export default TryItLive;
