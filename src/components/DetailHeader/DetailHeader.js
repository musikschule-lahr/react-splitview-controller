import React from 'react';
import PropTypes from 'prop-types';
import Media from 'react-media';
import { Link } from 'react-router-dom';

import css from './DetailHeader.scss';

function DetailHeader({ title, mediaQuery, hideBackButton, backButton }) {
  return (
    <div className={css.header}>
      <Media query={mediaQuery}>
        {matches => matches && (
            <Link to={"../../"} style={{ visibility: hideBackButton ? "hidden" : "visible" }} className={css.back}>
              {backButton}
            </Link>
        )}
      </Media>
      <h1>{title}</h1>
    </div>
  );
}

DetailHeader.propTypes = {
  /**
   * Title string or component
   */
  title: PropTypes.node.isRequired,
  /**
   * react-media Media query
   */
  mediaQuery: PropTypes.string.isRequired,
  /**
   * Hide back button flag
   */
  hideBackButton: PropTypes.bool,
  /**
   * Back button element
   */
  backButton: PropTypes.element
}

DetailHeader.defaultProps = {
  hideBackButton: false,
  backButton: <span>Back</span>
}

export default DetailHeader;
