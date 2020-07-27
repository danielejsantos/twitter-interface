import React from 'react';

import { Container, Avatar, Image, Info, FollowButton } from './styles';

interface Props {
  name: string;
  nickname: string;
  image?: string;
}

const FollowSuggestion: React.FC<Props> = ({ name, nickname, image }) => {
  return (
    <Container>
      <div>
        {!image && <Avatar />}
        {image && <Image src={image} />}
        <Info>
          <strong>{name}</strong>
          <span>{nickname}</span>
        </Info>
      </div>
      <FollowButton outlined>Seguir</FollowButton>
    </Container>
  );
};

export default FollowSuggestion;
