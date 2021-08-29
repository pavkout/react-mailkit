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
} from 'react-mailkit';

const card = (
  <EMail>
    <EHead>
      <ETitle>Say hello to card</ETitle>
      <EFont
        href='https://fonts.googleapis.com/css?family=Montserrat:300,400,500'
        name='Roboto'
      />
      <EAttributes>
        <EAll fontFamily='Montserrat, Helvetica, Arial, sans-serif' />
        <EText
          color='#000000'
          fontSize='16px'
          fontWeight='400'
          lineHeight='24px'
        />
        <ESection padding='0px' />
      </EAttributes>
    </EHead>
    <EBody backgroundColor='#F2F2F2'>
      <ESection padding='10px 0 20px 0'>
        <EColumn>
          <EText align='center' color='#9B9B9B' fontSize='11px'>
            Writing A Good Headline For Your Advertisement
          </EText>
        </EColumn>
      </ESection>
      <ESection backgroundColor='#FFFFFF' padding='20px 20px 0 20px'>
        <EColumn width='35%'>
          <EText align='left' fontSize='20px' fontWeight='500'>
            // BR&amp;AND
          </EText>
        </EColumn>
        <EColumn width='65%'>
          <EText align='right' fontSize='11px'>
            <a href='#' style={{ color: '#000000', textDecoration: 'none' }}>
              HOME
            </a>
            &nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;
            <a href='#' style={{ color: '#000000', textDecoration: 'none' }}>
              SERVICE
            </a>
            &nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;
            <a href='#' style={{ color: '#000000', textDecoration: 'none' }}>
              THIRD
            </a>
          </EText>
        </EColumn>
      </ESection>
      <ESection backgroundColor='#FFFFFF' padding='20px 20px 0 20px'>
        <EColumn>
          <EText
            align='center'
            color='#5FA91D'
            fontSize='32px'
            fontWeight='300'
            lineHeight='40px'
            padding='30px 40px 10px 40px'
          >
            Free Advertising For Your Online Business.
          </EText>
        </EColumn>
      </ESection>
      <ESection backgroundColor='#FFFFFF' padding='10px 20px'>
        <EColumn>
          <EDivider
            borderColor='#9B9B9B'
            borderWidth='3px'
            width='30px'
          ></EDivider>
        </EColumn>
      </ESection>
      <ESection backgroundColor='#FFFFFF' padding='0 20px 20px 20px'>
        <EColumn width='80%'>
          <EText
            align='center'
            fontWeight='500'
            padding='0px'
            paddingTop='10px'
          >
            A Right Media Mix Can Make The Difference.
          </EText>
        </EColumn>
      </ESection>
      <ESection
        backgroundRepeat='no-repeat'
        backgroundSize='cover'
        backgroundUrl='http://nimus.de/share/tpl-card/bg.jpg'
      >
        <EColumn width='100%'>
          <EImage
            align='center'
            alt=''
            border='none'
            padding='0px'
            src='http://nimus.de/share/tpl-card/lineshadow.png'
          ></EImage>
          <EText align='center' fontWeight='300' padding='50px 40px 0 40px'>
            Marketers/advertisers usually focus their efforts on the people
            responsible for making the purchase. In many cases, this is an
            effective approach but in other cases it can make for a totally
            useless marketing campaign.
          </EText>
          <EButton
            align='center'
            backgroundColor='#5FA91D'
            borderRadius='2px'
            color='#FFFFFF'
            href='#'
            innerPadding='15px 30px'
            paddingBottom='100px'
            paddingTop='20px'
          >
            CALL TO ACTION
          </EButton>
        </EColumn>
      </ESection>
      <ESection backgroundColor='#FFFFFF' padding='50px 0 0 0'>
        <EColumn>
          <EImage
            align='center'
            alt='bottom border'
            border='none'
            padding='0px'
            src='http://nimus.de/share/tpl-card/bottom.png'
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
            52 Edison Court Suite 259 / East Aidabury / Cambodi
            <br />{' '}
            <a href='#' style={{ color: '#9B9B9B', textDecoration: 'none' }}>
              Made by svenhaustein.de
            </a>
          </EText>
        </EColumn>
      </ESection>
    </EBody>
  </EMail>
);

export const cardMarkup = `
  <EMail>
    <EHead>
      <ETitle>Say hello to card</ETitle>
      <EFont
        href='https://fonts.googleapis.com/css?family=Montserrat:300,400,500'
        name='Roboto'
      />
      <EAttributes>
        <EAll fontFamily='Montserrat, Helvetica, Arial, sans-serif' />
        <EText
          color='#000000'
          fontSize='16px'
          fontWeight='400'
          lineHeight='24px'
        />
        <ESection padding='0px' />
      </EAttributes>
    </EHead>
    <EBody backgroundColor='#F2F2F2'>
      <ESection padding='10px 0 20px 0'>
        <EColumn>
          <EText align='center' color='#9B9B9B' fontSize='11px'>
            Writing A Good Headline For Your Advertisement
          </EText>
        </EColumn>
      </ESection>
      <ESection backgroundColor='#FFFFFF' padding='20px 20px 0 20px'>
        <EColumn width='35%'>
          <EText align='left' fontSize='20px' fontWeight='500'>
            // BR&amp;AND
          </EText>
        </EColumn>
        <EColumn width='65%'>
          <EText align='right' fontSize='11px'>
            <a href='#' style={{ color: '#000000', textDecoration: 'none' }}>
              HOME
            </a>
            &nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;
            <a href='#' style={{ color: '#000000', textDecoration: 'none' }}>
              SERVICE
            </a>
            &nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;
            <a href='#' style={{ color: '#000000', textDecoration: 'none' }}>
              THIRD
            </a>
          </EText>
        </EColumn>
      </ESection>
      <ESection backgroundColor='#FFFFFF' padding='20px 20px 0 20px'>
        <EColumn>
          <EText
            align='center'
            color='#5FA91D'
            fontSize='32px'
            fontWeight='300'
            lineHeight='40px'
            padding='30px 40px 10px 40px'
          >
            Free Advertising For Your Online Business.
          </EText>
        </EColumn>
      </ESection>
      <ESection backgroundColor='#FFFFFF' padding='10px 20px'>
        <EColumn>
          <EDivider
            borderColor='#9B9B9B'
            borderWidth='3px'
            width='30px'
          ></EDivider>
        </EColumn>
      </ESection>
      <ESection backgroundColor='#FFFFFF' padding='0 20px 20px 20px'>
        <EColumn width='80%'>
          <EText
            align='center'
            fontWeight='500'
            padding='0px'
            paddingTop='10px'
          >
            A Right Media Mix Can Make The Difference.
          </EText>
        </EColumn>
      </ESection>
      <ESection
        backgroundRepeat='no-repeat'
        backgroundSize='cover'
        backgroundUrl='http://nimus.de/share/tpl-card/bg.jpg'
      >
        <EColumn width='100%'>
          <EImage
            align='center'
            alt=''
            border='none'
            padding='0px'
            src='http://nimus.de/share/tpl-card/lineshadow.png'
          ></EImage>
          <EText align='center' fontWeight='300' padding='50px 40px 0 40px'>
            Marketers/advertisers usually focus their efforts on the people
            responsible for making the purchase. In many cases, this is an
            effective approach but in other cases it can make for a totally
            useless marketing campaign.
          </EText>
          <EButton
            align='center'
            backgroundColor='#5FA91D'
            borderRadius='2px'
            color='#FFFFFF'
            href='#'
            innerPadding='15px 30px'
            paddingBottom='100px'
            paddingTop='20px'
          >
            CALL TO ACTION
          </EButton>
        </EColumn>
      </ESection>
      <ESection backgroundColor='#FFFFFF' padding='50px 0 0 0'>
        <EColumn>
          <EImage
            align='center'
            alt='bottom border'
            border='none'
            padding='0px'
            src='http://nimus.de/share/tpl-card/bottom.png'
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
            52 Edison Court Suite 259 / East Aidabury / Cambodi
            <br />{' '}
            <a href='#' style={{ color: '#9B9B9B', textDecoration: 'none' }}>
              Made by svenhaustein.de
            </a>
          </EText>
        </EColumn>
      </ESection>
    </EBody>
  </EMail>
`;

const Card: FC<any> = () => {
  const { html } = useEmail(card, {
    validationLevel: 'soft'
  });

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
};

export default Card;
