import React from 'react';

import {
  Container,
  Retweeted,
  RocketseatIcon,
  Body,
  Avatar,
  Content,
  Header,
  Dot,
  Description,
  ImageContent,
  Icons,
  Status,
  CommentIcon,
  RetweetIcon,
  LikeIcon,
} from './styles';

import rocketseat from '../../assets/rocketseat.jpg';

const Tweet: React.FC = () => {
  return (
    <Container>
      <Retweeted>
        <RocketseatIcon />
        Você retweetou
      </Retweeted>
      <Body>
        <Avatar src={rocketseat} />
        <Content>
          <Header>
            <strong>Rocketseat</strong>
            <span>@rocketseat</span>
            <Dot />
            <time>7 de jul</time>
          </Header>
          <Description>Faaala dev!</Description>
          <ImageContent />
          <Icons>
            <Status>
              <CommentIcon />
              12
            </Status>
            <Status>
              <RetweetIcon />
              58
            </Status>
            <Status>
              <LikeIcon />
              99
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
};

export default Tweet;
