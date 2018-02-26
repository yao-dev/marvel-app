import PropTypes from 'prop-types';
import { Card, Icon, Image, Dimmer, Button, Header } from 'semantic-ui-react';

import Link from 'components/Link';
import utils from 'src/utils';

const styles = {
  container: {
    margin: '3em 2em',
    display: 'flex',
    flexFlow: 'column wrap',
    alignContent: 'center'
  },
  image: {
    width: '200px',
    marginBottom: '1.5em',
    WebkitBoxShadow: 'rgba(0, 0, 0, 0.85) 0px 0px 40px 0px',
    MozBoxShadow: 'rgba(0, 0, 0, 0.85) 0px 0px 40px 0px',
    boxShadow: 'rgba(0, 0, 0, 0.85) 0px 0px 40px 0px',
  },
  title: {
    textAlign: 'left',
    fontWeight: 'bold',
    color: '#FFF'
  }
};

/**
 * Component used to display the details of a marvel
 */
class MarvelCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleShow = () => this.setState({ active: true });
  handleHide = () => this.setState({ active: false });

  render() {
    const { active } = this.state;
    const href = { pathname: 'marvels', query: { id: this.props.id } };

    const content = (
      <div>
        {this.props.nameInHover ? <Header as='h2' inverted>{this.props.name}</Header> : null}
        <Link href={href}>
          <Button primary>View</Button>
        </Link>
      </div>
    );

    return (
      <div style={styles.container}>
        <Dimmer.Dimmable
          as={Image}
          dimmed={active}
          dimmer={{ active, content }}
          onMouseEnter={this.handleShow}
          onMouseLeave={this.handleHide}
          src={this.props.thumbnail}
          style={styles.image}
        />
        {this.props.name && !this.props.nameInHover ? <p style={styles.title}>{this.props.name}</p> : null}
      </div>
    );
  }
};

MarvelCard.propTypes = {
  /**
   * Marvel name
   */
  name: PropTypes.string,
  /**
   * MarvelCard's thumbnail source
   */
  thumbnail: PropTypes.string,
  /**
   * Display Marvel name in hover
   */
  nameInHover: PropTypes.bool,
};

MarvelCard.defaultProps = {
  thumbnail: '/static/images/react.png'
};

export default MarvelCard;
