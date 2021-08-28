import React, { FC } from 'react';

import {
  EMail,
  EHead,
  ETitle,
  EFont,
  EAttributes,
  EAll,
  EText,
  ESection,
  EBody,
  EColumn,
  EDivider,
  EImage,
  EButton,
  useEmail
} from '@react-mailkit/core';

export const realEstateMarkup = (
  <EMail>
    <EHead>
      <ETitle>Say hello to RealEstate</ETitle>
      <EFont
        href='https://fonts.googleapis.com/css?family=Alice'
        name='Alice'
      ></EFont>
      <EFont
        href='https://fonts.googleapis.com/css?family=Roboto:400,700'
        name='Roboto'
      ></EFont>
      <EAttributes>
        <EAll
          fontFamily='Roboto, Helvetica, Arial, sans-serif'
          padding='0px'
        ></EAll>
        <EText
          color='#000000'
          fontSize='14px'
          fontWeight='400'
          lineHeight='21px'
        ></EText>
      </EAttributes>
    </EHead>
    <EBody backgroundColor='#EAE8E5'>
      <ESection padding='20px 0 0 0'>
        <EColumn>
          <EImage
            align='center'
            alt=''
            border='none'
            padding='0px'
            src='http://nimus.de/share/tpl-realestate/box-head.png'
          ></EImage>
        </EColumn>
      </ESection>
      <ESection backgroundColor='#FFFFFF' paddingTop='40px'>
        <EColumn width='570px'>
          <EText
            align='left'
            color='#1D83A8'
            fontFamily='Alice, Helvetica, Arial, sans-serif'
            fontSize='36px'
            lineHeight='40px'
            padding='0 20px'
          >
            Real Estate
          </EText>
          <EText align='left' padding='0 20px'>
            <strong>
              <span style={{ fontSize: '40px' }}>⚊</span>
            </strong>
            <br />
            <br />
          </EText>
        </EColumn>
      </ESection>
      <ESection backgroundColor='#FFFFFF'>
        <EColumn width='300px'>
          <EText align='left' padding='0 20px 30px 20px'>
            <strong>
              Aliquam lorem ante, dapibus in hasellus viverra nulla
            </strong>{' '}
            ut metus varius laoreet. Quisque rutrum lorem dellorus. Aenean
            imperdiet.
          </EText>
        </EColumn>
        <EColumn width='260px'>
          <EImage
            align='center'
            alt=''
            border='none'
            paddingBottom='30px'
            src='http://nimus.de/share/tpl-realestate/icon-1.png'
            width='260px'
          ></EImage>
        </EColumn>
      </ESection>
      <ESection
        backgroundRepeat='no-repeat'
        backgroundSize='cover'
        backgroundUrl='http://nimus.de/share/tpl-realestate/img-1.png'
        padding='30px'
      >
        <EColumn verticalAlign='middle' width='60%'>
          <EText
            align='center'
            color='#FFFFFF'
            fontFamily='Alice, Helvetica, Arial, sans-serif'
            fontSize='42px'
            lineHeight='48px'
            padding='40px 30px'
          >
            Villa Semperin
          </EText>
        </EColumn>
        <EColumn backgroundColor='#FFFFFF' verticalAlign='middle' width='40%'>
          <EImage
            align='center'
            alt=''
            border='none'
            src='http://nimus.de/share/tpl-realestate/box-top.png'
            width='220px'
          ></EImage>
          <EText
            align='center'
            color='#1D83A8'
            fontFamily='Alice, Helvetica, Arial, sans-serif'
            fontSize='26px'
            lineHeight='30px'
            padding='20px 20px 0 20px'
          >
            – first offer –
          </EText>
          <EText
            align='center'
            fontSize='22px'
            lineHeight='30px'
            padding='10px 20px'
          >
            340,000 $
          </EText>
          <EText align='center' padding='0 20px'>
            Nascetur ridiculus mus. Donec quam felis, ultricies nec
          </EText>
          <EButton
            backgroundColor='#F44E3C'
            borderRadius='20px'
            color='white'
            padding='20px 20px 30px 20px'
          >
            view details
          </EButton>
        </EColumn>
      </ESection>
      <ESection backgroundColor='#FFFFFF' padding='30px'>
        <EColumn width='60%'>
          <EText
            align='center'
            fontFamily='Alice, Helvetica, Arial, sans-serif'
            fontSize='26px'
            lineHeight='30px'
            paddingBottom='20px'
          >
            Lorem Ipsum
          </EText>
          <EText align='center' padding='0 40px'>
            Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
            Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.
            Aenean imperdiet. Lorem Ipsum
          </EText>
          <EImage
            align='center'
            alt=''
            border='none'
            padding='30px 0 10px 0'
            src='http://nimus.de/share/tpl-realestate/icon-2.png'
            width='50px'
          ></EImage>
        </EColumn>
        <EColumn backgroundColor='#FFFFFF' width='40%'>
          <EImage
            align='center'
            alt=''
            border='none'
            src='http://nimus.de/share/tpl-realestate/img-2.png'
            width='216px'
          ></EImage>
        </EColumn>
      </ESection>
      <ESection backgroundColor='#FFFFFF' padding='20px'>
        <EColumn width='100%'>
          <EImage
            align='left'
            alt=''
            border='none'
            src='http://nimus.de/share/tpl-realestate/symbol-1.png'
            width='292px'
          ></EImage>
        </EColumn>
      </ESection>
      <ESection backgroundColor='#FFFFFF' padding='0 20px'>
        <EColumn>
          <EText
            align='center'
            fontFamily='Alice, Helvetica, Arial, sans-serif'
            fontSize='26px'
            lineHeight='30px'
          >
            Lorem Ipsum
          </EText>
          <EDivider
            borderColor='#000000'
            borderWidth='2px'
            padding='20px 0'
            width='20px'
          ></EDivider>
          <EText align='center' padding='0 40px'>
            Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
            Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.
            Aenean imperdiet. Lorem Ipsum
          </EText>
          <EButton
            backgroundColor='#F44E3C'
            borderRadius='20px'
            color='white'
            padding='20px 20px 10px 20px'
          >
            Call to action
          </EButton>
        </EColumn>
      </ESection>
      <ESection backgroundColor='#FFFFFF' padding='20px'>
        <EColumn width='100%'>
          <EImage
            align='right'
            alt=''
            border='none'
            src='http://nimus.de/share/tpl-realestate/symbol-2.png'
            width='213px'
          ></EImage>
        </EColumn>
      </ESection>
      <ESection backgroundColor='#FFFFFF' padding='0 30px 30px'>
        <EColumn width='55%'>
          <EImage
            align='center'
            alt=''
            border='none'
            paddingBottom='20px'
            src='http://nimus.de/share/tpl-realestate/img-3.png'
            width='280px'
          ></EImage>
        </EColumn>
        <EColumn backgroundColor='#FFFFFF' width='45%'>
          <EText
            align='center'
            fontFamily='Alice, Helvetica, Arial, sans-serif'
            fontSize='26px'
            lineHeight='30px'
            paddingBottom='20px'
          >
            Lorem Ipsum
          </EText>
          <EText align='center' padding='0 40px'>
            Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.
          </EText>
          <EImage
            align='center'
            alt=''
            border='none'
            padding='30px 0 10px 0'
            src='http://nimus.de/share/tpl-realestate/icon-3.png'
            width='50px'
          ></EImage>
        </EColumn>
      </ESection>
      <ESection backgroundColor='#FFFFFF' padding='0 20px'>
        <EColumn>
          <EText
            align='center'
            fontFamily='Alice, Helvetica, Arial, sans-serif'
            fontSize='26px'
            lineHeight='30px'
          >
            Nullam dictum felis eu pede
          </EText>
          <EDivider
            borderColor='#000000'
            borderWidth='2px'
            padding='20px 0'
            width='20px'
          ></EDivider>
        </EColumn>
      </ESection>
      <ESection backgroundColor='#FFFFFF' padding='0 20px 30px'>
        <EColumn width='33%'>
          <EText align='left' padding='0 15px 15px'>
            <strong>Aliquam lorem ante,</strong> dapibus in, viverra quis,
            feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.
            Quisque rutrum. Aenean imperdiet. Lorem Ipsum
          </EText>
        </EColumn>
        <EColumn width='34%'>
          <EText align='left' padding='0 15px 15px'>
            <strong>Phasellus viverra null aliquam lorem ante</strong>, dapibus
            in, viverra quis, feugiat a, tellus ut metus varius laoreet. Quisque
            rutrum. Aenean imperdiet. Lorem Ipsum
          </EText>
        </EColumn>
        <EColumn width='33%'>
          <EText align='left' padding='0 15px 15px'>
            <strong>Quisque rutrum.</strong> Aenean imperdiet viverra nulla ut
            metus varius laoreet. Aliquam lorem ante, dapibus in, viverra quis,
            feugiat a, tellus. Lorem Ipsum
          </EText>
        </EColumn>
      </ESection>
      <ESection
        backgroundRepeat='no-repeat'
        backgroundSize='cover'
        backgroundUrl='http://nimus.de/share/tpl-realestate/img-4.png'
        padding='30px'
      >
        <EColumn backgroundColor='#FFFFFF' verticalAlign='middle' width='40%'>
          <EImage
            align='center'
            alt=''
            border='none'
            src='http://nimus.de/share/tpl-realestate/box-top.png'
            width='220px'
          ></EImage>
          <EText
            align='center'
            color='#1D83A8'
            fontFamily='Alice, Helvetica, Arial, sans-serif'
            fontSize='26px'
            lineHeight='30px'
            padding='20px 20px 0 20px'
          >
            – 2. offer –
          </EText>
          <EText
            align='center'
            fontSize='22px'
            lineHeight='30px'
            padding='10px 20px'
          >
            198,700 $
          </EText>
          <EText align='center' padding='0 20px'>
            Donec quam felis, ultricies Nascetur ridiculus mus.
          </EText>
          <EButton
            backgroundColor='#F44E3C'
            borderRadius='20px'
            color='white'
            padding='20px 20px 30px 20px'
          >
            view details
          </EButton>
        </EColumn>
        <EColumn verticalAlign='middle' width='60%'>
          <EText
            align='center'
            color='#FFFFFF'
            fontFamily='Alice, Helvetica, Arial, sans-serif'
            fontSize='42px'
            lineHeight='48px'
            padding='40px 30px'
          >
            Window House 23
          </EText>
        </EColumn>
      </ESection>
      <ESection backgroundColor='#FFFFFF' padding='40px 20px'>
        <EColumn width='100%'>
          <EImage
            align='center'
            alt=''
            border='none'
            src='http://nimus.de/share/tpl-realestate/icon-1.png'
            width='130px'
          ></EImage>
        </EColumn>
      </ESection>
      <ESection padding='10px 0 20px 0'>
        <EColumn>
          <EText align='center' color='#9B9B9B' fontSize='11px'>
            <a href='#' style={{ color: '#9B9B9B' }}>
              Unsubscribe
            </a>{' '}
            from this newsletter
            <br />
            Icon made by Freepik from{' '}
            <a
              href='http://www.flaticon.com'
              target='_blank'
              style={{ color: '#9B9B9B', textDecoration: 'none' }}
            >
              www.flaticon.com
            </a>
            <br />{' '}
            <a
              href='http://svenhaustein.de'
              style={{ color: '#9B9B9B', textDecoration: 'none' }}
            >
              Made by svenhaustein.de
            </a>
          </EText>
        </EColumn>
      </ESection>
    </EBody>
  </EMail>
);

const RealEstate: FC<any> = () => {
  const { html } = useEmail(realEstateMarkup, {
    validationLevel: 'soft'
  });

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
};

export default RealEstate;
