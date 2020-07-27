import React from 'react';

import Feed from '../Feed';

import daniele from '../../assets/avatar.jpg';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton,
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar src={daniele} alt="Profile Picture" />
      </Banner>
      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>

        <h1>Daniele Santos</h1>
        <h2>@daniele</h2>

        <p>22, Front-End Developer at RioSlum Studio</p>

        <ul>
          <li>
            <LocationIcon />
            Brasil
          </li>
          <li>
            <CakeIcon />
            Nascida em 24 de novembro de 1997
          </li>

          <Followage>
            <span>
              seguindo <strong>218</strong>
            </span>
            <span>
              <strong>41 </strong>seguidores
            </span>
          </Followage>
        </ul>
      </ProfileData>
      <Feed />
    </Container>
  );
};

export default ProfilePage;
