import PropTypes from 'prop-types';
import { Image, Button, Header } from 'semantic-ui-react';

import utils from 'src/utils';
import Link from 'components/Link';
import Styled from './style';

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
    const content = (
      <div>
        {this.props.nameInHover ? (
          <Header as="h2" inverted>{this.props.name}</Header>
        ) : null }
        <Link href={this.props.href}>
          <Button primary>View</Button>
        </Link>
      </div>
    );

    return (
      <Styled.MainContainer>
        <Styled.DimmerDimmable
          as={Image}
          dimmed={active}
          dimmer={{ active, content }}
          onMouseEnter={this.handleShow}
          onMouseLeave={this.handleHide}
          src={this.props.thumbnail}
        />
        {this.props.name && !this.props.nameInHover ? (
          <Styled.MarvelName>{this.props.name}</Styled.MarvelName>
        ) : null }
      </Styled.MainContainer>
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
  /**
   * Link address
   */
  href: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]).isRequired
};

MarvelCard.defaultProps = {
  thumbnail: '/static/images/react.png'
};

export default MarvelCard;
