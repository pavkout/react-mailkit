import React, { FC } from 'react';

import {
  EMail,
  EText,
  ESection,
  EBody,
  EColumn,
  EImage,
  EButton,
  EDivider,
  useEmail
} from 'react-mailkit';

const arturia = (
  <EMail>
    <EBody backgroundColor='#F2F2F2'>
      <ESection paddingBottom='0px'>
        <EColumn verticalAlign='middle'>
          <EImage
            align='center'
            alt=''
            href='https://www.arturia.com'
            src='https://www.arturia.com/images/newsletters/2016-02-black/Logo-Baseline-0.15x.png'
            width='144px'
          ></EImage>
        </EColumn>
        <EColumn />
        <EColumn>
          <EText
            align='left'
            fontFamily='Helvetica,Arial,sans-serif'
            lineHeight='120%'
            textDecoration='underline'
          >
            NEWS
            <br />
            MARCH 2016
          </EText>
        </EColumn>
      </ESection>
      <ESection backgroundColor='#000001'>
        <EColumn>
          <EText
            color='#FFFFFE'
            fontFamily='Helvetica,Arial,sans-serif'
            fontSize='14px'
            lineHeight='120%'
            paddingBottom='0px'
            paddingTop='0px'
          >
            Dear [[firstname]], <br />
            <br /> You used to follow rhythm, now rhythm follows you, everywhere
            you go!
            <br /> Discover iSpark, the mobile transposition of our renowned
            beat-making solution Spark.
          </EText>
        </EColumn>
      </ESection>
      <ESection>
        <EColumn backgroundColor='#FFFFFE'>
          <EImage
            alt=''
            href='https://www.arturia.com/products/ipad-synths/ispark/overview'
            paddingBottom='0px'
            paddingLeft='0px'
            paddingRight='0px'
            paddingTop='0px'
            src='https://www.arturia.com/images/newsletters/2016-02-ispark/05.jpg'
          ></EImage>
          <EText
            fontFamily='Helvetica,Arial,sans-serif'
            fontSize='14px'
            lineHeight='120%'
            paddingBottom='25px'
            paddingTop='25px'
          >
            iSpark is a powerful mobile production tool allowing you to create
            and play rhythmic tracks, complex grooves and even complete songs.
            Its sonic strike force comes along with an unwavering workflow and a
            real flexibility.
          </EText>
        </EColumn>
      </ESection>
      <ESection>
        <EColumn backgroundColor='#FFFFFE'>
          <EImage
            alt=''
            href='https://www.arturia.com/products/ipad-synths/ispark/overview'
            paddingBottom='0px'
            paddingLeft='0px'
            paddingRight='0px'
            paddingTop='0px'
            src='https://www.arturia.com/images/newsletters/2016-02-ispark/06.jpg'
          ></EImage>
          <EText
            fontFamily='Helvetica,Arial,sans-serif'
            fontSize='14px'
            lineHeight='120%'
            paddingBottom='25px'
            paddingTop='25px'
          >
            Check out the iSpark introduction movie shot during the Arturia
            Experience event at the ADE featuring the Dutch beatmaker
            FilosofischeStilte.
          </EText>
        </EColumn>
      </ESection>
      <ESection>
        <EColumn backgroundColor='#FFFFFE'>
          <EImage
            alt=''
            href='https://www.arturia.com/products/ipad-synths/ispark/details'
            paddingBottom='0px'
            paddingLeft='0px'
            paddingRight='0px'
            paddingTop='0px'
            src='https://www.arturia.com/images/newsletters/2016-02-ispark/07.jpg'
          ></EImage>
          <EText
            fontFamily='Helvetica,Arial,sans-serif'
            fontSize='14px'
            lineHeight='120%'
            paddingBottom='25px'
            paddingTop='25px'
          >
            Follow Mauricio Garcia, Arturia Product Specialist, presenting you
            the many clever features of iSpark in this series of tutorials.
          </EText>
        </EColumn>
      </ESection>
      <ESection>
        <EColumn backgroundColor='#FFFFFE'>
          <EImage
            alt=''
            href='https://www.arturia.com/products/ipad-synths/ispark/details'
            paddingBottom='0px'
            paddingLeft='0px'
            paddingRight='0px'
            paddingTop='0px'
            src='https://www.arturia.com/images/newsletters/2016-02-ispark/08.jpg'
          ></EImage>
          <EText
            fontFamily='Helvetica,Arial,sans-serif'
            fontSize='14px'
            lineHeight='120%'
            paddingTop='25px'
          >
            iSpark includes a tremendous collection of factory kits and
            individual instruments covering most of the field of application of
            beat-making but it is also compatible with the existing Spark
            resources and Expansion Packs.
          </EText>
          <EButton
            backgroundColor='#2DDCB4'
            borderRadius='8px'
            fontFamily='Helvetica,Arial,sans-serif'
            fontSize='14px'
            href='https://www.arturia.com/products/ipad-synths/ispark/overview'
            lineHeight='120%'
            paddingBottom='25px'
          >
            Learn more about iSpark
          </EButton>
        </EColumn>
      </ESection>
      <ESection backgroundColor='#000001'>
        <EColumn>
          <EText
            color='#FFFFFE'
            fontFamily='Helvetica,Arial,sans-serif'
            fontSize='14px'
          >
            Musically yours,
            <br /> The Arturia Team
          </EText>
        </EColumn>
      </ESection>
      <ESection
        paddingBottom='0px'
        paddingLeft='0px'
        paddingRight='0px'
        paddingTop='0px'
      >
        <EColumn>
          <EImage
            alt=''
            href='http://www.facebook.com/arturia2'
            src='https://www.arturia.com/images/newsletters/2016-02-ispark/facebook_arturia.png'
            width='86px'
          ></EImage>
        </EColumn>
        <EColumn>
          <EImage
            alt=''
            href='http://www.youtube.com/arturiaweb'
            src='https://www.arturia.com/images/newsletters/2016-02-ispark/youtube.png'
            width='86px'
          ></EImage>
        </EColumn>
        <EColumn>
          <EImage
            alt=''
            href='http://soundcloud.com/arturia-official'
            src='https://www.arturia.com/images/newsletters/2016-02-ispark/Soundcloud.png'
            width='86px'
          ></EImage>
        </EColumn>
        <EColumn>
          <EImage
            alt=''
            href='http://twitter.com/arturiaofficial'
            src='https://www.arturia.com/images/newsletters/2016-02-ispark/twitter_arturia.png'
            width='86px'
          ></EImage>
        </EColumn>
      </ESection>
      <ESection paddingBottom='0px' paddingTop='0px'>
        <EColumn>
          <EText
            align='center'
            fontFamily='Helvetica,Arial,sans-serif'
            paddingTop='0px'
          >
            See this email in your browser{' '}
            <a
              href='https://www.arturia.com/images/newsletters/2016-02-ispark/newsletter.html'
              style={{ textDecoration: 'none', color: '#2DDCB4' }}
            >
              here
            </a>
          </EText>
          <EDivider paddingLeft='0px' paddingRight='0px'></EDivider>
        </EColumn>
      </ESection>
      <ESection paddingBottom='0px' paddingTop='0px'>
        <EColumn>
          <EText
            fontFamily='Helvetica,Arial,sans-serif'
            fontSize='10px'
            lineHeight='12px'
            paddingBottom='0px'
            paddingTop='0px'
          >
            Your email address is on this list as a result of a subscription,
            information request, competition, or other correspondence you may
            have had with us in the past. If you would like to be removed from
            our list, check the email address this newsletter was sent to and
            use the following link:{' '}
            <a
              href='https://www.arturia.com/index.php?option=com_myarturia&view=newsletter&task=unsubscribeFromEmail&email={email}&token={title}&utm_source=elasticemail&utm_medium=email&utm_campaign=arturia_unsubscribe_2016&utm_term=nl-ispark-launch&utm_content=unsubscribe_footer'
              style={{ textDecoration: 'none', color: '#2DDCB4' }}
            >
              Unsubscribe
            </a>
            . Privacy policy available{' '}
            <a
              href='https://www.arturia.com/privacypolicy'
              style={{ textDecoration: 'none', color: '#2DDCB4' }}
            >
              here
            </a>
            .
          </EText>
          <EText
            fontFamily='Helvetica,Arial,sans-serif'
            fontSize='10px'
            lineHeight='12px'
            paddingBottom='0px'
          >
            ARTURIA:{' '}
            <a
              href='https://www.arturia.com'
              style={{ textDecoration: 'none', color: '#2DDCB4' }}
            >
              https://www.arturia.com
            </a>{' '}
            - Contact:{' '}
            <a
              href='mailto:info@arturia.com'
              style={{ textDecoration: 'none', color: '#2DDCB4' }}
            >
              info
            </a>
            <br /> ARTURIA France: 30 chemin du vieux chêne, 38240 Meylan -
            FRANCE
            <br /> ARTURIA US: : 5776-D Lindero Cyn Rd #239 -Westlake Village,
            CA 91362 - USA
          </EText>
          <EDivider paddingLeft='0px' paddingRight='0px'></EDivider>
        </EColumn>
      </ESection>
    </EBody>
  </EMail>
);

export const arturiaMarkup = `
  <EMail>
    <EBody backgroundColor='#F2F2F2'>
      <ESection paddingBottom='0px'>
        <EColumn verticalAlign='middle'>
          <EImage
            align='center'
            alt=''
            href='https://www.arturia.com'
            src='https://www.arturia.com/images/newsletters/2016-02-black/Logo-Baseline-0.15x.png'
            width='144px'
          ></EImage>
        </EColumn>
        <EColumn />
        <EColumn>
          <EText
            align='left'
            fontFamily='Helvetica,Arial,sans-serif'
            lineHeight='120%'
            textDecoration='underline'
          >
            NEWS
            <br />
            MARCH 2016
          </EText>
        </EColumn>
      </ESection>
      <ESection backgroundColor='#000001'>
        <EColumn>
          <EText
            color='#FFFFFE'
            fontFamily='Helvetica,Arial,sans-serif'
            fontSize='14px'
            lineHeight='120%'
            paddingBottom='0px'
            paddingTop='0px'
          >
            Dear [[firstname]], <br />
            <br /> You used to follow rhythm, now rhythm follows you, everywhere
            you go!
            <br /> Discover iSpark, the mobile transposition of our renowned
            beat-making solution Spark.
          </EText>
        </EColumn>
      </ESection>
      <ESection>
        <EColumn backgroundColor='#FFFFFE'>
          <EImage
            alt=''
            href='https://www.arturia.com/products/ipad-synths/ispark/overview'
            paddingBottom='0px'
            paddingLeft='0px'
            paddingRight='0px'
            paddingTop='0px'
            src='https://www.arturia.com/images/newsletters/2016-02-ispark/05.jpg'
          ></EImage>
          <EText
            fontFamily='Helvetica,Arial,sans-serif'
            fontSize='14px'
            lineHeight='120%'
            paddingBottom='25px'
            paddingTop='25px'
          >
            iSpark is a powerful mobile production tool allowing you to create
            and play rhythmic tracks, complex grooves and even complete songs.
            Its sonic strike force comes along with an unwavering workflow and a
            real flexibility.
          </EText>
        </EColumn>
      </ESection>
      <ESection>
        <EColumn backgroundColor='#FFFFFE'>
          <EImage
            alt=''
            href='https://www.arturia.com/products/ipad-synths/ispark/overview'
            paddingBottom='0px'
            paddingLeft='0px'
            paddingRight='0px'
            paddingTop='0px'
            src='https://www.arturia.com/images/newsletters/2016-02-ispark/06.jpg'
          ></EImage>
          <EText
            fontFamily='Helvetica,Arial,sans-serif'
            fontSize='14px'
            lineHeight='120%'
            paddingBottom='25px'
            paddingTop='25px'
          >
            Check out the iSpark introduction movie shot during the Arturia
            Experience event at the ADE featuring the Dutch beatmaker
            FilosofischeStilte.
          </EText>
        </EColumn>
      </ESection>
      <ESection>
        <EColumn backgroundColor='#FFFFFE'>
          <EImage
            alt=''
            href='https://www.arturia.com/products/ipad-synths/ispark/details'
            paddingBottom='0px'
            paddingLeft='0px'
            paddingRight='0px'
            paddingTop='0px'
            src='https://www.arturia.com/images/newsletters/2016-02-ispark/07.jpg'
          ></EImage>
          <EText
            fontFamily='Helvetica,Arial,sans-serif'
            fontSize='14px'
            lineHeight='120%'
            paddingBottom='25px'
            paddingTop='25px'
          >
            Follow Mauricio Garcia, Arturia Product Specialist, presenting you
            the many clever features of iSpark in this series of tutorials.
          </EText>
        </EColumn>
      </ESection>
      <ESection>
        <EColumn backgroundColor='#FFFFFE'>
          <EImage
            alt=''
            href='https://www.arturia.com/products/ipad-synths/ispark/details'
            paddingBottom='0px'
            paddingLeft='0px'
            paddingRight='0px'
            paddingTop='0px'
            src='https://www.arturia.com/images/newsletters/2016-02-ispark/08.jpg'
          ></EImage>
          <EText
            fontFamily='Helvetica,Arial,sans-serif'
            fontSize='14px'
            lineHeight='120%'
            paddingTop='25px'
          >
            iSpark includes a tremendous collection of factory kits and
            individual instruments covering most of the field of application of
            beat-making but it is also compatible with the existing Spark
            resources and Expansion Packs.
          </EText>
          <EButton
            backgroundColor='#2DDCB4'
            borderRadius='8px'
            fontFamily='Helvetica,Arial,sans-serif'
            fontSize='14px'
            href='https://www.arturia.com/products/ipad-synths/ispark/overview'
            lineHeight='120%'
            paddingBottom='25px'
          >
            Learn more about iSpark
          </EButton>
        </EColumn>
      </ESection>
      <ESection backgroundColor='#000001'>
        <EColumn>
          <EText
            color='#FFFFFE'
            fontFamily='Helvetica,Arial,sans-serif'
            fontSize='14px'
          >
            Musically yours,
            <br /> The Arturia Team
          </EText>
        </EColumn>
      </ESection>
      <ESection
        paddingBottom='0px'
        paddingLeft='0px'
        paddingRight='0px'
        paddingTop='0px'
      >
        <EColumn>
          <EImage
            alt=''
            href='http://www.facebook.com/arturia2'
            src='https://www.arturia.com/images/newsletters/2016-02-ispark/facebook_arturia.png'
            width='86px'
          ></EImage>
        </EColumn>
        <EColumn>
          <EImage
            alt=''
            href='http://www.youtube.com/arturiaweb'
            src='https://www.arturia.com/images/newsletters/2016-02-ispark/youtube.png'
            width='86px'
          ></EImage>
        </EColumn>
        <EColumn>
          <EImage
            alt=''
            href='http://soundcloud.com/arturia-official'
            src='https://www.arturia.com/images/newsletters/2016-02-ispark/Soundcloud.png'
            width='86px'
          ></EImage>
        </EColumn>
        <EColumn>
          <EImage
            alt=''
            href='http://twitter.com/arturiaofficial'
            src='https://www.arturia.com/images/newsletters/2016-02-ispark/twitter_arturia.png'
            width='86px'
          ></EImage>
        </EColumn>
      </ESection>
      <ESection paddingBottom='0px' paddingTop='0px'>
        <EColumn>
          <EText
            align='center'
            fontFamily='Helvetica,Arial,sans-serif'
            paddingTop='0px'
          >
            See this email in your browser{' '}
            <a
              href='https://www.arturia.com/images/newsletters/2016-02-ispark/newsletter.html'
              style={{ textDecoration: 'none', color: '#2DDCB4' }}
            >
              here
            </a>
          </EText>
          <EDivider paddingLeft='0px' paddingRight='0px'></EDivider>
        </EColumn>
      </ESection>
      <ESection paddingBottom='0px' paddingTop='0px'>
        <EColumn>
          <EText
            fontFamily='Helvetica,Arial,sans-serif'
            fontSize='10px'
            lineHeight='12px'
            paddingBottom='0px'
            paddingTop='0px'
          >
            Your email address is on this list as a result of a subscription,
            information request, competition, or other correspondence you may
            have had with us in the past. If you would like to be removed from
            our list, check the email address this newsletter was sent to and
            use the following link:{' '}
            <a
              href='https://www.arturia.com/index.php?option=com_myarturia&view=newsletter&task=unsubscribeFromEmail&email={email}&token={title}&utm_source=elasticemail&utm_medium=email&utm_campaign=arturia_unsubscribe_2016&utm_term=nl-ispark-launch&utm_content=unsubscribe_footer'
              style={{ textDecoration: 'none', color: '#2DDCB4' }}
            >
              Unsubscribe
            </a>
            . Privacy policy available{' '}
            <a
              href='https://www.arturia.com/privacypolicy'
              style={{ textDecoration: 'none', color: '#2DDCB4' }}
            >
              here
            </a>
            .
          </EText>
          <EText
            fontFamily='Helvetica,Arial,sans-serif'
            fontSize='10px'
            lineHeight='12px'
            paddingBottom='0px'
          >
            ARTURIA:{' '}
            <a
              href='https://www.arturia.com'
              style={{ textDecoration: 'none', color: '#2DDCB4' }}
            >
              https://www.arturia.com
            </a>{' '}
            - Contact:{' '}
            <a
              href='mailto:info@arturia.com'
              style={{ textDecoration: 'none', color: '#2DDCB4' }}
            >
              info
            </a>
            <br /> ARTURIA France: 30 chemin du vieux chêne, 38240 Meylan -
            FRANCE
            <br /> ARTURIA US: : 5776-D Lindero Cyn Rd #239 -Westlake Village,
            CA 91362 - USA
          </EText>
          <EDivider paddingLeft='0px' paddingRight='0px'></EDivider>
        </EColumn>
      </ESection>
    </EBody>
  </EMail>`;

const Arturia: FC<any> = () => {
  const { html } = useEmail(arturia, {
    validationLevel: 'soft'
  });

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
};

export default Arturia;
