import styled from 'styled-components'
import { Card, Icon, Image, Dimmer, Button, Header } from 'semantic-ui-react';

const MainContainer = styled.div`
  margin: 3em 2em;
  display: flex;
  flex-flow: column wrap;
  align-content: center;
`;

const DimmerDimmable = styled(Dimmer.Dimmable)`
  width: 200px;
  margin-bottom: 1.5em;
  -webkit-box-shadow: rgba(0, 0, 0, 0.85) 0px 0px 40px 0px;
  -moz-box-shadow: rgba(0, 0, 0, 0.85) 0px 0px 40px 0px;
  box-shadow: rgba(0, 0, 0, 0.85) 0px 0px 40px 0px;
`;

const MarvelName = styled.p`
  text-align: left;
  font-weight: bold;
  color: #FFF;
`;

export default {
  MainContainer,
  DimmerDimmable,
  MarvelName
};
