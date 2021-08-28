import React, { FC } from 'react';

import {
  EMail,
  EHead,
  EFont,
  ETitle,
  EAttributes,
  EAll,
  EText,
  ESection,
  EBody,
  EColumn,
  EImage,
  EDivider,
  ETable,
  useEmail
} from '@react-mailkit/core';

const recast = (
  <EMail>
    <EHead>
      <ETitle>Hello world</ETitle>
      <EFont
        href='https://fonts.googleapis.com/css?family=Roboto:300,500'
        name='Roboto'
      />
      <EAttributes>
        <EAll fontFamily='Roboto, Helvetica, sans-serif' />
        <EText
          color='#616161'
          fontSize='16px'
          fontWeight='300'
          lineHeight='24px'
        />
        <ESection padding='0px' />
      </EAttributes>
    </EHead>
    <EBody backgroundColor='#ffffff'>
      <ESection padding='20px 0'>
        <EColumn width='60%'>
          <EText fontSize='10px'>
            Your bimonthly intake of AI, machine learning and bots is here!
          </EText>
        </EColumn>
        <EColumn width='40%'>
          <EText align='right'>[[PERMALINK]]</EText>
        </EColumn>
      </ESection>
      <ESection>
        <EColumn width='100%'>
          <EImage
            href='https://recast.ai?ref=newsletter'
            src='https://cdn.recast.ai/newsletter/city-01.png'
          ></EImage>
        </EColumn>
      </ESection>
      <ESection>
        <EColumn width='100%'>
          <EText align='center'>
            Your bimonthly intake of AI, machine learning and bots is here!
          </EText>
        </EColumn>
      </ESection>
      <ESection>
        <EColumn width='45%'>
          <EText align='center' fontSize='18px' fontWeight='500' padding='0px'>
            ISSUE #18 - DECEMBER
          </EText>
          <EDivider borderColor='#616161' borderWidth='2px'></EDivider>
          <EDivider
            borderColor='#616161'
            borderWidth='2px'
            width='45%'
          ></EDivider>
        </EColumn>
      </ESection>
      <ESection paddingTop='30px'>
        <EColumn width='100%'>
          <EText>
            <p>Hello hello!</p>
            <p>
              {' '}
              Don't panic. This is still the same newsletter, I'm still me. We
              just updated the design to make it sleeker and easier to read!{' '}
            </p>
            <p>
              Without further ado, let's dive into AI for medecine, sound
              recognition models and bot building!
            </p>
          </EText>
        </EColumn>
      </ESection>
      <ESection>
        <EColumn width='11%'>
          <EImage
            align='left'
            href='https://twitter.com/MrJustaine'
            paddingLeft='25px'
            paddingRight='0px'
            src='https://cdn.recast.ai/newsletter/justine.png'
            width='70px'
          ></EImage>
        </EColumn>
        <EColumn width='89%'>
          <EText padding='0 25px'>
            <p style={{ color: '#BDBDBD', lineHeight: '9px' }}>
              {' '}
              Justine -{' '}
              <a
                href='https://recast.ai?ref=newsletter'
                style={{ color: '#3498DB' }}
              >
                Recast.AI
              </a>{' '}
              team{' '}
            </p>
            <p
              style={{
                fontStyle: 'italic',
                color: '#BDBDBD',
                lineHeight: '9px'
              }}
            >
              {' '}
              Your light in the storm{' '}
            </p>
          </EText>
        </EColumn>
      </ESection>
      <ESection>
        <EColumn width='100%'>
          <EDivider borderColor='#E0E0E0' borderWidth='1px'></EDivider>
        </EColumn>
      </ESection>
      <ESection>
        <EColumn width='75%'>
          <EText>
            <h3 style={{ fontWeight: 'bold', marginTop: 0, marginBottom: 0 }}>
              {' '}
              <a
                href='https://blog.recast.ai/module-faster-shadow/'
                style={{ color: '#3498DB', textDecoration: 'none' }}
              >
                Modules, are you faster than your shadows?
              </a>{' '}
            </h3>
            <p style={{ fontSize: '14px' }}>
              As a developer, should you use modules or code this bit of feature
              by yourself? Let's find out.
            </p>
          </EText>
        </EColumn>
        <EColumn width='25%'>
          <EImage
            href='https://blog.recast.ai/module-faster-shadow/'
            src='https://cdn.recast.ai/newsletter/183.png'
            width='100px'
          ></EImage>
        </EColumn>
      </ESection>
      <ESection>
        <EColumn width='75%'>
          <EText>
            <h3 style={{ fontWeight: 'bold', marginTop: 0, marginBottom: 0 }}>
              {' '}
              <a
                href='http://projects.csail.mit.edu/soundnet/'
                style={{ color: '#3498DB', textDecoration: 'none' }}
              >
                SoundNet - Learning sound representations from unlabeled video
              </a>{' '}
            </h3>
            <p style={{ fontSize: '14px' }}>
              With a deep convolutional network created for sound recognition,
              the model recognizes objects and scenes only from sounds.{' '}
            </p>
          </EText>
        </EColumn>
        <EColumn width='25%'>
          <EImage
            href='http://projects.csail.mit.edu/soundnet/'
            src='https://cdn.recast.ai/newsletter/190.png'
            width='100px'
          ></EImage>
        </EColumn>
      </ESection>
      <ESection>
        <EColumn width='75%'>
          <EText>
            <h3 style={{ fontWeight: 'bold', marginTop: 0, marginBottom: 0 }}>
              {' '}
              <a
                href='https://blog.cardiogr.am/three-challenges-for-artificial-intelligence-in-medicine-dfb9993ae750#.ex1me3nhw'
                style={{ color: '#3498DB', textDecoration: 'none' }}
              >
                Three challenges for artificial intelligence in medicine
              </a>{' '}
            </h3>
            <p style={{ fontSize: '14px' }}>
              Brandon Ballinger takes us back in time with an historic of AI in
              medecine and where it could today make a difference.
            </p>
          </EText>
        </EColumn>
        <EColumn width='25%'>
          <EImage
            href='https://blog.cardiogr.am/three-challenges-for-artificial-intelligence-in-medicine-dfb9993ae750#.ex1me3nhw'
            src='https://cdn.recast.ai/newsletter/1891.png'
            width='100px'
          ></EImage>
        </EColumn>
      </ESection>
      <ESection>
        <EColumn width='75%'>
          <EText>
            <h3 style={{ fontWeight: 'bold', marginTop: 0, marginBottom: 0 }}>
              {' '}
              <a
                href='https://blog.recast.ai/how-to-choose-the-best-channel-for-your-bot-the-ultimate-cheat-sheet/'
                style={{ color: '#3498DB', textDecoration: 'none' }}
              >
                How to choose the best channel for your bot: the ultimate cheat
                sheet
              </a>{' '}
            </h3>
            <p style={{ fontSize: '14px' }}>
              Bot channels do not offer the same features: here’s an analysis of
              a few to help you figure everything out.
            </p>
          </EText>
        </EColumn>
        <EColumn width='25%'>
          <EImage
            href='https://blog.recast.ai/how-to-choose-the-best-channel-for-your-bot-the-ultimate-cheat-sheet/'
            src='https://cdn.recast.ai/newsletter/184.jpg'
            width='100px'
          ></EImage>
        </EColumn>
      </ESection>
      <ESection>
        <EColumn width='100%'>
          <EDivider borderColor='#E0E0E0' borderWidth='1px'></EDivider>
        </EColumn>
      </ESection>
      <ESection>
        <EColumn>
          <EText paddingBottom='0px'>
            <h3 style={{ fontWeight: 'bold' }}>
              {' '}
              <a
                href='http://www.forbes.com/sites/quora/2016/09/23/what-are-the-differences-between-ai-machine-learning-nlp-and-deep-learning/#4f981bbb36f0'
                style={{ color: '#3498DB', textDecoration: 'none' }}
              >
                What are the differences between AI, machine learning, NLP, and
                deep learning?
              </a>{' '}
            </h3>
          </EText>
          <EImage
            href='http://www.forbes.com/sites/quora/2016/09/23/what-are-the-differences-between-ai-machine-learning-nlp-and-deep-learning/#4f981bbb36f0'
            paddingTop='0'
            src='https://cdn.recast.ai/newsletter/186.jpg'
            width='600px'
          ></EImage>
          <EText>
            <p style={{ fontSize: '14px' }}>
              {' '}
              So many big words in a booming market, let's take a step back and
              redefine which is what, and which does what.{' '}
            </p>
          </EText>
        </EColumn>
      </ESection>
      <ESection>
        <EColumn>
          <EText paddingBottom='0px'>
            <h3 style={{ fontWeight: 'bold' }}>
              {' '}
              <a
                href='https://chatbotsmagazine.com/the-implications-of-a-i-on-the-future-chatbots-eaedaf20bfb7#.28dezxtns'
                style={{ color: '#3498DB', textDecoration: 'none' }}
              >
                The implications of AI on the future chatbots
              </a>{' '}
            </h3>
          </EText>
          <EImage
            href='https://chatbotsmagazine.com/the-implications-of-a-i-on-the-future-chatbots-eaedaf20bfb7#.28dezxtns'
            paddingTop='0'
            src='https://cdn.recast.ai/newsletter/187.jpg'
            width='600px'
          ></EImage>
          <EText>
            <p style={{ fontSize: '14px' }}>
              {' '}
              Artificial intelligence, machine learning, neural networks: how
              can they be used with chatbots? What does the future hold?{' '}
            </p>
          </EText>
        </EColumn>
      </ESection>
      <ESection>
        <EColumn>
          <EText paddingBottom='0px'>
            <h3 style={{ fontWeight: 'bold' }}>
              {' '}
              <a
                href='https://chatbotsmagazine.com/nlp-and-the-coming-content-explosion-5ad45017f36f#.rr1g031tl'
                style={{ color: '#3498DB', textDecoration: 'none' }}
              >
                NLP and the coming content explosion
              </a>{' '}
            </h3>
          </EText>
          <EImage
            href='https://chatbotsmagazine.com/nlp-and-the-coming-content-explosion-5ad45017f36f#.rr1g031tl'
            paddingTop='0'
            src='https://cdn.recast.ai/newsletter/188.png'
            width='600px'
          ></EImage>
          <EText>
            <p style={{ fontSize: '14px' }}>
              {' '}
              Natural language powered interfaces are taking the world by storm,
              and we can't help but wonder how they'll change the way we
              deliver, read and share content.{' '}
            </p>
          </EText>
          <EDivider borderColor='#E0E0E0' borderWidth='1px'></EDivider>
        </EColumn>
      </ESection>
      <ESection>
        <EColumn width='65%'>
          <EImage
            align='left'
            href='https://recast.ai?ref=newsletter'
            src='https://cdn.recast.ai/newsletter/recast-ai-01.png'
            width='150px'
          ></EImage>
        </EColumn>
        <EColumn width='35%'>
          <ETable>
            <tr style={{ listStyle: 'none', lineHeight: 1 }}>
              <td>
                {' '}
                <a href='https://twitter.com/RecastAI'>
                  <img
                    width='25'
                    src='https://cdn.recast.ai/newsletter/twitter.png'
                  />
                </a>{' '}
              </td>
              <td>
                {' '}
                <a href='https://www.facebook.com/recastAI'>
                  <img
                    width='25'
                    src='https://cdn.recast.ai/newsletter/facebook.png'
                  />
                </a>{' '}
              </td>
              <td>
                {' '}
                <a href='https://medium.com/@RecastAI'>
                  <img
                    width='25'
                    src='https://cdn.recast.ai/newsletter/medium.png'
                  />
                </a>{' '}
              </td>
              <td>
                {' '}
                <a href='https://www.youtube.com/channel/UCA0UZlR8crpgwFiVaSTbVWw'>
                  <img
                    width='25'
                    src='https://cdn.recast.ai/newsletter/youtube.png'
                  />
                </a>{' '}
              </td>
              <td>
                {' '}
                <a href='https://plus.google.com/u/0/+RecastAi'>
                  <img
                    width='25'
                    src='https://cdn.recast.ai/newsletter/google%2B.png'
                  />
                </a>{' '}
              </td>
            </tr>
          </ETable>
        </EColumn>
      </ESection>
    </EBody>
  </EMail>
);

export const recastMarkup = `
  <EMail>
    <EHead>
      <ETitle>Hello world</ETitle>
      <EFont
        href='https://fonts.googleapis.com/css?family=Roboto:300,500'
        name='Roboto'
      />
      <EAttributes>
        <EAll fontFamily='Roboto, Helvetica, sans-serif' />
        <EText
          color='#616161'
          fontSize='16px'
          fontWeight='300'
          lineHeight='24px'
        />
        <ESection padding='0px' />
      </EAttributes>
    </EHead>
    <EBody backgroundColor='#ffffff'>
      <ESection padding='20px 0'>
        <EColumn width='60%'>
          <EText fontSize='10px'>
            Your bimonthly intake of AI, machine learning and bots is here!
          </EText>
        </EColumn>
        <EColumn width='40%'>
          <EText align='right'>[[PERMALINK]]</EText>
        </EColumn>
      </ESection>
      <ESection>
        <EColumn width='100%'>
          <EImage
            href='https://recast.ai?ref=newsletter'
            src='https://cdn.recast.ai/newsletter/city-01.png'
          ></EImage>
        </EColumn>
      </ESection>
      <ESection>
        <EColumn width='100%'>
          <EText align='center'>
            Your bimonthly intake of AI, machine learning and bots is here!
          </EText>
        </EColumn>
      </ESection>
      <ESection>
        <EColumn width='45%'>
          <EText align='center' fontSize='18px' fontWeight='500' padding='0px'>
            ISSUE #18 - DECEMBER
          </EText>
          <EDivider borderColor='#616161' borderWidth='2px'></EDivider>
          <EDivider
            borderColor='#616161'
            borderWidth='2px'
            width='45%'
          ></EDivider>
        </EColumn>
      </ESection>
      <ESection paddingTop='30px'>
        <EColumn width='100%'>
          <EText>
            <p>Hello hello!</p>
            <p>
              {' '}
              Don't panic. This is still the same newsletter, I'm still me. We
              just updated the design to make it sleeker and easier to read!{' '}
            </p>
            <p>
              Without further ado, let's dive into AI for medecine, sound
              recognition models and bot building!
            </p>
          </EText>
        </EColumn>
      </ESection>
      <ESection>
        <EColumn width='11%'>
          <EImage
            align='left'
            href='https://twitter.com/MrJustaine'
            paddingLeft='25px'
            paddingRight='0px'
            src='https://cdn.recast.ai/newsletter/justine.png'
            width='70px'
          ></EImage>
        </EColumn>
        <EColumn width='89%'>
          <EText padding='0 25px'>
            <p style={{ color: '#BDBDBD', lineHeight: '9px' }}>
              {' '}
              Justine -{' '}
              <a
                href='https://recast.ai?ref=newsletter'
                style={{ color: '#3498DB' }}
              >
                Recast.AI
              </a>{' '}
              team{' '}
            </p>
            <p
              style={{
                fontStyle: 'italic',
                color: '#BDBDBD',
                lineHeight: '9px'
              }}
            >
              {' '}
              Your light in the storm{' '}
            </p>
          </EText>
        </EColumn>
      </ESection>
      <ESection>
        <EColumn width='100%'>
          <EDivider borderColor='#E0E0E0' borderWidth='1px'></EDivider>
        </EColumn>
      </ESection>
      <ESection>
        <EColumn width='75%'>
          <EText>
            <h3 style={{ fontWeight: 'bold', marginTop: 0, marginBottom: 0 }}>
              {' '}
              <a
                href='https://blog.recast.ai/module-faster-shadow/'
                style={{ color: '#3498DB', textDecoration: 'none' }}
              >
                Modules, are you faster than your shadows?
              </a>{' '}
            </h3>
            <p style={{ fontSize: '14px' }}>
              As a developer, should you use modules or code this bit of feature
              by yourself? Let's find out.
            </p>
          </EText>
        </EColumn>
        <EColumn width='25%'>
          <EImage
            href='https://blog.recast.ai/module-faster-shadow/'
            src='https://cdn.recast.ai/newsletter/183.png'
            width='100px'
          ></EImage>
        </EColumn>
      </ESection>
      <ESection>
        <EColumn width='75%'>
          <EText>
            <h3 style={{ fontWeight: 'bold', marginTop: 0, marginBottom: 0 }}>
              {' '}
              <a
                href='http://projects.csail.mit.edu/soundnet/'
                style={{ color: '#3498DB', textDecoration: 'none' }}
              >
                SoundNet - Learning sound representations from unlabeled video
              </a>{' '}
            </h3>
            <p style={{ fontSize: '14px' }}>
              With a deep convolutional network created for sound recognition,
              the model recognizes objects and scenes only from sounds.{' '}
            </p>
          </EText>
        </EColumn>
        <EColumn width='25%'>
          <EImage
            href='http://projects.csail.mit.edu/soundnet/'
            src='https://cdn.recast.ai/newsletter/190.png'
            width='100px'
          ></EImage>
        </EColumn>
      </ESection>
      <ESection>
        <EColumn width='75%'>
          <EText>
            <h3 style={{ fontWeight: 'bold', marginTop: 0, marginBottom: 0 }}>
              {' '}
              <a
                href='https://blog.cardiogr.am/three-challenges-for-artificial-intelligence-in-medicine-dfb9993ae750#.ex1me3nhw'
                style={{ color: '#3498DB', textDecoration: 'none' }}
              >
                Three challenges for artificial intelligence in medicine
              </a>{' '}
            </h3>
            <p style={{ fontSize: '14px' }}>
              Brandon Ballinger takes us back in time with an historic of AI in
              medecine and where it could today make a difference.
            </p>
          </EText>
        </EColumn>
        <EColumn width='25%'>
          <EImage
            href='https://blog.cardiogr.am/three-challenges-for-artificial-intelligence-in-medicine-dfb9993ae750#.ex1me3nhw'
            src='https://cdn.recast.ai/newsletter/1891.png'
            width='100px'
          ></EImage>
        </EColumn>
      </ESection>
      <ESection>
        <EColumn width='75%'>
          <EText>
            <h3 style={{ fontWeight: 'bold', marginTop: 0, marginBottom: 0 }}>
              {' '}
              <a
                href='https://blog.recast.ai/how-to-choose-the-best-channel-for-your-bot-the-ultimate-cheat-sheet/'
                style={{ color: '#3498DB', textDecoration: 'none' }}
              >
                How to choose the best channel for your bot: the ultimate cheat
                sheet
              </a>{' '}
            </h3>
            <p style={{ fontSize: '14px' }}>
              Bot channels do not offer the same features: here’s an analysis of
              a few to help you figure everything out.
            </p>
          </EText>
        </EColumn>
        <EColumn width='25%'>
          <EImage
            href='https://blog.recast.ai/how-to-choose-the-best-channel-for-your-bot-the-ultimate-cheat-sheet/'
            src='https://cdn.recast.ai/newsletter/184.jpg'
            width='100px'
          ></EImage>
        </EColumn>
      </ESection>
      <ESection>
        <EColumn width='100%'>
          <EDivider borderColor='#E0E0E0' borderWidth='1px'></EDivider>
        </EColumn>
      </ESection>
      <ESection>
        <EColumn>
          <EText paddingBottom='0px'>
            <h3 style={{ fontWeight: 'bold' }}>
              {' '}
              <a
                href='http://www.forbes.com/sites/quora/2016/09/23/what-are-the-differences-between-ai-machine-learning-nlp-and-deep-learning/#4f981bbb36f0'
                style={{ color: '#3498DB', textDecoration: 'none' }}
              >
                What are the differences between AI, machine learning, NLP, and
                deep learning?
              </a>{' '}
            </h3>
          </EText>
          <EImage
            href='http://www.forbes.com/sites/quora/2016/09/23/what-are-the-differences-between-ai-machine-learning-nlp-and-deep-learning/#4f981bbb36f0'
            paddingTop='0'
            src='https://cdn.recast.ai/newsletter/186.jpg'
            width='600px'
          ></EImage>
          <EText>
            <p style={{ fontSize: '14px' }}>
              {' '}
              So many big words in a booming market, let's take a step back and
              redefine which is what, and which does what.{' '}
            </p>
          </EText>
        </EColumn>
      </ESection>
      <ESection>
        <EColumn>
          <EText paddingBottom='0px'>
            <h3 style={{ fontWeight: 'bold' }}>
              {' '}
              <a
                href='https://chatbotsmagazine.com/the-implications-of-a-i-on-the-future-chatbots-eaedaf20bfb7#.28dezxtns'
                style={{ color: '#3498DB', textDecoration: 'none' }}
              >
                The implications of AI on the future chatbots
              </a>{' '}
            </h3>
          </EText>
          <EImage
            href='https://chatbotsmagazine.com/the-implications-of-a-i-on-the-future-chatbots-eaedaf20bfb7#.28dezxtns'
            paddingTop='0'
            src='https://cdn.recast.ai/newsletter/187.jpg'
            width='600px'
          ></EImage>
          <EText>
            <p style={{ fontSize: '14px' }}>
              {' '}
              Artificial intelligence, machine learning, neural networks: how
              can they be used with chatbots? What does the future hold?{' '}
            </p>
          </EText>
        </EColumn>
      </ESection>
      <ESection>
        <EColumn>
          <EText paddingBottom='0px'>
            <h3 style={{ fontWeight: 'bold' }}>
              {' '}
              <a
                href='https://chatbotsmagazine.com/nlp-and-the-coming-content-explosion-5ad45017f36f#.rr1g031tl'
                style={{ color: '#3498DB', textDecoration: 'none' }}
              >
                NLP and the coming content explosion
              </a>{' '}
            </h3>
          </EText>
          <EImage
            href='https://chatbotsmagazine.com/nlp-and-the-coming-content-explosion-5ad45017f36f#.rr1g031tl'
            paddingTop='0'
            src='https://cdn.recast.ai/newsletter/188.png'
            width='600px'
          ></EImage>
          <EText>
            <p style={{ fontSize: '14px' }}>
              {' '}
              Natural language powered interfaces are taking the world by storm,
              and we can't help but wonder how they'll change the way we
              deliver, read and share content.{' '}
            </p>
          </EText>
          <EDivider borderColor='#E0E0E0' borderWidth='1px'></EDivider>
        </EColumn>
      </ESection>
      <ESection>
        <EColumn width='65%'>
          <EImage
            align='left'
            href='https://recast.ai?ref=newsletter'
            src='https://cdn.recast.ai/newsletter/recast-ai-01.png'
            width='150px'
          ></EImage>
        </EColumn>
        <EColumn width='35%'>
          <ETable>
            <tr style={{ listStyle: 'none', lineHeight: 1 }}>
              <td>
                {' '}
                <a href='https://twitter.com/RecastAI'>
                  <img
                    width='25'
                    src='https://cdn.recast.ai/newsletter/twitter.png'
                  />
                </a>{' '}
              </td>
              <td>
                {' '}
                <a href='https://www.facebook.com/recastAI'>
                  <img
                    width='25'
                    src='https://cdn.recast.ai/newsletter/facebook.png'
                  />
                </a>{' '}
              </td>
              <td>
                {' '}
                <a href='https://medium.com/@RecastAI'>
                  <img
                    width='25'
                    src='https://cdn.recast.ai/newsletter/medium.png'
                  />
                </a>{' '}
              </td>
              <td>
                {' '}
                <a href='https://www.youtube.com/channel/UCA0UZlR8crpgwFiVaSTbVWw'>
                  <img
                    width='25'
                    src='https://cdn.recast.ai/newsletter/youtube.png'
                  />
                </a>{' '}
              </td>
              <td>
                {' '}
                <a href='https://plus.google.com/u/0/+RecastAi'>
                  <img
                    width='25'
                    src='https://cdn.recast.ai/newsletter/google%2B.png'
                  />
                </a>{' '}
              </td>
            </tr>
          </ETable>
        </EColumn>
      </ESection>
    </EBody>
  </EMail>
`;

const Recast: FC<any> = () => {
  const { html } = useEmail(recast, {
    validationLevel: 'soft'
  });

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
};

export default Recast;
