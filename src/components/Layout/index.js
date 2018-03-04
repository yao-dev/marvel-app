import PropTypes from 'prop-types';
import Head from 'next/head';
import { Container } from 'semantic-ui-react';

import Config from 'helpers/config';
import Connect from './container';
import Styled from './style';

/**
 * Layout component that wrap meta tag and content pages
 */
class Layout extends React.Component {
  componentWillMount() {
    this.props.getCharacters();
  }

  render() {
    return (
      <div>
        <Head>
          <title>{ this.props.title }</title>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
          />
          <link
            rel="stylesheet"
            href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"
          />
        </Head>

        <Styled.MainContainer>
          <Container textAlign="center">
            <Styled.Header as="h1">
              { this.props.title }
            </Styled.Header>
            <Styled.ContentContainer>
              { this.props.children }
            </Styled.ContentContainer>
          </Container>
        </Styled.MainContainer>
      </div>
    );
  }
};

Layout.propTypes = {
  /**
   * Children component
   */
  children: PropTypes.node.isRequired,
  /**
   * List of Marvel
   */
  characters: PropTypes.array,
  /**
   * Current page title
   */
  title: PropTypes.string,
};

Layout.defaultProps = {
  characters: [],
  title: Config.get('app_name')
};

export default Connect(Layout);
