import React, { FC } from 'react';

import {
  EMail,
  EHead,
  EClass,
  EStyle,
  EAttributes,
  EText,
  ESection,
  EBody,
  EColumn,
  ESocial,
  ESocialElement,
  EImage,
  EButton,
  EGroup,
  useEmail
} from '@react-mailkit/core';

const email = (
  <EMail>
    <EHead>
      <EAttributes>
        <EText
          color='#000000'
          fontFamily='Ubuntu, Helvetica, Arial, sans-serif'
        ></EText>
        <EClass name='description'></EClass>
        <EClass
          color='#000000'
          fontSize='11px'
          name='preheader'
          paddingLeft='25px'
          paddingRight='25px'
        ></EClass>
        <EClass
          backgroundColor='#fcc245'
          borderRadius='3px'
          color='#000000'
          fontFamily='Ubuntu, Helvetica, Arial, sans-serif'
          fontSize='18px'
          name='button'
        ></EClass>
      </EAttributes>
      <EStyle
        inline='inline'
        style={`a {color: inherit!important; text-decoration: none!important; }`}
      />
    </EHead>
    <EBody backgroundColor='#ffffff'>
      <ESection paddingBottom='20px' paddingTop='20px'>
        <EGroup>
          <EColumn>
            <EText align='left' mjClass='preheader'>
              [[HEADLINE]]
            </EText>
          </EColumn>
          <EColumn>
            <EText align='right' mjClass='preheader'>
              [PERMALINK_LABEL]]
            </EText>
          </EColumn>
        </EGroup>
      </ESection>
      <ESection paddingBottom='0px' paddingTop='0'>
        <EColumn width='25%'>
          <EImage
            alt=''
            href='https://mjml.io'
            padding='0px'
            src='http://191n.mj.am/img/191n/3s/xm0.png'
            width='147px'
          ></EImage>
        </EColumn>
        <EColumn width='75%'>
          <EText fontSize='19px' fontWeight='bold' padding='0 25px'>
            Special pre sale information
          </EText>
          <EText fontSize='11px'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            rutrum enim eget magna efficitur, eu semper augue semper. Aliquam
            erat volutpat. Proin rutrum enim eget magna efficitur.
          </EText>
        </EColumn>
      </ESection>
      <ESection backgroundColor='#fcc245'>
        <EColumn>
          <EText align='center' fontSize='20px' padding='0 25px'>
            <span style={{ color: 'rgb(89, 89, 89)' }}>
              PRE SALE BEGINS TODAY
            </span>{' '}
            AT 9 AM
          </EText>
        </EColumn>
      </ESection>
      <ESection
        backgroundColor='#ffffff'
        backgroundSize='cover'
        backgroundUrl='http://191n.mj.am/img/191n/3s/xl9.jpg'
        paddingBottom='20px'
        paddingTop='20px'
      >
        <EColumn>
          <EButton
            href='https://mjml.io'
            mjClass='button'
            padding='305px 25px 0'
          >
            BUY TICKETS
          </EButton>
          <EText
            align='center'
            fontSize='13px'
            paddingBottom='10px'
            paddingLeft='25px'
            paddingRight='25px'
            paddingTop='10px'
          >
            <span style={{ color: 'rgb(255, 255, 255)' }}>
              PASSWORD : YULAN03
            </span>
          </EText>
        </EColumn>
      </ESection>
      <ESection paddingBottom='20px' paddingTop='20px'>
        <EColumn width='25%'>
          <EImage
            alt='CD'
            padding='0px'
            src='http://191n.mj.am/img/191n/3s/xmw.jpg'
            width='147px'
          ></EImage>
        </EColumn>
        <EColumn width='25%'>
          <EText align='center' fontSize='16px' padding='0 25px'>
            LAST ALBUM AVAILABLE{' '}
            <span style={{ fontWeight: 'bold' }}>12,99&#x20AC;</span>
          </EText>
          <EButton
            fontSize='17px'
            href='https://mjml.io'
            mjClass='button'
            padding='10px 0'
          >
            BUY IT !
          </EButton>
        </EColumn>
        <EColumn width='50%'>
          <EImage
            alt='Play now and win your vip pass'
            href='https://mjml.io'
            padding='0px'
            src='http://191n.mj.am/img/191n/3s/xmx.jpg'
            width='290px'
          ></EImage>
        </EColumn>
      </ESection>
      <ESection paddingBottom='20px' paddingTop='20px'>
        <EColumn>
          <EButton
            backgroundColor='#000000'
            borderRadius='0px'
            color='#fcc245'
            fontSize='16px'
            padding='10px 25px'
          >
            OUR PARTNERS
          </EButton>
        </EColumn>
      </ESection>
      <ESection paddingBottom='20px' paddingTop='0'>
        <EColumn width='25%'>
          <EImage
            alt='Partner logo'
            href='https://mjml.io'
            padding='0 0 10px 0'
            src='http://191n.mj.am/img/191n/3s/y2.jpg'
            width='95px'
          ></EImage>
        </EColumn>
        <EColumn width='25%'>
          <EImage
            alt='Partner logo'
            href='https://mjml.io'
            padding='0 0 10px 0'
            src='http://191n.mj.am/img/191n/3s/y2.jpg'
            width='95px'
          ></EImage>
        </EColumn>
        <EColumn width='25%'>
          <EImage
            alt='Partner logo'
            href='https://mjml.io'
            padding='0 0 10px 0'
            src='http://191n.mj.am/img/191n/3s/y2.jpg'
            width='95px'
          ></EImage>
        </EColumn>
        <EColumn width='25%'>
          <EImage
            alt='Partner logo'
            href='https://mjml.io'
            padding='0 0 10px 0'
            src='http://191n.mj.am/img/191n/3s/y2.jpg'
            width='95px'
          ></EImage>
        </EColumn>
      </ESection>
      <ESection paddingBottom='20px' paddingTop='20px'>
        <EColumn>
          <EText
            align='center'
            fontSize='13px'
            fontWeight='bold'
            padding='0 25px'
          >
            Terms and conditions:
          </EText>
          <EText align='center' fontSize='13px' padding='0 25px 10px 25px'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              rutrum enim eget magna efficitur, eu semper augue semper. Aliquam
              erat volutpat. Cras id dui lectus. Vestibulum sed finibus lectus,
              sit amet suscipit nibh. Proin nec commodo purus. Sed eget nulla
              elit. Nulla aliquet mollis faucibus.
            </p>
          </EText>
        </EColumn>
      </ESection>
      <ESection backgroundColor='#fcc245' paddingBottom={0} paddingTop={0}>
        <EColumn vertical-align='middle'>
          <EText
            align='center'
            font-size='20px'
            font-weight='bold'
            padding='0 25px'
          >
            <p>0800 123 456</p>
          </EText>
          <EText
            align='center'
            color='#FFFFFF'
            font-size='13px'
            padding='0 25px'
          >
            <p>Privacy policy</p>
          </EText>
        </EColumn>
        <EColumn vertical-align='middle'>
          <EImage
            href='https://mjml.io'
            src='http://191n.mj.am/img/191n/3s/yp.jpg'
            alt='Logo yellow'
            width='133px'
            padding='0px'
          ></EImage>
        </EColumn>
        <EColumn vertical-align='middle'>
          <ESocial mode='horizontal' padding='30px'>
            <ESocialElement
              name='facebook'
              href='[[SHORT_PERMALINK]]'
            ></ESocialElement>
            <ESocialElement
              name='twitter'
              href='[[SHORT_PERMALINK]]'
            ></ESocialElement>
            <ESocialElement
              name='google'
              href='[[SHORT_PERMALINK]]'
            ></ESocialElement>
          </ESocial>
        </EColumn>
      </ESection>
      <ESection paddingBottom='20px' paddingTop='20px'>
        <EColumn>
          <EText align='center' fontSize='11px' padding='0 25px'>
            <p>[[DELIVERY_INFO]]</p>
            <p>[[POSTAL_ADDRESS]]</p>
          </EText>
        </EColumn>
      </ESection>
    </EBody>
  </EMail>
);

export const TicketShop: FC<any> = () => {
  const { html } = useEmail(email, {
    validationLevel: 'soft'
  });

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
};

export default TicketShop;
