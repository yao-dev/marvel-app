import styled from 'styled-components';
import { Header } from 'semantic-ui-react';

import Link from 'components/Link';

const MainContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin: 5em 0em;
`;

const BreadcrumbLink = styled(Link)`
  color: #FFF;
  margin: 0.5em 0em;
`;

const DetailContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin: 5em 0em;
  justify-content: flex-start;
`;

const HeaderText = styled(Header)`
  text-align: left;
`;

const Text = styled.p`
  text-align: left;
`;

export default {
  MainContainer,
  Link: BreadcrumbLink,
  DetailContainer,
  Header: HeaderText,
  P: Text
};
