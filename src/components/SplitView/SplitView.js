import React from 'react';
import PropTypes from 'prop-types';
import Media from 'react-media';
import { Route, Switch, useRouteMatch } from 'react-router-dom';

import css from './SplitView.scss';

function SplitView({ master, detail, mediaQuery }) {
  const { path } = useRouteMatch();
  return (
    <Media query={mediaQuery}>
      {matches => matches ? (
        <Switch>
          <Route exact path={path}>{master}</Route>
          <Route path={`${path}/detail/:detailId`}>{detail}</Route>
        </Switch>
      ) : (
        <section className={css.main}>
          <section className={css.master}>
            <Route path={path}>{master}</Route>
          </section>
          <section className={css.detail}>
            <Switch>
              <Route exact path={path}>{detail}</Route>
              <Route path={`${path}/detail/:detailId`}>{detail}</Route>
            </Switch>
          </section>
        </section>
      )}
    </Media>
  );
}

SplitView.propTypes = {
  master: PropTypes.element.isRequired,
  detail: PropTypes.element.isRequired,
  mediaQuery: PropTypes.string.isRequired
}

export default SplitView
