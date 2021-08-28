import React, { FC } from 'react';

import {
  EMail,
  EHead,
  ETitle,
  EFont,
  EAttributes,
  EClass,
  EText,
  ESection,
  EBody,
  EColumn,
  EImage,
  EButton,
  EWrapper,
  EGroup,
  ERaw,
  ECarousel,
  ECarouselImage,
  useEmail
} from '@react-mailkit/core';

export const uggRoyaleMarkup = (
  <EMail>
    <EHead>
      <ETitle> UGG Royale </ETitle>
      <EAttributes>
        <EImage src='example' padding='0px' />
        <ESection padding='0px' />
        <EClass
          backgroundColor='#111111'
          color='#ffffff'
          fontFamily='Open Sans, Arial, sans-serif'
          fontSize='16px'
          height={30}
          name='open-sans-button'
          textDecoration='none'
          textTransform='uppercase'
        />
        <EClass
          color='#111111'
          fontFamily='Open Sans, Arial, sans-serif'
          fontSize='10px'
          lineHeight='14px'
          name='footer-text'
        />
        <EClass
          align='center'
          color='#111111'
          fontFamily='Open Sans, Arial, sans-serif'
          fontSize='16px'
          lineHeight='26px'
          name='body-text'
        />
        <EClass
          align='center'
          color='#111111'
          fontFamily='Big Caslon, Garamond, Times, serif'
          fontSize='40px'
          lineHeight='36px'
          name='headline-text'
          textTransform='uppercase'
        />
      </EAttributes>
      <EFont
        href='http://fonts.googleapis.com/css?family=Open+Sans'
        name='Open Sans'
      ></EFont>
    </EHead>
    <EBody backgroundColor='#ffffff'>
      <ESection padding='0px'>
        <EColumn>
          <EText
            align='left'
            color='#ffffff'
            fontFamily="'Open Sans', 'Raleway', Arial, Verdana, sans-serif"
            fontSize='1px'
            lineHeight='1px'
            padding='0px'
          >
            <span className='preheader'>
              {' '}
              No longer on backorder, the Royale is now here and waiting for
              you.
            </span>
          </EText>
        </EColumn>
      </ESection>
      <ESection backgroundColor='#f9f9f9'>
        <EColumn>
          <EText
            fontSize='14px'
            letterSpacing='2px'
            lineHeight='26px'
            mjClass='body-text'
            textTransform='uppercase'
          >
            Last Chance: Free two-day shipping on any order $100+ ends today
          </EText>
        </EColumn>
      </ESection>
      <EWrapper backgroundColor='#f9f9f9' padding='0px'>
        <ESection>
          <EColumn>
            <EImage
              alt='Model in UGG in a baby blue royale'
              href='http://www.ugg.com/'
              src='https://static.cdn.responsys.net/i2/responsysimages/uggs/contentlibrary/promotional/2017/06-june/20170615_u_royale-b/images/main.jpg'
              width='600px'
            ></EImage>
          </EColumn>
        </ESection>
        <ESection padding='30px 0 20px'>
          <EColumn>
            <EText mjClass='headline-text'>
              the
              <br /> wait <br /> is over
            </EText>
          </EColumn>
        </ESection>
        <ESection>
          <EColumn width='480px'>
            <EText mjClass='body-text'>
              Due to popular demand, our best-selling sandal is back. Get yours
              before they sell out again.
            </EText>
          </EColumn>
        </ESection>
        <ERaw>&lt;!--[if !mso]&gt;&lt;!--&gt;</ERaw>
        <ESection>
          <EColumn width='550px'>
            <ECarousel
              iconWidth='16px'
              leftIcon='https://static.cdn.responsys.net/i2/responsysimages/uggs/contentlibrary/promotional/2017/06-june/20170615_u_royale-b/images/arrow-left.png'
              rightIcon='https://static.cdn.responsys.net/i2/responsysimages/uggs/contentlibrary/promotional/2017/06-june/20170615_u_royale-b/images/arrow-right.png'
              tbBorder='0px'
              tbBorderRadius='0px'
              tbHoverBorderColor='red'
              tbWidth='50px'
            >
              <ECarouselImage
                alt='Side view of the Royal in Baby Pink'
                href='http://www.ugg.com/'
                src='https://static.cdn.responsys.net/i2/responsysimages/uggs/contentlibrary/promotional/2017/06-june/20170615_u_royale-b/images/product1.jpg'
                thumbnailsSrc='https://static.cdn.responsys.net/i2/responsysimages/uggs/contentlibrary/promotional/2017/06-june/20170615_u_royale-b/images/BPNK.gif'
              ></ECarouselImage>
              <ECarouselImage
                href='http://www.ugg.com/'
                src='https://static.cdn.responsys.net/i2/responsysimages/uggs/contentlibrary/promotional/2017/06-june/20170615_u_royale-b/images/product2.jpg'
                thumbnailsSrc='https://static.cdn.responsys.net/i2/responsysimages/uggs/contentlibrary/promotional/2017/06-june/20170615_u_royale-b/images/NOPK.gif'
              ></ECarouselImage>
              <ECarouselImage
                href='http://www.ugg.com/'
                src='https://static.cdn.responsys.net/i2/responsysimages/uggs/contentlibrary/promotional/2017/06-june/20170615_u_royale-b/images/product3.jpg'
                thumbnailsSrc='https://static.cdn.responsys.net/i2/responsysimages/uggs/contentlibrary/promotional/2017/06-june/20170615_u_royale-b/images/BBLU.gif'
              ></ECarouselImage>
              <ECarouselImage
                alt='Side view of the Royal in Black'
                href='http://www.ugg.com/'
                src='https://static.cdn.responsys.net/i2/responsysimages/uggs/contentlibrary/promotional/2017/06-june/20170615_u_royale-b/images/product4.jpg'
                thumbnailsSrc='https://static.cdn.responsys.net/i2/responsysimages/uggs/contentlibrary/promotional/2017/06-june/20170615_u_royale-b/images/BLK.gif'
              ></ECarouselImage>
              <ECarouselImage
                alt='Side view of the Royal in Seal'
                href='http://www.ugg.com/'
                src='https://static.cdn.responsys.net/i2/responsysimages/uggs/contentlibrary/promotional/2017/06-june/20170615_u_royale-b/images/product5.jpg'
                thumbnailsSrc='https://static.cdn.responsys.net/i2/responsysimages/uggs/contentlibrary/promotional/2017/06-june/20170615_u_royale-b/images/SEL.gif'
              ></ECarouselImage>
              <ECarouselImage
                alt='Side view of the Royal in White'
                href='http://www.ugg.com/'
                src='https://static.cdn.responsys.net/i2/responsysimages/uggs/contentlibrary/promotional/2017/06-june/20170615_u_royale-b/images/product6.jpg'
                thumbnailsSrc='https://static.cdn.responsys.net/i2/responsysimages/uggs/contentlibrary/promotional/2017/06-june/20170615_u_royale-b/images/WHT.gif'
              ></ECarouselImage>
            </ECarousel>
          </EColumn>
        </ESection>
        <ESection>
          <EColumn width='480px'>
            <EText
              align='center'
              color='#bcbec0'
              fontFamily='Open Sans, Arial, sans-serif'
              fontSize='14px'
              lineHeight='26px'
              textTransform='uppercase'
            >
              select color
            </EText>
          </EColumn>
        </ESection>
        <ERaw>&lt;!--&lt;![endif]--&gt;</ERaw>
        <ESection padding='10px 0 5px'>
          <EColumn>
            <EButton
              backgroundColor='#f9f9f9'
              color='#111111'
              fontFamily='Open Sans, Arial, sans-serif'
              fontSize='16px'
              href='http://www.ugg.com/'
              padding='0px'
              width='270px'
            >
              <span
                style={{
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  textDecoration: 'underline'
                }}
              >
                shop now
              </span>
            </EButton>
          </EColumn>
        </ESection>
        <ESection padding='10px 0 30px'>
          <EColumn>
            <EButton
              backgroundColor='#f9f9f9'
              color='#111111'
              fontFamily='Open Sans, Arial, sans-serif'
              fontSize='16px'
              href='http://www.ugg.com/'
              padding='0px'
              width='270px'
            >
              <span
                style={{
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  textDecoration: 'underline'
                }}
              >
                shop in store
              </span>
            </EButton>
          </EColumn>
        </ESection>
      </EWrapper>
      <EWrapper padding='0px'>
        <ESection backgroundColor='#f9f9f9'>
          <EColumn width='270px'>
            <EImage
              alt='Guy on a beach with an UGGxGrain surfboard'
              href='http://www.ugg.com/'
              src='https://static.cdn.responsys.net/i2/responsysimages/uggs/contentlibrary/promotional/2017/06-june/20170615_u_royale-b/images/secondary.jpg'
              width='270px'
            ></EImage>
          </EColumn>
          <EColumn width='270px'>
            <EText
              align='center'
              color='#111'
              fontFamily='Big Caslon, Garamond, Times, serif'
              fontSize='30px'
              lineHeight='30px'
              padding='30px 10px 15px'
              textTransform='uppercase'
            >
              uggxgrain
              <br />
              surfboards
              <br />
              giveaway.
            </EText>
            <EText mjClass='body-text' padding='5px 15px'>
              Enter for a chance to win a custom UGGxGrain surfboard and a $200
              UGG giftcard.
            </EText>
            <EButton
              align='center'
              backgroundColor='#111'
              borderRadius='0px'
              color='#f3b656'
              fontFamily='Open Sans, Arial, sans-serif'
              fontSize='16px'
              height='40px'
              href='http://www.ugg.com/'
              padding='15px 10px'
              width='190px'
            >
              <span
                style={{ textTransform: 'uppercase', letterSpacing: '2px' }}
              >
                enter to win
              </span>
            </EButton>
          </EColumn>
        </ESection>
      </EWrapper>
      <EWrapper backgroundColor='#f9f9f9' padding='40px 0 0'>
        <ESection backgroundColor='#f9f9f9'>
          <EColumn>
            <EImage
              alt='Shop rewards'
              src='https://static.cdn.responsys.net/i2/responsysimages/uggs/contentlibrary/promotional/2017/06-june/20170615_u_royale-b/images/rewards-logo-top.gif'
              width='600px'
            ></EImage>
          </EColumn>
        </ESection>
        <ESection backgroundColor='#000'>
          <EColumn>
            <EText
              color='#fff'
              fontSize='18px'
              mjClass='body-text'
              padding='15px 15px'
              textTransform='uppercase'
            >
              Earn points
            </EText>
          </EColumn>
        </ESection>
        <ESection backgroundColor='#000'>
          <EColumn>
            <EText color='#fff' mjClass='body-text' padding='5px 15px'>
              When you shop, share, or review products.
            </EText>
          </EColumn>
        </ESection>
        <ESection backgroundColor='#000' padding='10px 0 30px'>
          <EColumn>
            <EButton
              backgroundColor='#111'
              color='#fff'
              fontFamily='Open Sans, Arial, sans-serif'
              fontSize='16px'
              href='http://www.ugg.com/'
              padding='0px'
              width='270px'
            >
              <span
                style={{
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  textDecoration: 'underline'
                }}
              >
                join now
              </span>
            </EButton>
          </EColumn>
        </ESection>
      </EWrapper>
      <ESection padding='25px 0 15px'>
        <EColumn>
          <EImage
            alt='Find a store'
            href='http://www.ugg.com/'
            src='https://static.cdn.responsys.net/i2/responsysimages/uggs/contentlibrary/promotional/2017/06-june/20170615_u_royale-b/images/find-a-store.gif'
            width='168px'
          ></EImage>
        </EColumn>
      </ESection>
      <ESection padding='10px 0'>
        <EColumn>
          <EButton
            borderRadius='0px'
            href='http://www.ugg.com/women'
            mjClass='open-sans-button'
            padding='5px 2px'
            width='100%'
          >
            <span style={{ letterSpacing: '2px' }}>women</span>
          </EButton>
        </EColumn>
        <EColumn>
          <EButton
            borderRadius='0px'
            href='http://www.ugg.com/men'
            mjClass='open-sans-button'
            padding='5px 2px'
            width='100%'
          >
            <span style={{ letterSpacing: '2px' }}>men</span>
          </EButton>
        </EColumn>
        <EColumn>
          <EButton
            borderRadius='0px'
            href='http://www.ugg.com/kids'
            mjClass='open-sans-button'
            padding='5px 2px'
            width='100%'
          >
            <span style={{ letterSpacing: '2px' }}>kids</span>
          </EButton>
        </EColumn>
      </ESection>
      <ESection>
        <EColumn>
          <EText
            align='center'
            fontFamily='Open Sans, Arial'
            fontSize='16px'
            fontWeight='bold'
            letterSpacing='2px'
            textTransform='uppercase'
          >
            free shipping. free returns *
          </EText>
        </EColumn>
      </ESection>
      <ESection>
        <EGroup>
          <EColumn>
            <EImage
              alt='ugg facebook'
              href='http://www.ugg.com/'
              src='https://static.cdn.responsys.net/i2/responsysimages/uggs/contentlibrary/promotional/2017/06-june/20170615_u_royale-b/images/share-facebook.gif'
              width='40px'
            ></EImage>
          </EColumn>
          <EColumn>
            <EImage
              alt='ugg instagram'
              href='http://www.ugg.com/'
              src='https://static.cdn.responsys.net/i2/responsysimages/uggs/contentlibrary/promotional/2017/06-june/20170615_u_royale-b/images/share-instagram.gif'
              width='40px'
            ></EImage>
          </EColumn>
          <EColumn>
            <EImage
              alt='ugg snapchat'
              href='http://www.ugg.com/'
              src='https://static.cdn.responsys.net/i2/responsysimages/uggs/contentlibrary/promotional/2017/06-june/20170615_u_royale-b/images/share-snapchat.gif'
              width='40px'
            ></EImage>
          </EColumn>
          <EColumn>
            <EImage
              alt='ugg pinterest'
              href='http://www.ugg.com/'
              src='https://static.cdn.responsys.net/i2/responsysimages/uggs/contentlibrary/promotional/2017/06-june/20170615_u_royale-b/images/share-pinterest.gif'
              width='40px'
            ></EImage>
          </EColumn>
          <EColumn>
            <EImage
              alt='ugg twitter'
              href='http://www.ugg.com/'
              src='https://static.cdn.responsys.net/i2/responsysimages/uggs/contentlibrary/promotional/2017/06-june/20170615_u_royale-b/images/share-twitter.gif'
              width='40px'
            ></EImage>
          </EColumn>
          <EColumn>
            <EImage
              alt='ugg youtube'
              href='http://www.ugg.com/'
              src='https://static.cdn.responsys.net/i2/responsysimages/uggs/contentlibrary/promotional/2017/06-june/20170615_u_royale-b/images/share-youtube.gif'
              width='40px'
            ></EImage>
          </EColumn>
          <EColumn>
            <EImage
              alt='ugg blog'
              href='http://www.ugg.com/'
              src='https://static.cdn.responsys.net/i2/responsysimages/uggs/contentlibrary/promotional/2017/06-june/20170615_u_royale-b/images/share-blog.gif'
              width='40px'
            ></EImage>
          </EColumn>
        </EGroup>
      </ESection>
      <ESection padding='10px 45px'>
        <EGroup>
          <EColumn width='27%'>
            <EText
              align='center'
              fontFamily='Open Sans, Arial, sans-serif'
              fontSize='12px'
              padding='7px 0'
              textDecoration='none'
              textTransform='uppercase'
            >
              <a
                href='http://www.ugg.com/'
                style={{ textDecoration: 'none', color: '#111111' }}
                className='apple-link-black'
              >
                <strong>live chat</strong>
              </a>
            </EText>
          </EColumn>
          <EColumn width='46%'>
            <EText
              align='center'
              fontFamily='Open Sans, Arial, sans-serif'
              fontSize='11px'
              padding='7px 0'
              textDecoration='none'
              textTransform='uppercase'
            >
              <a
                href=''
                style={{ textDecoration: 'none', color: '#111111' }}
                className='apple-link-black'
              >
                <strong>call us</strong>
                <br /> 1 (888) 432-8530
              </a>
            </EText>
          </EColumn>
          <EColumn width='27%'>
            <EText
              align='center'
              fontFamily='Open Sans, Arial, sans-serif'
              fontSize='12px'
              padding='7px 0'
              textDecoration='none'
              textTransform='uppercase'
            >
              <a
                href='http://www.ugg.com/'
                style={{ textDecoration: 'none', color: '#111111' }}
                className='apple-link-black'
              >
                <strong>email us</strong>
              </a>
              <br />
              <br />
            </EText>
          </EColumn>
        </EGroup>
      </ESection>
      <ESection padding='0px'>
        <EColumn>
          <EText align='center' mjClass='footer-text' padding='0 10px'>
            <p
              style={{
                margin: '0',
                paddingBottom: '10px',
                fontSize: '10px',
                lineHeight: '15px',
                marginBottom: '10px',
                color: '#111111',
                fontFamily: 'Open Sans, Raleway, Arial, Helvetica, sans-serif'
              }}
            >
              We only send emails to individuals who have registered at our
              site:
              <a
                href='http://www.ugg.com/'
                style={{ color: '#111111', textDecoration: 'underline' }}
              >
                www.ugg.com
              </a>
            </p>
            <p
              style={{
                margin: '0',
                paddingBottom: '10px',
                fontSize: '10px',
                lineHeight: '15px',
                marginBottom: '10px',
                color: '#111111',
                fontFamily: 'Open Sans, Raleway, Arial, Helvetica, sans-serif'
              }}
            >
              *A free return label will be included with your order. This offer
              only applies to full price orders shipped within the continental
              United States and placed on
              <span className='apple-link-black'>ugg.com</span>. Please note
              this offer does not apply to clearance product.
            </p>
            <p
              style={{
                margin: '0',
                paddingBottom: '10px',
                fontSize: '10px',
                lineHeight: '15px',
                marginBottom: '10px',
                color: '#111111',
                fontFamily: 'Open Sans, Raleway, Arial, Helvetica, sans-serif'
              }}
            >
              <span
                style={{
                  color: '#111111 !important',
                  textDecoration: 'none'
                }}
              >
                <strong>1.888.432.8530</strong>
                <br /> 123 North Leroux Street, Flagstaff, AZ 86001
              </span>
              <br />
              <a
                href='http://www.ugg.com/'
                style={{ color: '#111111', textDecoration: 'underline' }}
              >
                <strong>Privacy Policy</strong>
              </a>
              &nbsp;&nbsp;|&nbsp;&nbsp;
              <a
                href='http://www.ugg.com/'
                style={{ color: '#111111', textDecoration: 'underline' }}
              >
                <strong>Unsubscribe</strong>
              </a>
              &nbsp;&nbsp;|&nbsp;&nbsp;
              <a
                href='https://email.ugg.com/pub/sf/ResponseForm?_ri_=X0Gzc2X%3DYQpglLjHJlTQGjmR9kDzfwzbMzackp9f3F8d45ze2zfbW8hYB6AzgB7gaIYB3tN5qwvasVXMtX%3DYQpglLjHJlTQGNXlMNF3fFUYHWCzdBj2rGzgJpzem2KonGoezgzbfUyABevzgl4CepTMC&_ei_=EolaGGF4SNMvxFF7KucKuWP7XpARYKtbBY43fLBYxvXNpGx2Z89j4M'
                style={{ color: '#111111', textDecoration: 'underline' }}
              >
                View in Browser
              </a>
            </p>
          </EText>
        </EColumn>
      </ESection>
    </EBody>
  </EMail>
);

const UggRoyale: FC<any> = () => {
  const { html } = useEmail(uggRoyaleMarkup, {
    validationLevel: 'soft'
  });

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
};

export default UggRoyale;
