import PropTypes from 'prop-types';
import NextLink from 'next/link';

class Link extends React.Component {
  render() {
    const { children, href, target, ...customProps } = this.props;
    return (
      <NextLink href={href}>
        <a target={target} {...customProps}>{children}</a>
      </NextLink>
    );
  }
};

Link.propTypes = {
  /**
   * Link content
   */
  children: PropTypes.node.isRequired,
  /**
   * Link address
   */
  href: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]).isRequired,
  /**
   * The target attribute specifies where to open the linked document
   */
  target: PropTypes.oneOf([
    '_blank',
    '_self',
    '_top',
    '_parent',
    'framename'
  ]),
  /**
   * All others props to apply to an a tag
   */
  customProps: PropTypes.any,
};

Link.defaultProps = {
  target: '_self'
};

export default Link;
