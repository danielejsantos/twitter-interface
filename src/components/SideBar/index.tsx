import React from 'react';
import StickyBox from 'react-sticky-box';

import List from '../List';
import FollowSuggestion from '../FollowSuggestion';
import News from '../News';

import {
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body,
} from './styles';

import rocketseat from '../../assets/rocketseat.jpg';

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no Twitter" />
        <SearchIcon />
      </SearchWrapper>
      <StickyBox>
        <Body>
          <List
            title="Talvez você curta"
            elements={[
              <FollowSuggestion
                name="Rocketseat"
                nickname="@rocketseat"
                image={rocketseat}
              />,
              <FollowSuggestion name="Diego Fernandes" nickname="@dieegosf" />,
              <FollowSuggestion
                name="Guilherme Rodz"
                nickname="@guilherme_rodz"
              />,
            ]}
          />
          <List
            title="O que está acontencendo"
            elements={[<News />, <News />, <News />]}
          />
          <List
            title="O que está acontencendo"
            elements={[<News />, <News />, <News />]}
          />
          <List
            title="O que está acontencendo"
            elements={[<News />, <News />, <News />]}
          />
        </Body>
      </StickyBox>
    </Container>
  );
};

export default SideBar;
