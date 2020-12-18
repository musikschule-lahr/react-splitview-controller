import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, useRouteMatch } from 'react-router-dom';

import css from './MasterContainer.scss';

function MasterContainer({ header, listItems, ListItemComponent, height }) {
  const { path } = useRouteMatch();
  const items = listItems.map(item => (
    <NavLink exact activeClassName="master-container-active" key={item.id} to={`${path}/detail/${item.id}`} className={css.listItem}>
      <ListItemComponent item={item} />
    </NavLink>
  ));
  return (
    <section style={{height: height}}>
      {header}
      <div className={css.list}>
        {items}
      </div>
    </section>
  );
}

MasterContainer.propTypes = {
  /**
   * Header element
   */
  header: PropTypes.element,
  /**
   * Array of master list items
   */
  listItems: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.any.isRequired
  })),
  /**
   * List item component
   */
  ListItemComponent: PropTypes.elementType.isRequired,
  height: PropTypes.string
}

MasterContainer.defaultProps = {
  header: <>&nbsp;</>,
  listItems: [],
  height: "100%"
}

export default MasterContainer;
