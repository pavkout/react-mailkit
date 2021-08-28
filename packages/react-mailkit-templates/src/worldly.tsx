import React, { FC } from 'react';

import {
  EMail,
  EHead,
  EStyle,
  EAttributes,
  EAll,
  EClass,
  EText,
  ESection,
  EBody,
  EColumn,
  EImage,
  EButton,
  EGroup,
  ENavbar,
  ENavbarLink,
  useEmail
} from '@react-mailkit/core';

const worldly = (
  <EMail>
    <EHead>
      <EAttributes>
        <EAll padding='0px' />
        <EClass
          color='#000000'
          fontFamily='Ubuntu, Helvetica, Arial, sans-serif'
          fontSize='11px'
          name='preheader'
          padding='0 20px'
        />
        <EClass
          borderRadius='3px'
          color='#FFFFFF'
          fontFamily='Ubuntu, Helvetica, Arial, sans-serif, Helvetica, Arial, sans-serif'
          fontSize='13px'
          href='https://mjml.io'
          name='cta'
          padding='20px 25px'
        />
        <EClass
          align='center'
          color='#ffffff'
          fontFamily='Ubuntu, Helvetica, Arial, sans-serif, Helvetica, Arial, sans-serif'
          fontSize='15px'
          name='footer-text'
          padding='0 25px'
        />
        <ENavbarLink fontSize='12px' fontWeight='bold' padding='0 35px' />
      </EAttributes>
      <EStyle
        inline='inline'
        style={`a { text-decoration: none; color: inherit; }`}
      />
    </EHead>
    <EBody backgroundColor='#d2eeff'>
      <ESection paddingBottom='20px' paddingTop='20px'>
        <EGroup>
          <EColumn>
            <EText mjClass='preheader'>
              <a href='https://mjml.io'>[[HEADLINE]]</a>
            </EText>
          </EColumn>
          <EColumn>
            <EText align='right' mjClass='preheader'>
              <a href='https://mjml.io'>[[PERMALINK_LABEL]]</a>
            </EText>
          </EColumn>
        </EGroup>
      </ESection>
      <ESection backgroundColor='#ffffff'>
        <EColumn>
          <EImage
            align='center'
            alt='Worldly logo'
            padding='10px 0'
            src='http://191n.mj.am/img/191n/3s/x0j.png'
            width='105px'
          ></EImage>
        </EColumn>
      </ESection>
      <ESection backgroundColor='#ffe118' padding='20px'>
        <EColumn>
          <ENavbar
            baseUrl='https://mjml.io'
            hamburger='hamburger'
            icoColor='#444'
          >
            <ENavbarLink href='https://mjml.io'>home</ENavbarLink>
            <ENavbarLink href='https://mjml.io'>Summer deals</ENavbarLink>
            <ENavbarLink href='https://mjml.io'>Our blog</ENavbarLink>
            <ENavbarLink href='https://mjml.io'>Follow us</ENavbarLink>
          </ENavbar>
        </EColumn>
      </ESection>
      <ESection
        backgroundRepeat='no-repeat'
        backgroundSize='cover'
        backgroundUrl='http://191n.mj.am/img/191n/3s/xm9.jpg'
        padding='20px 0'
      >
        <EColumn>
          <EText
            align='center'
            color='#ffffff'
            fontFamily='Ubuntu, Helvetica, Arial, sans-serif, Helvetica, Arial, sans-serif'
            fontSize='28px'
            lineHeight='32px'
            padding='10px'
          >
            ARE YOU <br /> SEASCAPE?
          </EText>
        </EColumn>
        <EColumn verticalAlign='bottom' width='50%'>
          <EText
            align='center'
            color='#ffffff'
            fontFamily='Ubuntu, Helvetica, Arial, sans-serif, Helvetica, Arial, sans-serif'
            fontSize='28px'
            lineHeight='32px'
            paddingTop='180px'
          >
            OR <br /> CITYSCAPE?
          </EText>
        </EColumn>
      </ESection>
      <ESection backgroundColor='#ffffff' padding='20px 0'>
        <EColumn>
          <EText
            align='center'
            color='#BD8714'
            fontFamily='Ubuntu, Helvetica, Arial, sans-serif, Helvetica, Arial, sans-serif'
            fontSize='15px'
            padding='10px 25px'
          >
            <p>SUNNIEST DESTINATIONS</p>
          </EText>
          <EImage
            alt='Maldives, Corse : -15%'
            src='http://191n.mj.am/img/191n/3s/x2w.jpg'
            width='240px'
          ></EImage>
          <EButton backgroundColor='#bd8714' mjClass='cta'>
            BOOK NOW
          </EButton>
          <EImage
            alt='Tahiti, Bora Bora : -10 %'
            padding='10px 25px'
            src='http://191n.mj.am/img/191n/3s/x2x.jpg'
            width='240px'
          ></EImage>
          <EButton backgroundColor='#bd8714' mjClass='cta'>
            BOOK NOW
          </EButton>
        </EColumn>
        <EColumn>
          <EText
            align='center'
            color='#BD8714'
            fontFamily='Ubuntu, Helvetica, Arial, sans-serif, Helvetica, Arial, sans-serif'
            fontSize='15px'
            padding='10px 25px'
          >
            <p>CHEAP CITY TOUR</p>
          </EText>
          <EImage
            alt='Stockholm, Rome : from 162 € / day'
            src='http://191n.mj.am/img/191n/3s/x20.jpg'
            width='240px'
          ></EImage>
          <EButton backgroundColor='#48b6bf' mjClass='cta'>
            BOOK NOW
          </EButton>
          <EImage
            alt='New York, London : -30 %'
            padding='10px 25px'
            src='http://191n.mj.am/img/191n/3s/x2s.jpg'
            width='240px'
          ></EImage>
          <EButton backgroundColor='#48b6bf' mjClass='cta'>
            BOOK NOW
          </EButton>
        </EColumn>
      </ESection>
      <ESection backgroundColor='#ffffff' padding='20px 0'>
        <EColumn>
          <EImage
            alt='NEW : Donwload your city guide'
            href='https://mjml.io'
            padding='0 25px'
            src='http://191n.mj.am/img/191n/3s/x21.jpg'
            width='250px'
          ></EImage>
        </EColumn>
        <EColumn>
          <EText
            align='center'
            color='#000000'
            fontFamily='Ubuntu, Helvetica, Arial, sans-serif, Helvetica, Arial, sans-serif'
            fontSize='13px'
            fontWeight='bold'
            padding='0 25px'
          >
            <p>RATE YOUR STAY !</p>
          </EText>
          <EImage
            alt='Book rate'
            href='https://mjml.io'
            src='http://191n.mj.am/img/191n/3s/x2l.png'
            width='131px'
          ></EImage>
        </EColumn>
      </ESection>
      <ESection backgroundColor='#4b525c'>
        <EColumn verticalAlign='top' width='33%'>
          <EImage
            alt='Best companies for your flights'
            padding='10px 25px'
            src='http://191n.mj.am/img/191n/3s/x09.png'
            width='30px'
          ></EImage>
          <EText mjClass='footer-text'>
            <p>BEST COMPANIES FOR YOUR FLIGHTS</p>
          </EText>
        </EColumn>
        <EColumn width='33%'>
          <EImage
            alt='Insurances included'
            padding='10px 25px'
            src='http://191n.mj.am/img/191n/3s/xsw.png'
            width='29px'
          ></EImage>
          <EText mjClass='footer-text'>
            <p>INSURANCES INCLUDED</p>
          </EText>
        </EColumn>
        <EColumn verticalAlign='top' width='33%'>
          <EImage
            alt='Hotels best selection'
            padding='10px 25px'
            src='http://191n.mj.am/img/191n/3s/xsx.png'
            width='31px'
          ></EImage>
          <EText mjClass='footer-text'>
            <p>HOTELS BEST SELECTION</p>
          </EText>
        </EColumn>
      </ESection>
      <ESection backgroundColor='#4395b1'>
        <EColumn width='33.33333333333333%'>
          <EImage
            alt='Call us : 0 800 123 456'
            padding='10px 25px'
            src='http://191n.mj.am/img/191n/3s/x1l.png'
            width='97px'
          ></EImage>
        </EColumn>
        <EColumn width='33.33333333333333%'>
          <EImage
            alt='Meet us : find an agency'
            href='https://mjml.io'
            padding='10px 25px'
            src='http://191n.mj.am/img/191n/3s/x1m.png'
            width='117px'
          ></EImage>
        </EColumn>
        <EColumn width='33.33333333333333%'>
          <EImage
            alt='ASK US : find an expert'
            href='https://mjml.io'
            padding='10px 25px'
            src='http://191n.mj.am/img/191n/3s/xs0.png'
            width='110px'
          ></EImage>
        </EColumn>
      </ESection>
      <ESection padding='20px 0'>
        <EColumn>
          <EText align='center' color='#000000' fontSize='11px'>
            [[DELIVERY_INFO]]
            <p>[[POSTAL_ADDRESS]]</p>
          </EText>
        </EColumn>
      </ESection>
    </EBody>
  </EMail>
);

export const worldlyMarkup = `
  <EMail>
    <EHead>
      <EAttributes>
        <EAll padding='0px' />
        <EClass
          color='#000000'
          fontFamily='Ubuntu, Helvetica, Arial, sans-serif'
          fontSize='11px'
          name='preheader'
          padding='0 20px'
        />
        <EClass
          borderRadius='3px'
          color='#FFFFFF'
          fontFamily='Ubuntu, Helvetica, Arial, sans-serif, Helvetica, Arial, sans-serif'
          fontSize='13px'
          href='https://mjml.io'
          name='cta'
          padding='20px 25px'
        />
        <EClass
          align='center'
          color='#ffffff'
          fontFamily='Ubuntu, Helvetica, Arial, sans-serif, Helvetica, Arial, sans-serif'
          fontSize='15px'
          name='footer-text'
          padding='0 25px'
        />
        <ENavbarLink fontSize='12px' fontWeight='bold' padding='0 35px' />
      </EAttributes>
      <EStyle
        inline='inline'
        style={'a { text-decoration: none; color: inherit; }'}
      />
    </EHead>
    <EBody backgroundColor='#d2eeff'>
      <ESection paddingBottom='20px' paddingTop='20px'>
        <EGroup>
          <EColumn>
            <EText mjClass='preheader'>
              <a href='https://mjml.io'>[[HEADLINE]]</a>
            </EText>
          </EColumn>
          <EColumn>
            <EText align='right' mjClass='preheader'>
              <a href='https://mjml.io'>[[PERMALINK_LABEL]]</a>
            </EText>
          </EColumn>
        </EGroup>
      </ESection>
      <ESection backgroundColor='#ffffff'>
        <EColumn>
          <EImage
            align='center'
            alt='Worldly logo'
            padding='10px 0'
            src='http://191n.mj.am/img/191n/3s/x0j.png'
            width='105px'
          ></EImage>
        </EColumn>
      </ESection>
      <ESection backgroundColor='#ffe118' padding='20px'>
        <EColumn>
          <ENavbar
            baseUrl='https://mjml.io'
            hamburger='hamburger'
            icoColor='#444'
          >
            <ENavbarLink href='https://mjml.io'>home</ENavbarLink>
            <ENavbarLink href='https://mjml.io'>Summer deals</ENavbarLink>
            <ENavbarLink href='https://mjml.io'>Our blog</ENavbarLink>
            <ENavbarLink href='https://mjml.io'>Follow us</ENavbarLink>
          </ENavbar>
        </EColumn>
      </ESection>
      <ESection
        backgroundRepeat='no-repeat'
        backgroundSize='cover'
        backgroundUrl='http://191n.mj.am/img/191n/3s/xm9.jpg'
        padding='20px 0'
      >
        <EColumn>
          <EText
            align='center'
            color='#ffffff'
            fontFamily='Ubuntu, Helvetica, Arial, sans-serif, Helvetica, Arial, sans-serif'
            fontSize='28px'
            lineHeight='32px'
            padding='10px'
          >
            ARE YOU <br /> SEASCAPE?
          </EText>
        </EColumn>
        <EColumn verticalAlign='bottom' width='50%'>
          <EText
            align='center'
            color='#ffffff'
            fontFamily='Ubuntu, Helvetica, Arial, sans-serif, Helvetica, Arial, sans-serif'
            fontSize='28px'
            lineHeight='32px'
            paddingTop='180px'
          >
            OR <br /> CITYSCAPE?
          </EText>
        </EColumn>
      </ESection>
      <ESection backgroundColor='#ffffff' padding='20px 0'>
        <EColumn>
          <EText
            align='center'
            color='#BD8714'
            fontFamily='Ubuntu, Helvetica, Arial, sans-serif, Helvetica, Arial, sans-serif'
            fontSize='15px'
            padding='10px 25px'
          >
            <p>SUNNIEST DESTINATIONS</p>
          </EText>
          <EImage
            alt='Maldives, Corse : -15%'
            src='http://191n.mj.am/img/191n/3s/x2w.jpg'
            width='240px'
          ></EImage>
          <EButton backgroundColor='#bd8714' mjClass='cta'>
            BOOK NOW
          </EButton>
          <EImage
            alt='Tahiti, Bora Bora : -10 %'
            padding='10px 25px'
            src='http://191n.mj.am/img/191n/3s/x2x.jpg'
            width='240px'
          ></EImage>
          <EButton backgroundColor='#bd8714' mjClass='cta'>
            BOOK NOW
          </EButton>
        </EColumn>
        <EColumn>
          <EText
            align='center'
            color='#BD8714'
            fontFamily='Ubuntu, Helvetica, Arial, sans-serif, Helvetica, Arial, sans-serif'
            fontSize='15px'
            padding='10px 25px'
          >
            <p>CHEAP CITY TOUR</p>
          </EText>
          <EImage
            alt='Stockholm, Rome : from 162 € / day'
            src='http://191n.mj.am/img/191n/3s/x20.jpg'
            width='240px'
          ></EImage>
          <EButton backgroundColor='#48b6bf' mjClass='cta'>
            BOOK NOW
          </EButton>
          <EImage
            alt='New York, London : -30 %'
            padding='10px 25px'
            src='http://191n.mj.am/img/191n/3s/x2s.jpg'
            width='240px'
          ></EImage>
          <EButton backgroundColor='#48b6bf' mjClass='cta'>
            BOOK NOW
          </EButton>
        </EColumn>
      </ESection>
      <ESection backgroundColor='#ffffff' padding='20px 0'>
        <EColumn>
          <EImage
            alt='NEW : Donwload your city guide'
            href='https://mjml.io'
            padding='0 25px'
            src='http://191n.mj.am/img/191n/3s/x21.jpg'
            width='250px'
          ></EImage>
        </EColumn>
        <EColumn>
          <EText
            align='center'
            color='#000000'
            fontFamily='Ubuntu, Helvetica, Arial, sans-serif, Helvetica, Arial, sans-serif'
            fontSize='13px'
            fontWeight='bold'
            padding='0 25px'
          >
            <p>RATE YOUR STAY !</p>
          </EText>
          <EImage
            alt='Book rate'
            href='https://mjml.io'
            src='http://191n.mj.am/img/191n/3s/x2l.png'
            width='131px'
          ></EImage>
        </EColumn>
      </ESection>
      <ESection backgroundColor='#4b525c'>
        <EColumn verticalAlign='top' width='33%'>
          <EImage
            alt='Best companies for your flights'
            padding='10px 25px'
            src='http://191n.mj.am/img/191n/3s/x09.png'
            width='30px'
          ></EImage>
          <EText mjClass='footer-text'>
            <p>BEST COMPANIES FOR YOUR FLIGHTS</p>
          </EText>
        </EColumn>
        <EColumn width='33%'>
          <EImage
            alt='Insurances included'
            padding='10px 25px'
            src='http://191n.mj.am/img/191n/3s/xsw.png'
            width='29px'
          ></EImage>
          <EText mjClass='footer-text'>
            <p>INSURANCES INCLUDED</p>
          </EText>
        </EColumn>
        <EColumn verticalAlign='top' width='33%'>
          <EImage
            alt='Hotels best selection'
            padding='10px 25px'
            src='http://191n.mj.am/img/191n/3s/xsx.png'
            width='31px'
          ></EImage>
          <EText mjClass='footer-text'>
            <p>HOTELS BEST SELECTION</p>
          </EText>
        </EColumn>
      </ESection>
      <ESection backgroundColor='#4395b1'>
        <EColumn width='33.33333333333333%'>
          <EImage
            alt='Call us : 0 800 123 456'
            padding='10px 25px'
            src='http://191n.mj.am/img/191n/3s/x1l.png'
            width='97px'
          ></EImage>
        </EColumn>
        <EColumn width='33.33333333333333%'>
          <EImage
            alt='Meet us : find an agency'
            href='https://mjml.io'
            padding='10px 25px'
            src='http://191n.mj.am/img/191n/3s/x1m.png'
            width='117px'
          ></EImage>
        </EColumn>
        <EColumn width='33.33333333333333%'>
          <EImage
            alt='ASK US : find an expert'
            href='https://mjml.io'
            padding='10px 25px'
            src='http://191n.mj.am/img/191n/3s/xs0.png'
            width='110px'
          ></EImage>
        </EColumn>
      </ESection>
      <ESection padding='20px 0'>
        <EColumn>
          <EText align='center' color='#000000' fontSize='11px'>
            [[DELIVERY_INFO]]
            <p>[[POSTAL_ADDRESS]]</p>
          </EText>
        </EColumn>
      </ESection>
    </EBody>
  </EMail>
`;

const Worldly: FC<any> = () => {
  const { html } = useEmail(worldly, {
    validationLevel: 'soft'
  });

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
};

export default Worldly;
