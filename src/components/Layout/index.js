import PropTypes from 'prop-types';
import Head from 'next/head';
import { Container, Header } from 'semantic-ui-react';

import Connect from './container';
import Config from 'helpers/config';

const styles = {
  container: {
    background: '#212930',  /* fallback for old browsers */
    background: '-webkit-linear-gradient(to right, #928DAB, #212930)',  /* Chrome 10-25, Safari 5.1-6 */
    background: 'linear-gradient(to right, #928DAB, #212930)', /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    minHeight: '101vh',
  },
  title: {
    padding: '1em 0em',
    margin: '0em',
  },
  contentContainer: {
    padding: '2em 0em'
  }
};

/**
 * Layout component that wrap meta tag and content pages
 */
class Layout extends React.Component {
  componentWillMount() {
    this.props.getMarvels();
  }

  render() {
    return (
      <div>
        <Head>
          <title>{ this.props.title }</title>
          <meta charSet='utf-8' />
          <meta
            name='viewport'
            content='initial-scale=1.0, width=device-width'
          />
          <link
            rel='stylesheet'
            href='https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'
          />
          <link
            rel="stylesheet"
            href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"
          />
        </Head>

        <div style={styles.container}>
          <Container textAlign="center">
            <Header
              as='h1'
              style={styles.title}
            >
              { this.props.title }
            </Header>
            <div style={styles.contentContainer}>
              { this.props.children }
            </div>
          </Container>
        </div>
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
  marvels: PropTypes.array,
  /**
   * Current page title
   */
  title: PropTypes.string,
};

Layout.defaultProps = {
  marvels: [],
  title: Config.get('app_name')
};

export default Connect(Layout);
