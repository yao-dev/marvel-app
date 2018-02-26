import PropTypes from 'prop-types';
import { startCase } from 'lodash';
import { Header } from 'semantic-ui-react';

import Connect from './container';
import {
  MainContainer,
  RowContainer,
  GridContainer
} from './style';
import MarvelCard from 'components/MarvelCard';

/**
 * Component used to displayMode a collection of marvel cards
 */
class MarvelList extends React.Component {
  renderDisplayModeContainer = (displayMode, content) => {
    if (displayMode === 'row') {
      return (
        <RowContainer>
          {content}
        </RowContainer>
      );
    }

    return (
      <GridContainer>
        {content}
      </GridContainer>
    );
  }

  render() {
    const { title, marvels, displayMode, withCollection } = this.props;

    const content = marvels.map((marvel) => {
      const thumbnail = marvel.thumbnail ? `${marvel.thumbnail.path}.${marvel.thumbnail.extension}` : undefined;
      return (
        <MarvelCard
          key={marvel.id}
          id={marvel.id}
          name={marvel.name || marvel.title}
          description={marvel.description}
          thumbnail={thumbnail}
          nameInHover={withCollection}
        />
      );
    });

    return (
      <MainContainer>
        {title && marvels.length ? (
          <Header as='h2'>
            {startCase(title)} ({marvels.length})
          </Header>
        ) : null }
        {this.renderDisplayModeContainer(displayMode, content)}
      </MainContainer>
    );
  }
};

MarvelList.propTypes = {
  /**
   * Marvel group title
   */
  title: PropTypes.string,
  /**
   * List of Marvels
   */
  marvels: PropTypes.array,
  /**
   * List of collections
   */
  collections: PropTypes.array,
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
  marvels: [],
  collections: [],
  displayMode: PropTypes.oneOf(['row', 'grid']),
  withCollection: false,
};

export default Connect(MarvelList);
