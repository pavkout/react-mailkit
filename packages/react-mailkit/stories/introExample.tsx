import React from 'react';
import {
  useEmail,
  EMail,
  EHead,
  ETitle,
  EPreview,
  EBody,
  ESection,
  EColumn,
  ECarousel,
  ECarouselImage
} from 'react-mailkit';

const IntroExample = () => {
  const email = (
    <EMail>
      <EHead>
        <ETitle>Example</ETitle>
        <EPreview>Example</EPreview>
      </EHead>
      <EBody width={600}>
        <ESection>
          <EColumn width="550px">
            <ECarousel
              iconWidth="16px"
              leftIcon="https://static.cdn.responsys.net/i2/responsysimages/uggs/contentlibrary/promotional/2017/06-june/20170615_u_royale-b/images/arrow-left.png"
              rightIcon="https://static.cdn.responsys.net/i2/responsysimages/uggs/contentlibrary/promotional/2017/06-june/20170615_u_royale-b/images/arrow-right.png"
              tbBorder="0px"
              tbBorderRadius="0px"
              tbHoverBorderColor="red"
              tbWidth="50px">
              <ECarouselImage
                alt="Side view of the Royal in Baby Pink"
                href="http://www.ugg.com/"
                src="https://static.cdn.responsys.net/i2/responsysimages/uggs/contentlibrary/promotional/2017/06-june/20170615_u_royale-b/images/product1.jpg"
                thumbnailsSrc="https://static.cdn.responsys.net/i2/responsysimages/uggs/contentlibrary/promotional/2017/06-june/20170615_u_royale-b/images/BPNK.gif"></ECarouselImage>
              <ECarouselImage
                href="http://www.ugg.com/"
                src="https://static.cdn.responsys.net/i2/responsysimages/uggs/contentlibrary/promotional/2017/06-june/20170615_u_royale-b/images/product2.jpg"
                thumbnailsSrc="https://static.cdn.responsys.net/i2/responsysimages/uggs/contentlibrary/promotional/2017/06-june/20170615_u_royale-b/images/NOPK.gif"></ECarouselImage>
              <ECarouselImage
                href="http://www.ugg.com/"
                src="https://static.cdn.responsys.net/i2/responsysimages/uggs/contentlibrary/promotional/2017/06-june/20170615_u_royale-b/images/product3.jpg"
                thumbnailsSrc="https://static.cdn.responsys.net/i2/responsysimages/uggs/contentlibrary/promotional/2017/06-june/20170615_u_royale-b/images/BBLU.gif"></ECarouselImage>
              <ECarouselImage
                alt="Side view of the Royal in Black"
                href="http://www.ugg.com/"
                src="https://static.cdn.responsys.net/i2/responsysimages/uggs/contentlibrary/promotional/2017/06-june/20170615_u_royale-b/images/product4.jpg"
                thumbnailsSrc="https://static.cdn.responsys.net/i2/responsysimages/uggs/contentlibrary/promotional/2017/06-june/20170615_u_royale-b/images/BLK.gif"></ECarouselImage>
              <ECarouselImage
                alt="Side view of the Royal in Seal"
                href="http://www.ugg.com/"
                src="https://static.cdn.responsys.net/i2/responsysimages/uggs/contentlibrary/promotional/2017/06-june/20170615_u_royale-b/images/product5.jpg"
                thumbnailsSrc="https://static.cdn.responsys.net/i2/responsysimages/uggs/contentlibrary/promotional/2017/06-june/20170615_u_royale-b/images/SEL.gif"></ECarouselImage>
              <ECarouselImage
                alt="Side view of the Royal in White"
                href="http://www.ugg.com/"
                src="https://static.cdn.responsys.net/i2/responsysimages/uggs/contentlibrary/promotional/2017/06-june/20170615_u_royale-b/images/product6.jpg"
                thumbnailsSrc="https://static.cdn.responsys.net/i2/responsysimages/uggs/contentlibrary/promotional/2017/06-june/20170615_u_royale-b/images/WHT.gif"></ECarouselImage>
            </ECarousel>
          </EColumn>
        </ESection>
      </EBody>
    </EMail>
  );

  const { html } = useEmail(email, {
    validationLevel: 'soft'
  });

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 500,
        background: '#ffffff50'
      }}>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
};

export default IntroExample;
