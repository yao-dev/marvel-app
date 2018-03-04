import PropTypes from 'prop-types';
import { startCase } from 'lodash';
import { Header } from 'semantic-ui-react';

import MarvelCard from 'components/MarvelCard';
import Connect from './container';
import Styled from './style';

/**
 * Component used to displayMode a collection of marvel cards
 */
class MarvelList extends React.Component {
  renderDisplayModeContainer = (displayMode, content) => {
    switch (displayMode) {
      case 'row':
        return (
          <Styled.Row>
            {content}
          </Styled.Row>
        );
      case 'grid':
        return (
          <Styled.Grid>
            {content}
          </Styled.Grid>
        );
      default:
        return null;
    }
  }

  render() {
    const { title, list, displayMode, withCollection } = this.props;

    const content = list.map((character) => {
      const thumbnail = character.thumbnail ? (
        `${character.thumbnail.path}.${character.thumbnail.extension}`
      ) : undefined;
      const href = { pathname: this.props.page, query: { id: character.id } };

      return (
        <MarvelCard
          key={character.id}
          id={character.id}
          name={character.name || character.title}
          thumbnail={thumbnail}
          nameInHover={withCollection}
          href={href}
        />
      );
    });

    return (
      <Styled.MainContainer>
        {title && list.length ? (
          <Header as="h2">
            {startCase(title)} ({list.length})
          </Header>
        ) : null }
        {this.renderDisplayModeContainer(displayMode, content)}
      </Styled.MainContainer>
    );
  }
};

MarvelList.propTypes = {
  /**
   * Marvel group title
   */
  title: PropTypes.string,
  /**
   * Page name to redirect on click on item
   */
  page: PropTypes.string,
  /**
   * List of Marvels
   */
  list: PropTypes.array,
  /**
   * Displaying mode
   */
  displayMode: PropTypes.string.isRequired,
  /**
   * Come with Marvel collections
   */
  withCollection: PropTypes.bool
};

MarvelList.defaultProps = {
  list: [],
  displayMode: PropTypes.oneOf(['row', 'grid']),
  withCollection: false,
};

export default Connect(MarvelList);
