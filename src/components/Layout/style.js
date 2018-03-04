import styled from 'styled-components';
import { Header } from 'semantic-ui-react';

const MainContainer = styled.div`
  background: #212930;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #928DAB, #212930);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #928DAB, #212930); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  min-height: 101vh;
`;

const HeaderText = styled(Header)`
  padding: 1em 0em;
  margin: 0em;
`;

const ContentContainer = styled.div`
  padding: 2em 0em;
`;

export default {
  MainContainer,
  Header: HeaderText,
  ContentContainer
};
